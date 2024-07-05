import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Interactive } from '@react-three/xr';
import { Text } from '@react-three/drei';

function BoxTest({ initialCounter }) {
  const meshRef = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const [counter, setCounter] = useState(initialCounter);

  const handleHoverStart = () => {
    setIsHovered(true);
    console.log("hovering ");
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    console.log("hover'nting");
  };

  // Counter logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        return isHovered ? prevCounter + 1 : prevCounter > 0 ? prevCounter - 1 : 0;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isHovered]);

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
      {/* Display counter text above the circle */}
      <Text position={[0, 0.3, 0]} fontSize={0.1} color="green">
        {counter}
      </Text>
    </Interactive>
  );
}

export default BoxTest;
