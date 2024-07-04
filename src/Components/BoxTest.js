import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { CircleGeometry, MeshBasicMaterial } from 'three';
import { Interactive } from '@react-three/xr';

function BoxTest() {
  const meshRef = useRef(); // Reference to the mesh
  const [selected, setSelected] = useState(false); // State to track selection

  // Function to handle pointer down (start selection)
  const handlePointerDown = () => {
    setSelected(true); // Start selection
  };

  // Function to handle pointer up (end selection)
  const handlePointerUp = () => {
    setSelected(false); // End selection
  };

  // Update material color based on selection state
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.material.color.set(selected ? 'red' : 'blue');
    }
  });

  return (
    <Interactive>
      <mesh
      ref={meshRef}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onSelectStart={() => {}} // Placeholder for compatibility, no direct effect
    >
      <circleGeometry args={[0.5, 64]} />
      <meshBasicMaterial side="DoubleSide" color="blue" />
    </mesh>
    </Interactive>
  );
}

export default BoxTest;
