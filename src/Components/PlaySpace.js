import React, { useState, useEffect } from 'react';
import { VRButton, XR, Controllers, useXR } from '@react-three/xr';
import { Canvas } from '@react-three/fiber';
import { Plane, OrbitControls, Text } from '@react-three/drei';
import BoxTest from './BoxTest';

function PlaySpace() {
  const [counter, setCounter] = useState(20);
  const [incrementing, setIncrementing] = useState(1);
  const { controllers } = useXR();

  // Counter logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        if (incrementing === 1 && prevCounter < 20) {
          return prevCounter + 1;
        } else if (incrementing === 2 && prevCounter > 0) {
          return prevCounter - 1;
        } else {
          return prevCounter;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [incrementing]);

  // Handle selection state from BoxTest
  const handleSelectionChange = (isSelected) => {
    console.log(`Selection changed: ${isSelected}`);
    setIncrementing(isSelected ? 1 : 2);
  };

  return (
    <>
      <mesh position={[-3, 1, -2]} rotation={[0, Math.PI / 4, 0]}>
        <BoxTest onSelectionChange={handleSelectionChange} />
      </mesh>

      <mesh position={[0, 1, -3]}>
        <BoxTest onSelectionChange={handleSelectionChange} />
      </mesh>

      <mesh position={[3, 1, -2]} rotation={[0, Math.PI / -4, 0]}>
        <BoxTest onSelectionChange={handleSelectionChange} />
      </mesh>

      <OrbitControls />
      <Plane
        args={[5, 5]}
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial attach="material" color="#bbbbbb" />
      </Plane>
      <ambientLight intensity={0.1} />
      <spotLight
        position={
          controllers.length > 0
            ? controllers[0].grip.position
            : [0, 0, 0]
        }
        angle={0.1}
        intensity={6}
        penumbra={0.2}
        color="#ffffff"
        castShadow
      />
      <Text position={[7, 2, -10]} fontSize={0.5} color="red">
        {counter}
      </Text>
      <Controllers rayMaterial={{ color: 'green' }} />
      <Text position={[0, 2, -10]} fontSize={0.5} color="blue">
        location is:{controllers.length > 0 ? controllers[0].grip.position.z : " "}
      </Text>
    </>
  );
}

export default PlaySpace;
