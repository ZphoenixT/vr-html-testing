import { RoundedBox, Text } from '@react-three/drei'
import { Interactive } from '@react-three/xr'
import React, { useEffect } from 'react'

function Scores({ opacity }) {
  const scoreFontSize = 0.1;
  const menuX = -2.7;

  return (
    <>
    <Text
    position={[0, 3, menuX]}
    fontSize={0.3}
    materialProps={{ transparent: true, opacity }}>
      HighScores
    </Text>
    <Text position={[0, 2.7, menuX]} fontSize={scoreFontSize} materialProps={{ transparent: true, opacity: opacity }}>1 ASS 1,004,343</Text>
    <Text position={[0, 2.5, menuX]} fontSize={scoreFontSize} materialProps={{ transparent: true, opacity: opacity }}>2</Text>
    <Text position={[0, 2.3, menuX]} fontSize={scoreFontSize} materialProps={{ transparent: true, opacity: opacity }}>3</Text>
    <Text position={[0, 2.1, menuX]} fontSize={scoreFontSize} materialProps={{ transparent: true, opacity: opacity }}>4</Text>
    <Text position={[0, 1.9, menuX]} fontSize={scoreFontSize} materialProps={{ transparent: true, opacity: opacity }}>5</Text>
    <Text position={[0, 1.7, menuX]} fontSize={scoreFontSize} materialProps={{ transparent: true, opacity: opacity }}>6</Text>
    <Text position={[0, 1.5, menuX]} fontSize={scoreFontSize} materialProps={{ transparent: true, opacity: opacity }}>7</Text>
    <Text position={[0, 1.3, menuX]} fontSize={scoreFontSize} materialProps={{ transparent: true, opacity: opacity }}>8</Text>
    <Text position={[0, 1.1, menuX]} fontSize={scoreFontSize} materialProps={{ transparent: true, opacity: opacity }}>9</Text>
    <Text position={[0, 0.9, menuX]} fontSize={scoreFontSize} materialProps={{ transparent: true, opacity: opacity }}>10</Text>
      <Interactive>
        <mesh position={[0, 0.6, menuX]}>
          <RoundedBox
          args={[1.2, 0.2, 0.1]}
          radius={0.1}
          smoothness={16}
          bevelSegments={0}
          creaseAngle={2}
          >
            <meshBasicMaterial
            color="#666"
            transparent={true}
            opacity={opacity}/>
          </RoundedBox>
          <Text
          position={[0, 0, 0]}
          fontSize={0.14}
          materialProps={{ transparent: true, opacity: opacity }}>
            Back To Menu
          </Text>
        </mesh>
      </Interactive>
    </>
  )
}

export default Scores