import React, { useRef, useEffect } from 'react';
import { VRButton, XR, Controllers, useXR } from '@react-three/xr';
import { Canvas } from '@react-three/fiber';
import { Plane, OrbitControls, Text, SpotLight } from '@react-three/drei';
import BoxTest from './BoxTest';

function PlaySpace() {
  const { controllers } = useXR();
  const spotlight1Ref = useRef();
  const spotlight2Ref = useRef();
  const spotlight3Ref = useRef();
  const spotlight4Ref = useRef();

  // Function to set the target of each spotlight
  const setSpotlightTarget = (spotlightRef, position) => {
    if (spotlightRef.current) {
      spotlightRef.current.target.position.set(position[0], position[1], position[2]);
    }
  };

  // Use useEffect to set initial spotlight targets on mount
  useEffect(() => {
    setSpotlightTarget(spotlight1Ref, [-2.8, 1, -4.8]); // Position for spotlight 1
    setSpotlightTarget(spotlight2Ref, [0, 1, -5.8]);  // Position for spotlight 2
    setSpotlightTarget(spotlight3Ref, [2.8, 1, -4.8]);  // Position for spotlight 3
    setSpotlightTarget(spotlight4Ref, [0, 0, -1]);
  }, []);

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
        args={[20, 5]}
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial attach="material" color="#bbbbbb" />
      </Plane>

      <Plane args={[11, 8]}
      position={[0, 3, 2]}
      rotation={[0, -Math.PI / 1, 0]}
      >
      <meshStandardMaterial attach="material" color="#bbbbbb" />
      </Plane>

      <Plane args={[11, 8]}
      position={[-4.5, 3, 1]}
      rotation={[0, 2.5, 0]}
      >
      <meshStandardMaterial attach="material" color="#bbbbbb" />
      </Plane>

      <Plane args={[11, 8]}
      position={[4.5, 3, 1]}
      rotation={[0, -2.5, 0]}
      >
      <meshStandardMaterial attach="material" color="#bbbbbb" />
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
      

      <ambientLight intensity={0.1} />
      <SpotLight
      intensity={10}
      angle={0.5}
      penumbra={0.9}
      position={[0, 5, 0]}
      />

      <SpotLight
      ref={spotlight1Ref}
      intensity={10}
      angle={0.1}
      penumbra={0.9}
      position={[0, 5, -3]}
      distance={100}/>

      <SpotLight
      ref={spotlight2Ref}
      intensity={10}
      angle={0.1}
      penumbra={0.9}
      position={[2, 5, -3]}
      distance={100}/>

      <SpotLight
      ref={spotlight2Ref}
      intensity={10}
      angle={0.1}
      penumbra={0.9}
      position={[-2, 5, -3]}
      distance={100}/>

      <SpotLight
      ref={spotlight3Ref}
      intensity={10}
      angle={0.1}
      penumbra={0.9}
      position={[0, 5, -3]}
      distance={100}/>

      <SpotLight
      ref={spotlight4Ref}
      intensity={10}
      angle={0.1}
      penumbra={0.9}
      position={[-3.5, 5, -3]}
      distance={9}
      />

      <SpotLight
      ref={spotlight4Ref}
      intensity={10}
      angle={0.1}
      penumbra={0.9}
      position={[3.5, 5, -3]}
      distance={9}
      />

      <SpotLight
      ref={spotlight4Ref}
      intensity={10}
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
