import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Interactive } from '@react-three/xr';

function BoxTest({ onHoverChange }) {
  const meshRef = useRef(); // Reference to the mesh
  const [isHovered, setIsHovered] = useState(false); // State to track selection

  // Function to handle selection start
  const handleHoverStart = () => {
    setIsHovered(true); // Start selection
    console.log("hovering ");
    if (onHoverChange) {
      onHoverChange(true); // Notify parent of selection start
    }
  };

  // Function to handle selection end
  const handleHoverEnd = () => {
    setIsHovered(false); // End selection
    console.log(" hover'nting");
    if (onHoverChange) {
      onHoverChange(false); // Notify parent of selection end
    }
  };

  // Update material color based on selection state
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.material.color.set(isHovered ? 'red' : 'blue');
    }
  });

  return (
    <Interactive
      onHover={handleHoverStart}
      onBlur={handleHoverEnd}
    >
      <mesh ref={meshRef}>
        <circleGeometry args={[0.2, 64]} />
        <meshBasicMaterial side="DoubleSide" color="blue" />
      </mesh>
    </Interactive>
  );
}

export default BoxTest;
