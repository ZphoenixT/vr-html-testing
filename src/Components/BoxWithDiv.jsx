import React from 'react';
import { Html } from '@react-three/drei';
import './vrStyle.css'

function BoxWithDiv() {
  return (
    <mesh position={[0, 1, -5]}>
    <Html transform position={[0, 1, 0]}>
      <div className='testBox'>
        <p>
            This is a div in VR!
        </p>
      </div>
    </Html>
  </mesh>
  )
}

export default BoxWithDiv