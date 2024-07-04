import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Interactive } from '@react-three/xr';

function BoxTest({ onSelectionChange }) {
  const meshRef = useRef(); // Reference to the mesh
  const [selected, setSelected] = useState(false); // State to track selection

  // Function to handle selection start
  const handleSelectStart = () => {
    setSelected(true); // Start selection
    console.log("Selected started");
    if (onSelectionChange) {
      onSelectionChange(true); // Notify parent of selection start
    }
  };

  // Function to handle selection end
  const handleSelectEnd = () => {
    setSelected(false); // End selection
    console.log("Selected ended");
    if (onSelectionChange) {
      onSelectionChange(false); // Notify parent of selection end
    }
  };

  // Update material color based on selection state
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.material.color.set(selected ? 'red' : 'blue');
    }
  });

  return (
    <Interactive
      onSelectStart={handleSelectStart}
      onSelectEnd={handleSelectEnd}
    >
      <mesh ref={meshRef}>
        <circleGeometry args={[0.5, 64]} />
        <meshBasicMaterial side="DoubleSide" color="blue" />
      </mesh>
    </Interactive>
  );
}

export default BoxTest;
