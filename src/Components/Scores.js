import { RoundedBox, Text } from '@react-three/drei'
import { Interactive } from '@react-three/xr'
import React, { useEffect, useState } from 'react'

function Scores({ opacity, onBackToMenu }) {
  const scoreFontSize = 0.1;
  const menuX = -2.7;
  const [hovered5, setHovered5] = useState(false);
  const [scores, setScores] = useState([]);

  useEffect(() => {
    fetch('/highScores.txt')
      .then(response => response.text())
      .then(text => {
        const lines = text.split('\n').filter(line => line.trim() !== '');
        const formattedScores = lines.map(line => line.split('|').join(' '));
        setScores(formattedScores);
      })
      .catch(err => console.error('Failed to fetch scores:', err));
  }, []);

  return (
    <>
    <Text
    position={[0, 3, menuX]}
    fontSize={0.3}
    materialProps={{ transparent: true, opacity }}>
      HighScores
    </Text>

    {scores.map((score, index) => (
      <Text
        position={[0, 2.7 - 0.2 * index, menuX]}
        fontSize={scoreFontSize}
        materialProps={{ transparent: true, opacity: opacity }}>
        {score}
      </Text>
    ))}

      <Interactive
      onHover={() => setHovered5(true)}
      onBlur={() => setHovered5(false)}
       onSelect={onBackToMenu}
       >
        <mesh position={[0, 0.6, menuX]}>
          <RoundedBox
          args={[1.2, 0.2, 0.1]}
          radius={0.1}
          smoothness={16}
          bevelSegments={0}
          creaseAngle={2}
          >
            <meshBasicMaterial
            color={hovered5 ? '#777' : '#666'}
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