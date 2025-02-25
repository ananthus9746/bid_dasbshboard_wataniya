import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

function GlobeDemo() {
  const globeRef = useRef(null);

  useEffect(() => {
    const container = globeRef.current;

    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(container.offsetHeight, container.offsetHeight);
    container.appendChild(renderer.domElement);

    const lights = [
      new THREE.PointLight(0x5a54ff, 0.75, 0).position.set(-150, 150, -50),
      new THREE.PointLight(0x4158f6, 0.75, 0).position.set(-400, 200, 150),
      new THREE.PointLight(0x803bff, 0.7, 0).position.set(100, 250, -100),
    ];
    lights.forEach((light) => scene.add(light));

    const atmosphereMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.99 - dot(vNormal, vec3(0, 0, 1.0)), 6.0);
gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0) * intensity;
        }
      `,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true,
    });

    const sphereGeometry = new THREE.SphereGeometry(2, 64, 64);

    const atmosphere = new THREE.Mesh(sphereGeometry, atmosphereMaterial);
    atmosphere.scale.set(1.05, 1.05, 1.05);
    scene.add(atmosphere);

    const earthMaterial = new THREE.MeshLambertMaterial({ color: 0xeeeeee });
    const earthSphere = new THREE.Mesh(sphereGeometry, earthMaterial);
    scene.add(earthSphere);

    const loader = new THREE.TextureLoader();
    const overlayMaterial = new THREE.MeshBasicMaterial({
      map: loader.load('./map.jpg'),
      transparent: true,
      opacity: 1, // Adjust this value (0 is fully transparent, 1 is fully opaque)

    });

    const overlaySphere = new THREE.Mesh(new THREE.SphereGeometry(2.003, 64, 64), overlayMaterial);
    earthSphere.add(overlaySphere);

    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 6;

    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const handleMouseDown = (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const handleMouseMove = (e) => {
      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;

        earthSphere.rotation.y += deltaX * 0.004;
        earthSphere.rotation.x += deltaY * 0.004;

        previousMousePosition = { x: e.clientX, y: e.clientY };
      }
    };

    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseUp);

    const animate = () => {
      if (!isDragging) {
        earthSphere.rotation.y += 0.004;
      }
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      renderer.setSize(container.offsetHeight, container.offsetHeight);
      camera.aspect = 1;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseUp);
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={globeRef} style={{ width: '1500px', height: '1600px', overflow: 'hidden', position: 'relative' }} />;
}

export default GlobeDemo;
