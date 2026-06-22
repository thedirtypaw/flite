"use client";

/**
 * FlowField — Flite "three strands, one matrix" hero animation.
 * Three silk ribbons that twist, drift and converge, with per-band multi-stop
 * gradients, lengthwise strands, a fresnel edge, and a readability floor.
 *
 * Stack: Next.js App Router + raw three.js (no react-three-fiber). Only `three`.
 *
 * Usage (see the knobs .md for full details):
 *   <section className="relative h-[80vh]">
 *     <FlowField className="absolute inset-0 pointer-events-none mix-blend-multiply" />
 *     <div className="relative z-10"> ...hero copy... </div>
 *   </section>
 *
 * It fills its parent, so give the parent a height.
 */

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

/* =========================================================================
   TUNABLE GEOMETRY/CAMERA CONSTANTS  (see knobs .md)
   ========================================================================= */
const BASE_Z = 9;            // camera distance (smaller = bands appear larger)
const HALF_WIDTH = 1.5;      // band thickness
const TWIST_AMP = 2.3;       // how far each band rolls over
const SPREAD_L = 0.03;       // left ends: ~converged
const SPREAD_R = 1.0;        // right ends: fanned out
const NOISE1 = 0.09;         // subtle longitudinal ribbon noise (coarse)
const NOISE2 = 0.045;        //                                  (finer)
const START: [number, number, number] = [-6.6, -3.7, 0.0];  // diagonal start
const DELTA: [number, number, number] = [13.2, 7.4, 0.0];   // diagonal vector

/* =========================================================================
   PER-BAND CONFIG  (top -> bottom on screen). Edit colours/positions here.
   ========================================================================= */
type BandDef = {
  y: number; phase: number; seed: number; speed: number;
  twistFreq: number; envSkew: number;
  stripes: number; stripeDark: number; stripeWidth: number;
  count: number; pos: number[]; col: number[][];
};

const BANDS: BandDef[] = [
  // yellow -> orange  (TOP)
  { y: 2.4, phase: 9.1, seed: 4.8, speed: 0.745, twistFreq: 2.07, envSkew: 1.18,
    stripes: 84, stripeDark: 0.80, stripeWidth: 0.045,
    count: 4, pos: [0.0, 0.25, 0.70, 1.0],
    col: [[0.99,0.86,0.42],[0.99,0.78,0.36],[1.00,0.66,0.30],[1.00,0.56,0.26]] },
  // green -> yellow  (MIDDLE)
  { y: 0.0, phase: 4.3, seed: 2.4, speed: 0.61, twistFreq: 1.66, envSkew: 0.82,
    stripes: 76, stripeDark: 0.78, stripeWidth: 0.060,
    count: 3, pos: [0.0, 0.55, 1.0, 1.0],
    col: [[0.52,0.86,0.46],[0.78,0.88,0.40],[0.98,0.86,0.34],[0.98,0.86,0.34]] },
  // blue -> violet  (BOTTOM, sits under the headline)
  { y: -2.4, phase: 0.0, seed: 0.0, speed: 0.83, twistFreq: 1.30, envSkew: 1.00,
    stripes: 80, stripeDark: 0.82, stripeWidth: 0.050,
    count: 4, pos: [0.0, 0.30, 0.65, 1.0],
    col: [[0.40,0.66,0.98],[0.52,0.62,0.99],[0.55,0.45,0.97],[0.60,0.34,0.95]] },
];

/* ============================== shaders ================================= */
const VERT = /* glsl */ `
  uniform float uTime, uPhase, uYOffset, uSeed, uSpeed, uTwistFreq, uEnvSkew;
  uniform float uHalfWidth, uTwistAmp, uSpreadL, uSpreadR, uNoise1, uNoise2;
  uniform vec3 uStart, uDelta;
  varying vec2 vUv; varying vec3 vN; varying vec3 vViewPos;

  const float PI = 3.14159265;

  vec3 perpDir(){ vec3 d = normalize(uDelta); return vec3(-d.y, d.x, 0.0); }
  float env(float u){ float us = pow(clamp(u,0.0,1.0), uEnvSkew); return pow(sin(PI*us), 1.3); }
  float wob(float ph, float t, float spd){ return sin(ph + t*spd) - sin(ph); }

  vec3 center(float u, float t){
    vec3 p = uStart + uDelta*u;
    float e = env(u);
    float base = sin(u*PI*1.5+0.5)*0.55 + sin(u*PI*3.0+1.1)*0.18;
    float anim = e*(wob(u*PI*1.5+0.5,t,0.18)*0.55 + wob(u*PI*3.0+1.1,t,0.13)*0.18);
    float lon  = e*(sin(u*PI*5.3 + uSeed*1.9 + t*0.05)*uNoise1
                  + sin(u*PI*9.1 + uSeed*1.3)*uNoise2);
    p += perpDir()*(base + anim + lon);
    p.z += sin(u*PI*1.2+0.2)*0.30 + e*wob(u*PI*1.2+0.2,t,0.16)*0.5;
    return p;
  }
  float twist(float u, float t){ return env(u)*uTwistAmp*sin(u*PI*uTwistFreq + uSeed + t*0.20); }
  vec3 widthDir(float u, float t){
    float eps = 0.002;
    vec3 tan = normalize(center(u+eps,t) - center(u-eps,t));
    vec3 wp  = normalize(cross(tan, vec3(0.0,0.0,1.0)));
    float c  = twist(u,t);
    return normalize(wp*cos(c) + vec3(0.0,0.0,1.0)*sin(c));
  }
  vec3 ribbon(float u, float vparam, float t){ return center(u,t) + widthDir(u,t)*(vparam*uHalfWidth); }

  void main(){
    float u = uv.x; float vparam = uv.y*2.0 - 1.0; float t = uTime*uSpeed + uPhase;
    vec3 p  = ribbon(u, vparam, t);
    float du = 0.004, dv = 0.03;
    vec3 pu = ribbon(min(u+du,1.0), vparam, t);
    vec3 pv = ribbon(u, vparam+dv, t);
    vec3 nrm = normalize(cross(pu-p, pv-p));
    p.y += uYOffset * mix(uSpreadL, uSpreadR, u);
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    vViewPos = mv.xyz; vUv = uv; vN = normalize(normalMatrix * nrm);
    gl_Position = projectionMatrix * mv;
  }
`;

const FRAG = /* glsl */ `
  precision highp float;
  uniform float uTime, uSeed;
  uniform vec3 uLight;
  uniform float uFresnelPow, uFresnelInt, uStripes, uStripeDark, uStripeWidth, uFloor;
  uniform int uStopCount; uniform vec3 uStopCol[4]; uniform float uStopPos[4];
  varying vec2 vUv; varying vec3 vN; varying vec3 vViewPos;

  float animPos(int i, float p){ return p + 0.03 * sin(uTime*0.45 + float(i)*2.1 + uSeed); }
  vec3 animCol(int i, vec3 c){ return c * (0.93 + 0.07 * sin(uTime*0.5 + float(i)*1.7 + uSeed)); }

  vec3 gradient(float x){
    vec3 c = animCol(0, uStopCol[0]);
    for (int i = 0; i < 3; i++){
      if (i + 1 < uStopCount){
        float p0 = animPos(i, uStopPos[i]);
        float p1 = animPos(i+1, uStopPos[i+1]);
        float seg = clamp((x - p0) / max(p1 - p0, 1e-4), 0.0, 1.0);
        c = mix(c, animCol(i+1, uStopCol[i+1]), step(p0, x) * smoothstep(0.0, 1.0, seg));
      }
    }
    return c;
  }
  void main(){
    vec3 N = gl_FrontFacing ? normalize(vN) : -normalize(vN);
    float diff = clamp(dot(N, normalize(uLight)), 0.0, 1.0);
    float shade = 0.45 + 0.55 * diff;

    vec3 grad = gradient(vUv.x);
    vec3 col = grad * shade;

    float f = fract(vUv.y * uStripes);
    float line = smoothstep(0.0, uStripeWidth, f) * smoothstep(0.0, uStripeWidth, 1.0 - f);
    col *= mix(uStripeDark, 1.0, line);

    vec3 Vv = normalize(-vViewPos);
    float fres = pow(1.0 - clamp(dot(N, Vv), 0.0, 1.0), uFresnelPow) * uFresnelInt;
    col += grad * fres;

    float lum = dot(col, vec3(0.299, 0.587, 0.114));
    col *= (lum < uFloor) ? (uFloor / max(lum, 1e-3)) : 1.0;
    col = min(col, vec3(1.0));

    float feather = smoothstep(0.0, 0.14, vUv.y) * smoothstep(0.0, 0.14, 1.0 - vUv.y)
                  * smoothstep(0.0, 0.05, vUv.x) * smoothstep(0.0, 0.05, 1.0 - vUv.x);
    gl_FragColor = vec4(col, feather);
  }
`;

function pad<T>(arr: T[], n: number): T[] { const o = arr.slice(); while (o.length < n) o.push(o[o.length - 1]); return o; }

export interface FlowFieldProps {
  className?: string;
  style?: React.CSSProperties;
  /** Overall motion speed (1 = default). */
  speed?: number;
  /** Readability floor: minimum brightness, 0..1 (default 0.5). */
  floor?: number;
  /** Subtle pointer parallax on mouse devices (default false). */
  interactive?: boolean;
}

const FlowField: React.FC<FlowFieldProps> = ({
  className, style, speed = 1, floor = 0.5, interactive = false,
}) => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia?.("(max-width: 768px)").matches;

    const renderer = new THREE.WebGLRenderer({
      alpha: true, premultipliedAlpha: false, antialias: !isMobile, powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);
    renderer.domElement.style.cssText = "display:block;width:100%;height:100%;";

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0, BASE_Z); camera.lookAt(0, 0, 0);
    const group = new THREE.Group();
    scene.add(group);

    // lighter geometry on phones
    const U = isMobile ? 160 : 240;
    const V = isMobile ? 24 : 28;
    const positions: number[] = [], uvs: number[] = [], indices: number[] = [];
    for (let i = 0; i <= U; i++) for (let j = 0; j <= V; j++) { positions.push(i / U, j / V, 0); uvs.push(i / U, j / V); }
    const row = V + 1;
    for (let i = 0; i < U; i++) for (let j = 0; j < V; j++) {
      const a = i * row + j, b = a + 1, c = a + row, d = c + 1; indices.push(a, c, b, b, c, d);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
    geometry.setIndex(indices);

    const light = new THREE.Vector3(-0.4, 0.7, 0.6).normalize();
    const startV = new THREE.Vector3(...START);
    const deltaV = new THREE.Vector3(...DELTA);

    const materials = BANDS.map((bd, i) => {
      const m = new THREE.ShaderMaterial({
        side: THREE.DoubleSide, transparent: true, depthWrite: false,
        vertexShader: VERT, fragmentShader: FRAG,
        uniforms: {
          uTime: { value: 0 }, uPhase: { value: bd.phase }, uYOffset: { value: bd.y },
          uSeed: { value: bd.seed }, uSpeed: { value: bd.speed },
          uTwistFreq: { value: bd.twistFreq }, uEnvSkew: { value: bd.envSkew },
          uHalfWidth: { value: HALF_WIDTH }, uTwistAmp: { value: TWIST_AMP },
          uSpreadL: { value: SPREAD_L }, uSpreadR: { value: SPREAD_R },
          uNoise1: { value: NOISE1 }, uNoise2: { value: NOISE2 },
          uStart: { value: startV }, uDelta: { value: deltaV },
          uLight: { value: light }, uFresnelPow: { value: 2.5 }, uFresnelInt: { value: 0.35 },
          uStripes: { value: bd.stripes }, uStripeDark: { value: bd.stripeDark }, uStripeWidth: { value: bd.stripeWidth },
          uFloor: { value: floor },
          uStopCount: { value: bd.count },
          uStopPos: { value: pad(bd.pos, 4) },
          uStopCol: { value: pad(bd.col, 4).map((c) => new THREE.Vector3(c[0], c[1], c[2])) },
        } as any,
      });
      m.blending = THREE.CustomBlending;
      m.blendEquation = THREE.AddEquation;
      m.blendSrc = THREE.OneMinusDstAlphaFactor;
      m.blendDst = THREE.SrcColorFactor;
      m.blendEquationAlpha = THREE.AddEquation;
      m.blendSrcAlpha = THREE.OneFactor;
      m.blendDstAlpha = THREE.OneMinusSrcAlphaFactor;
      const mesh = new THREE.Mesh(geometry, m);
      mesh.frustumCulled = false; mesh.renderOrder = i;
      group.add(mesh);
      return m;
    });

    const fit = () => {
      const w = mount.clientWidth || 1, h = mount.clientHeight || 1;
      renderer.setSize(w, h, false);
      const aspect = w / h;
      camera.aspect = aspect;
      // portrait: pull the camera back so the diagonal still fills the frame
      const F = 2 * Math.tan((42 * Math.PI / 180) / 2); // fov factor
      const ART_W = 10, ART_H = 7;                        // world size to fill
      camera.position.z = Math.min(ART_W / (F * aspect), ART_H / F);
      camera.updateProjectionMatrix();
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(mount);

    // optional pointer parallax (mouse only)
    const pointer = { x: 0, y: 0 };
    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      const r = mount.getBoundingClientRect();
      pointer.x = ((e.clientX - r.left) / r.width) * 2 - 1;
      pointer.y = ((e.clientY - r.top) / r.height) * 2 - 1;
    };
    if (interactive) window.addEventListener("pointermove", onMove);

    // pause when scrolled out of view
    let visible = true;
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; }, { threshold: 0 });
    io.observe(mount);

    const clock = new THREE.Clock();
    let raf = 0, tAccum = 0;
    const renderOnce = (t: number) => {
      for (const m of materials) m.uniforms.uTime.value = t;
      if (interactive) {
        group.rotation.y += (pointer.x * 0.05 - group.rotation.y) * 0.05;
        group.rotation.x += (pointer.y * 0.04 - group.rotation.x) * 0.05;
      }
      renderer.render(scene, camera);
    };

    if (reduceMotion) {
      renderOnce(8); // single static frame
    } else {
      const tick = () => {
        raf = requestAnimationFrame(tick);
        if (!visible) return;
        tAccum += clock.getDelta() * 0.5 * speed;
        renderOnce(tAccum);
      };
      tick();
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect(); io.disconnect();
      if (interactive) window.removeEventListener("pointermove", onMove);
      geometry.dispose();
      materials.forEach((m) => m.dispose());
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
    };
  }, [speed, floor, interactive]);

  return (
    <div ref={mountRef} className={className} style={{ width: "100%", height: "100%", ...style }} />
  );
};

export default FlowField;
