import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Interactive } from '@react-three/xr';
import { Text } from '@react-three/drei';

function BoxTest({ updateTotalAdditions }) {
  const meshRef = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const [counter, setCounter] = useState(6.4);

  const handleHoverStart = () => {
    setIsHovered(true);
    // console.log("hovering ");
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    // console.log("hover'nting");
  };

  // Counter logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        if (isHovered && prevCounter <= 6.3) {
          const newCounter = prevCounter + 0.1 > 6.3 ? 6.3 : prevCounter + 0.1;
          updateTotalAdditions();
          return newCounter;
        } else {
          return prevCounter > 0 ? prevCounter - 0.05 : 0;
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isHovered]);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.material.color.set(isHovered ? 'red' : 'blue');
    }
  });

  return (
    <>
    <Interactive
      onHover={handleHoverStart}
      onBlur={handleHoverEnd}
    >
      <mesh ref={meshRef}>
        <circleGeometry args={[0.3, 64]} />
        <meshBasicMaterial />
      </mesh>
      <mesh position={[0, 0, 0.01]}>
        <ringGeometry args={[0.2, 0.3, 64, 1, 0, counter]}/>
      </mesh>
      {/* Display counter text above the circle */}
    </Interactive>
    <Text position={[0, 0.6, 0.0001]} fontSize={0.3} color="green">
    {counter}
  </Text>
    </>
  );
}

export default BoxTest;
