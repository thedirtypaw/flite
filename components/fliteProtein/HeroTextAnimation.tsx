"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";

const HeroTextAnimation = ({ text }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 500 / 150, 0.1, 1000);
    camera.position.set(0, 0, 3);

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(600, 150);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.autoClear = false;
    mountRef.current.appendChild(renderer.domElement);

    const gl = renderer.getContext();
    gl.enable(gl.STENCIL_TEST);

    // ✅ Last working JSON font loading
    const fontLoader = new FontLoader();
    fontLoader.load("/fonts/Degular.json", (font) => {
      const textGeometry = new TextGeometry(text, {
        font: font,
        size: 1,
        depth: 0.1,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.02,
        bevelSize: 0.02,
        bevelSegments: 5,
      });

      const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const textMesh = new THREE.Mesh(textGeometry, textMaterial);
      textMesh.position.set(-2.5, 0, 0);

      // ✅ Stencil mask for the text
      const stencilMaterial = new THREE.MeshBasicMaterial({
        colorWrite: false,
        stencilWrite: true,
        stencilFunc: THREE.AlwaysStencilFunc,
        stencilRef: 1,
        stencilZPass: THREE.ReplaceStencilOp,
      });

      const stencilMesh = new THREE.Mesh(textGeometry, stencilMaterial);
      stencilMesh.position.copy(textMesh.position);
      scene.add(stencilMesh);

      // ✅ Animated background shader
      const planeGeometry = new THREE.PlaneGeometry(10, 5);
      const planeMaterial = new THREE.ShaderMaterial({
        vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          varying vec2 vUv;
          uniform float time;
          void main() {
            float r = abs(sin(vUv.x * 5.0 + time));
            float g = abs(cos(vUv.y * 5.0 + time));
            float b = abs(sin((vUv.x + vUv.y) * 3.0 - time));
            gl_FragColor = vec4(r, g, b, 1.0);
          }
        `,
        uniforms: { time: { value: 0 } },
        stencilWrite: true,
        stencilFunc: THREE.EqualStencilFunc,
        stencilRef: 1,
      });

      const backgroundMesh = new THREE.Mesh(planeGeometry, planeMaterial);
      scene.add(backgroundMesh);

      // ✅ Animation loop
      const animate = () => {
        requestAnimationFrame(animate);
        planeMaterial.uniforms.time.value += 0.01;
        renderer.clear();
        renderer.render(scene, camera);
      };
      animate();
    });

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [text]);

  return <div ref={mountRef} className="absolute inset-0 w-full h-full overflow-hidden" />;
};

export default HeroTextAnimation;
