import React, { useEffect, useRef, useState } from 'react'
import BoxTest from './BoxTest'
import { Text } from '@react-three/drei';
import { Interactive } from '@react-three/xr';

function Targets() {
  const [totalAdditions, setTotalAdditions] = useState(0);

  const updateTotalAdditions = () => {
    setTotalAdditions((prevTotal) => prevTotal + 0.1);
  };

  return (
    <>
    <Interactive>
      <mesh position={[-3.5, 1, -5]} rotation={[0, Math.PI / 8, 0]}>
        <BoxTest updateTotalAdditions={updateTotalAdditions} />
      </mesh>

      <mesh position={[0, 1, -6]}>
        <BoxTest updateTotalAdditions={updateTotalAdditions} />
      </mesh>

      <mesh position={[3.5, 1, -5]} rotation={[0, Math.PI / -8, 0]}>
        <BoxTest updateTotalAdditions={updateTotalAdditions} />
      </mesh>
    </Interactive>

      {/* Display total additions */}
      <Text
      position={[0, 3, -6]}
      fontSize={0.4}>
      Total: {totalAdditions.toFixed(1)}
      </Text>
    </>
  )
}

export default Targets