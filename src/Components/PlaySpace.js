import React, { useRef, useEffect, useState } from 'react';
import { useThree, XR, Controllers, useXR } from '@react-three/xr';
import { Plane, OrbitControls, Text, SpotLight, Html } from '@react-three/drei';
import BoxTest from './BoxTest';
import * as THREE from 'three'

function PlaySpace() {
  const { controllers } = useXR();
  const spotlight1Ref = useRef();
  const spotlight2Ref = useRef();
  const spotlight3Ref = useRef();
  const spotlight4Ref = useRef();
  const spotlight5Ref = useRef();
  const lightLvl = 10;

  // Function to set the target of each spotlight
  const setSpotlightTarget = (spotlightRef, position) => {
    if (spotlightRef.current) {
      spotlightRef.current.target.position.set(position[0], position[1], position[2]);
    }
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setProgress(prev => Math.min(prev + 0.01, 1));
  //   }, 100);

  //   return () => clearInterval(interval);
  // }, []);

  // Use useEffect to set initial spotlight targets on mount
  useEffect(() => {
    setSpotlightTarget(spotlight1Ref, [-3.3, 1, -4.8]); // Position for spotlight 1
    setSpotlightTarget(spotlight2Ref, [0, 1, -5.8]);  // Position for spotlight 2
    setSpotlightTarget(spotlight3Ref, [3.3, 1, -4.8]);  // Position for spotlight 3
    setSpotlightTarget(spotlight4Ref, [0, 0, -1]);
    setSpotlightTarget(spotlight5Ref, [0, 1, -5.8]);
  }, []);

  // const calculatePosition = (el, camera, size) => {
  //   const objectPosition = new THREE.Vector3();
  //   el.getWorldPosition(objectPosition);
  //   objectPosition.project(camera);

  //   const x = (objectPosition.x * 0.5 + 0.5) * size.width;
  //   const y = (objectPosition.y * -0.5 + 0.5) * size.height;
  //   return [x, y];
  // };

  return (
    <>
    <Html
    as='div'
    // calculatePosition={calculatePosition}
    position={[0, 1, -3]}
    style={{
      color: '#fff',
      height: '100px',
      width: '100px',
      backgroundColor: '#000'

    }}
    >
      <h1>Hello world</h1>
    </Html>

      <mesh position={[-3.5, 1, -5]} rotation={[0, Math.PI / 8, 0]}>
        <BoxTest initialCounter={0} />
      </mesh>

      <mesh position={[0, 1, -6]}>
        <BoxTest initialCounter={0} />
      </mesh>

      <mesh position={[3.5, 1, -5]} rotation={[0, Math.PI / -8, 0]}>
        <BoxTest initialCounter={0} />
      </mesh>

      <OrbitControls />

      <Plane
        args={[20, 5]}
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial attach="material" color="#797979" />
      </Plane>

      <Plane args={[11, 8]}
      position={[0, 3, 2]}
      rotation={[0, -Math.PI / 1, 0]}
      >
      <meshStandardMaterial attach="material" color="#707070" />
      </Plane>

      <Plane args={[11, 8]}
      position={[-4.5, 3, 1]}
      rotation={[0, 2.5, 0]}
      >
      <meshStandardMaterial attach="material" color="#666" />
      </Plane>

      <Plane args={[11, 8]}
      position={[4.5, 3, 1]}
      rotation={[0, -2.5, 0]}
      >
      <meshStandardMaterial attach="material" color="#666" />
      </Plane>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.0001, 0]}>
        <circleGeometry args={[0.3, 64]}/>
        <meshStandardMaterial attach="material" color="#5c5c5c" />
      </mesh>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.0001, 0]}>
      <torusGeometry args={[0.7, 0.06, 2, 100]}/>
      <meshStandardMaterial attach="material" color="#5c5c5c" />
      </mesh>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.0001, 0]}>
      <torusGeometry args={[1.2, 0.07, 2, 100]}/>
      <meshStandardMaterial attach="material" color="#5c5c5c" />
      </mesh>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.0001, 0]}>
      <torusGeometry args={[1.7, 0.1, 2, 100]}/>
      <meshStandardMaterial attach="material" color="#5c5c5c" />
      </mesh>
{/*
=================================
            LIGHTS
=================================
*/}
      <ambientLight intensity={0.5} />

      <SpotLight
      intensity={lightLvl}
      angle={0.5}
      penumbra={0.9}
      position={[0, 5, 0]}
      />

      <SpotLight
      ref={spotlight1Ref}
      intensity={lightLvl}
      angle={0.1}
      penumbra={0.9}
      position={[0, 5, -3]}
      distance={100}/>

      <SpotLight
      ref={spotlight5Ref}
      intensity={lightLvl}
      angle={0.1}
      penumbra={0.9}
      position={[2, 5, -3]}
      distance={100}/>

      <SpotLight
      ref={spotlight2Ref}
      intensity={lightLvl}
      angle={0.1}
      penumbra={0.9}
      position={[-2, 5, -3]}
      distance={100}/>

      <SpotLight
      ref={spotlight3Ref}
      intensity={lightLvl}
      angle={0.1}
      penumbra={0.9}
      position={[0, 5, -3]}
      distance={100}/>

{/*====== STAGE LIGHTS ======*/}

      <SpotLight
      ref={spotlight4Ref}
      intensity={lightLvl}
      angle={0.1}
      penumbra={0.9}
      position={[-3.5, 5, -3]}
      distance={9}
      />

      <SpotLight
      ref={spotlight4Ref}
      intensity={lightLvl}
      angle={0.1}
      penumbra={0.9}
      position={[3.5, 5, -3]}
      distance={9}
      />

      <SpotLight
      ref={spotlight4Ref}
      intensity={lightLvl}
      angle={0.3}
      penumbra={0.9}
      position={[0, 5, -3.1]}
      distance={9}
      />

      <Controllers rayMaterial={{ color: 'green' }} />
      <Text position={[0, 2, -10]} fontSize={0.5} color="blue">
        location is: {controllers.length > 0 ? controllers[0].grip.position.z : " "}
      </Text>
    </>
  );
}

export default PlaySpace;
