"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { ImprovedNoise } from "three/examples/jsm/math/ImprovedNoise.js";

const CTAButton = ({ text, href }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 500 / 100, 0.1, 1000);
    camera.position.set(0, 0, 2.5); // Original perspective from example

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(500, 100);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Create Animated Wave with Simplex Noise on Vertices
    const geometry = new THREE.PlaneGeometry(50, 25, 256, 256);
    const vertices = geometry.attributes.position.array;
    const noise = new ImprovedNoise();
    let time = 0;

    const updateWave = () => {
      for (let i = 0; i < vertices.length; i += 3) {
        let x = vertices[i];
        let y = vertices[i + 1];
        vertices[i + 2] = noise.noise(x * 0.2, y * 0.2, time) * 3.0;
      }
      geometry.attributes.position.needsUpdate = true;
      time += 0.01;
    };

    const material = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec2 vUv;
        uniform float time;
        void main() {
          vUv = uv;
          vec3 pos = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        uniform float time;
        
        float clampColor(float value) {
          return mix(0.3, 0.8, value); // Adjusted for vibrant colors, avoiding grays
        }
        
        void main() {
          float r = clampColor(sin(time * 0.2 + vUv.x * 3.0) * 0.6 + 0.4);
          float g = clampColor(cos(time * 0.3 + vUv.y * 3.0) * 0.6 + 0.4);
          float b = clampColor(sin(time * 0.25 + vUv.y * 3.0 + vUv.x * 3.0) * 0.6 + 0.4);
          gl_FragColor = vec4(r, g, b, 1.0);
        }
      `,
      uniforms: { time: { value: 0 } },
    });
    const wave = new THREE.Mesh(geometry, material);
    wave.receiveShadow = true;
    wave.castShadow = true;
    scene.add(wave);

    // Dynamic Lighting
    const light = new THREE.PointLight(0xffffff, 2, 100);
    light.position.set(0, 5, 5);
    light.castShadow = true;
    scene.add(light);

    // Mouse Interaction
    document.addEventListener("mousemove", (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      wave.rotation.x = y * 0.1;
      wave.rotation.y = x * 0.1;
    });

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      updateWave();
      material.uniforms.time.value += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement); // ✅ safe
      }
    };
  }, []);

  return (
    <div className="flex justify-center my-10">
      <a
        href={href}
        className="relative flex items-center justify-center w-[500px] h-[100px] px-10 py-5 text-[2rem] font-bold font-gabarito text-white rounded-xl overflow-hidden bg-gray-900 transition-transform hover:scale-105"
      >
        <span ref={mountRef} className="absolute inset-0" />
        <span className="relative z-20">{text}</span>
      </a>
    </div>
  );
};

export default CTAButton;
