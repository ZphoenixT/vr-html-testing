import { Plane } from '@react-three/drei';
import React, { useState, useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';

function MenuBackground({ fade }) {
  const [opacity, setOpacity] = useState(1); // Initial opacity
  const materialRef = useRef();

  useFrame(() => {
    if (fade && opacity > 0) {
      setOpacity((prev) => Math.max(prev - 0.002, 0)); // Decrease opacity gradually
      if (materialRef.current) {
        materialRef.current.opacity = opacity;
      }
    }
  });

  return (
    <Plane args={[25, 13.5]} position={[0, 1.5, -3]} rotation={[0, 0, 0]}>
      <meshStandardMaterial
        ref={materialRef}
        attach="material"
        color="#000"
        transparent={true}
        opacity={opacity}
      />
    </Plane>
  );
}

export default MenuBackground;
