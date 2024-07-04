import React from 'react'

function BoxTest() {
  return (
    <mesh>
    <circleGeometry args={[0.5, 64]}/>
    <meshBasicMaterial side="DoubleSide" color="blue"/>
    </mesh>
  )
}

export default BoxTest