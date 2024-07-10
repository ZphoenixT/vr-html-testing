import React from 'react'
import BoxTest from './BoxTest'

function Targets() {
  return (
    <>
    <mesh position={[-3.5, 1, -5]} rotation={[0, Math.PI / 8, 0]}>
        <BoxTest initialCounter={0} />
      </mesh>

      <mesh position={[0, 1, -6]}>
        <BoxTest initialCounter={0} />
      </mesh>

      <mesh position={[3.5, 1, -5]} rotation={[0, Math.PI / -8, 0]}>
        <BoxTest initialCounter={0} />
      </mesh>
    </>
  )
}

export default Targets