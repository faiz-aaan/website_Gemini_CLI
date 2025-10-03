'use client';

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

export function Background3D() {
  const mountRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!mountRef.current) return;

    let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer, points: THREE.Points;
    let mouseX = 0, mouseY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    function init() {
      camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 2, 2000);
      camera.position.z = 1000;

      scene = new THREE.Scene();
      const particles = 5000;
      const geometry = new THREE.BufferGeometry();
      const positions = [];

      for (let i = 0; i < particles; i++) {
        const x = Math.random() * 2000 - 1000;
        const y = Math.random() * 2000 - 1000;
        const z = Math.random() * 2000 - 1000;
        positions.push(x, y, z);
      }

      geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

      const particleColor = resolvedTheme === 'dark' ? 0xffffff : 0x888888;
      const material = new THREE.PointsMaterial({ color: particleColor, size: 2, fog: true });
      points = new THREE.Points(geometry, material);
      scene.add(points);
      
      const fogColor = resolvedTheme === 'dark' ? 0x000000 : 0xffffff;
      scene.fog = new THREE.FogExp2(fogColor, 0.001);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      mountRef.current!.appendChild(renderer.domElement);

      document.addEventListener('mousemove', onDocumentMouseMove);
      window.addEventListener('resize', onWindowResize);
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function onDocumentMouseMove(event: MouseEvent) {
      mouseX = (event.clientX - windowHalfX) * 0.25;
      mouseY = (event.clientY - windowHalfY) * 0.25;
    }

    function animate() {
      requestAnimationFrame(animate);
      render();
    }

    function render() {
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      points.rotation.x += 0.0005;
      points.rotation.y += 0.0005;
      
      renderer.render(scene, camera);
    }

    init();
    animate();

    return () => {
      document.removeEventListener('mousemove', onDocumentMouseMove);
      window.removeEventListener('resize', onWindowResize);
      if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [resolvedTheme]);

  return <div ref={mountRef} className="absolute inset-0 -z-10" />;
}
