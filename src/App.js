import React, { useState, useEffect } from 'react';
import { VRButton, XR, Controllers } from '@react-three/xr';
import { Canvas } from '@react-three/fiber';
import { Plane, OrbitControls, Text } from '@react-three/drei';
// import BoxWithDiv from './Components/BoxWithDiv';
import BoxTest from './Components/BoxTest';

function App() {
  const [counter, setCounter] = useState(20);
  const [incrementing, setIncrementing] = useState(1);
  const [controllerPositions, setControllerPositions] = useState({}); // State for controller positions

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prevCounter => {
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

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [incrementing]);

  // Update controller positions state
  const updateControllerPositions = (controllers) => {
    const positions = {};
    controllers.forEach((controller) => {
      positions[controller.id] = controller.position;
    });
    setControllerPositions(positions);
  };

  return (
    <>
      <VRButton />
      <Canvas style={{ background: '#262626' }}>
        <XR>
          <mesh position={[-7, 3, -7]} rotation={[0, Math.PI / 4, 0]}>
            <BoxTest/>
          </mesh>

          <mesh position={[0, 3, -8]}>
            <BoxTest/>
          </mesh>

          <mesh position={[7, 3, -7]} rotation={[0, Math.PI / -4, 0]}>
            <BoxTest/>
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
          {/* Dynamic spotlight based on controller positions */}
          {Object.keys(controllerPositions).map((controllerId) => (
            <spotLight
              key={controllerId}
              position={controllerPositions[controllerId]}
              angle={Math.PI / 6} // Adjust angle as needed
              intensity={5} // Adjust intensity as needed
              penumbra={0.2} // Adjust penumbra as needed
              color="#ffffff" // Adjust color as needed
              castShadow // Enable shadow casting
            />
          ))}
          <Text position={[7, 2, -10]} fontSize={0.5} color="red">
            {counter}
          </Text>
          {/* Track controller positions */}
          <Controllers
            rayMaterial={{ color: 'blue' }}
            onConnected={(controllers) => {
              updateControllerPositions(controllers);
            }}
            onDisconnected={(controller) => {
              setControllerPositions((prevPositions) => {
                const updatedPositions = { ...prevPositions };
                delete updatedPositions[controller.id];
                return updatedPositions;
              });
            }}
            onUpdate={(controllers) => {
              updateControllerPositions(controllers);
            }}
          />
        </XR>
      </Canvas>
    </>
  );
}

export default App;
