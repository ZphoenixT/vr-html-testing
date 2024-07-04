import React, { useState, useEffect, useRef, useFrame } from 'react';
import { VRButton, XR, Controllers, useController, XRController, useXREvent, useXR } from '@react-three/xr';
import { Canvas } from '@react-three/fiber';
import { Plane, OrbitControls, Text } from '@react-three/drei';
// import BoxTest from './Components/BoxTest';

function PlaySpace() {

    const [counter, setCounter] = useState(20);
    const [incrementing, setIncrementing] = useState(1);
    const {controllers} = useXR();

  // Counter logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        switch (incrementing) {
          case 1:
            if (prevCounter < 20) {
              return prevCounter + 1;
            } else {
              setIncrementing(2);
              return prevCounter;
            }
          case 2:
            if (prevCounter > 0) {
              return prevCounter - 1;
            } else {
              setIncrementing(1);
              return prevCounter;
            }
          default:
            return prevCounter;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [incrementing]);

// useEffect(() => {
//   if (controllers.length > 0) controllers.forEach((c) => mesh.current.add(c.grip))
//   return () => controllers.forEach((c) => mesh.current.remove(c.grip))
// }, [controllers, mesh])

  useEffect(() => {
    console.log(controllers);
  }, [controllers]);


  return (
    <>
      {/* <Canvas style={{ background: '#262626' }}>
        <XR> */}
          {/* <mesh position={[-8, 3, -9]} rotation={[0, Math.PI / 4, 0]}>
            <BoxTest />
          </mesh>

          <mesh position={[0, 3, -10]}>
            <BoxTest />
          </mesh>

          <mesh position={[8, 3, -9]} rotation={[0, Math.PI / -4, 0]}>
            <BoxTest />
          </mesh> */}

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
              position=
              {[
                controllers.length > 0 ? controllers[0].grip.position.x : " ",
                controllers.length > 0 ? controllers[0].grip.position.y : " ",
                controllers.length > 0 ? controllers[0].grip.position.z : " "
              ]}
              angle={0}
              intensity={6}
              penumbra={0.2}
              color="#ffffff"
              castShadow
            />
          <Text position={[7, 2, -10]} fontSize={0.5} color="red">
            {counter}
          </Text>
          <Controllers
            rayMaterial={{ color: 'blue' }}
          />
          <Text position={[0, 2, -10]} fontSize={0.5} color="blue">
            location is:{controllers.length > 0 ? controllers[0].grip.position.z : " "}
          </Text>
        {/* </XR>
      </Canvas> */}
    </>
  )
}

export default PlaySpace