import { Plane } from '@react-three/drei'
import React from 'react'
import StageDeco from './StageDeco'

function MainStage() {
  return (
    <>
    {/* Stage floor */}
    <Plane
        args={[20, 5]}
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
    >
        <meshStandardMaterial attach="material" color="#797979" />
    </Plane>

    {/* Stage back wall */}
    <Plane args={[11, 8]}
      position={[0, 3, 2.5]}
      rotation={[0, -Math.PI / 1, 0]}
    >
      <meshStandardMaterial attach="material" color="#707070" />
    </Plane>

    {/* Side wall */}
    <Plane args={[9.5, 8]}
      position={[-6, 3, 0.75]}
      rotation={[0, 2.4, 0]}
    >
      <meshStandardMaterial attach="material" color="#666" />
    </Plane>

    {/* Side wall */}
    <Plane args={[9.5, 8]}
      position={[6, 3, 0.75]}
      rotation={[0, -2.4, 0]}
    >
      <meshStandardMaterial attach="material" color="#666" />
    </Plane>

    {/* Decoration */}
    <StageDeco/>
    </>
  )
}

export default MainStage