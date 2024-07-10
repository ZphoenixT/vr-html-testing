import React from 'react'

function StageDeco() {
  return (
    <>
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
    </>
  )
}

export default StageDeco