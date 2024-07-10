import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

function Smoke({ count, color, fadeDuration, maxHeight, speed, posX, posY, posZ }) {
  const particlesRef = useRef();

  useEffect(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 4);

    const baseColor = new THREE.Color(color);


    // Generate particles within a bounded area
    for (let i = 0; i < count; i++) {
        positions[i] = posX; // X position
        positions[i + 1] = posY; // Y position
        positions[i + 2] = posZ; // Z position

        colors[i * 4] = baseColor.r;
        colors[i * 4 + 1] = baseColor.g;
        colors[i * 4 + 2] = baseColor.b;
        colors[i * 4 + 3] = 0; // Start off transparent
      }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 4));

    const material = new THREE.PointsMaterial({
      size: 1,
      vertexColors: true,
      map: new THREE.TextureLoader().load('/Textures/smoke1.png'),
      transparent: true,
      depthWrite: false,
    });

    particlesRef.current = new THREE.Points(geometry, material);
    particlesRef.current.castShadow = true; // Enable casting shadows
    particlesRef.current.receiveShadow = true; // Enable receiving shadows

    return () => {
      // Clean up when component unmounts
      if (particlesRef.current) {
        particlesRef.current.geometry.dispose();
        particlesRef.current.material.dispose();
      }
    };
  }, [count, color, posX, posY, posZ]);

  useFrame(() => {
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array;
      const colors = particlesRef.current.geometry.attributes.color.array;

      for (let i = 0; i < positions.length; i += 3) {

        // Update Y position to create rising effect
        positions[i + 1] += speed * Math.random(); // Adjust speed or randomness as needed

        // Calculate opacity based on y position and fadeDuration
        const realHeight = maxHeight + posY;
        const currentY = positions[i + 1];
        const alphaIndex = (i / 3) * 4 + 3;

        if (currentY < fadeDuration) {
          colors[alphaIndex] = currentY / fadeDuration; // Fade in
        } else {
          colors[alphaIndex] = (realHeight - currentY) / (realHeight - fadeDuration); // Fade out
        }

        // Wrap particles to keep them within a certain range
        if (positions[i + 1] > realHeight) {
          positions[i] = (Math.random() * 0.15) + posX; // Reset X position
          positions[i + 1] = (Math.random() * 0.75) - posY; // Reset Y position
          positions[i + 2] = (Math.random() * 0.15) + posZ ; // Reset Z position
          colors[alphaIndex] = 0; // Reset opacity
        }
      }

      particlesRef.current.geometry.attributes.position.needsUpdate = true;
      particlesRef.current.geometry.attributes.color.needsUpdate = true;
    }
  });

  return particlesRef.current ? <primitive object={particlesRef.current} /> : null;
}

export default Smoke;