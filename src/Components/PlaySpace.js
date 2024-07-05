import React from 'react';
import { VRButton, XR, Controllers, useXR } from '@react-three/xr';
import { Canvas } from '@react-three/fiber';
import { Plane, OrbitControls, Text } from '@react-three/drei';
import BoxTest from './BoxTest';

function PlaySpace() {
  const { controllers } = useXR();

  return (
    <>
      <mesh position={[-3, 1, -5]} rotation={[0, Math.PI / 4, 0]}>
        <BoxTest initialCounter={0} />
      </mesh>

      <mesh position={[0, 1, -6]}>
        <BoxTest initialCounter={0} />
      </mesh>

      <mesh position={[3, 1, -5]} rotation={[0, Math.PI / -4, 0]}>
        <BoxTest initialCounter={0} />
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
      <Controllers rayMaterial={{ color: 'green' }} />
      <Text position={[0, 2, -10]} fontSize={0.5} color="blue">
        location is: {controllers.length > 0 ? controllers[0].grip.position.z : " "}
      </Text>
    </>
  );
}

export default PlaySpace;
