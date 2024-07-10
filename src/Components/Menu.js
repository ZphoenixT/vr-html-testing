import { Plane, RoundedBox, Text } from '@react-three/drei';
import { Interactive } from '@react-three/xr';
import React, { useState, useRef } from 'react';
import * as THREE from 'three';
import MenuBackground from './MenuBackground';
import { useFrame } from '@react-three/fiber';

function Menu() {
  const logo = new THREE.TextureLoader().load('/Textures/Designer.jpeg');
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);
  const [fadeBackground, setFadeBackground] = useState(false);
  const [menuOpacity, setMenuOpacity] = useState(1); // State for menu items opacity

  const materialRefs = useRef([]); // Refs to hold material references
  const textRefs = useRef([]); // Refs to hold text references

  const handleSelect = () => {
    setFadeBackground(true); // Start fading background
  };

  useFrame(() => {
    if (fadeBackground && menuOpacity > 0) {
      setMenuOpacity((prev) => Math.max(prev - 0.01, 0)); // Gradually decrease menu opacity
      materialRefs.current.forEach((material) => {
        if (material) {
          material.opacity = menuOpacity;
          if (menuOpacity === 0) {
            // Set y position to 30 when opacity reaches 0
            material.position.y = 30;
          }
        }
      });
      textRefs.current.forEach((text) => {
        if (text) {
          text.material.opacity = menuOpacity;
          if (menuOpacity === 0) {
            // Set y position to 30 when opacity reaches 0
            text.position.y = 30;
          }
        }
      });
    }
  });

  const addToMaterialRefs = (el) => {
    if (el && !materialRefs.current.includes(el)) {
      materialRefs.current.push(el);
    }
  };

  const addToTextRefs = (el) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  return (
    <>
      <Interactive
        onHover={() => setHovered1(true)}
        onBlur={() => setHovered1(false)}
      >
        <mesh position={[0, 1.2, -2.5]}>
          <RoundedBox
            args={[1.9, 0.2, 0.1]}
            radius={0.1}
            smoothness={16}
            bevelSegments={0}
            creaseAngle={2}
          >
            <meshBasicMaterial
              ref={addToMaterialRefs}
              color={hovered1 ? '#777' : '#666'}
              transparent={true}
              opacity={menuOpacity}
            />
          </RoundedBox>
          <Text
            position={[0, 0, 0.01]}
            fontSize={0.14}
            ref={addToTextRefs}
            materialProps={{ transparent: true, opacity: menuOpacity }}
          >
            Quit Game
          </Text>
        </mesh>
      </Interactive>

      <Interactive
        onHover={() => setHovered2(true)}
        onBlur={() => setHovered2(false)}
      >
        <mesh position={[-0.45, 1.5, -2.5]}>
          <RoundedBox
            args={[1, 0.2, 0.1]}
            radius={0.1}
            smoothness={16}
            bevelSegments={0}
            creaseAngle={2}
          >
            <meshBasicMaterial
              ref={addToMaterialRefs}
              color={hovered2 ? '#777' : '#666'}
              transparent={true}
              opacity={menuOpacity}
            />
          </RoundedBox>
          <Text
            position={[0, 0, 0.01]}
            fontSize={0.14}
            ref={addToTextRefs}
            materialProps={{ transparent: true, opacity:{menuOpacity} }}
          >
            HighScores
          </Text>
        </mesh>
      </Interactive>

      <Interactive
        onHover={() => setHovered3(true)}
        onBlur={() => setHovered3(false)}
      >
        <mesh position={[0.55, 1.5, -2.5]}>
          <RoundedBox
            args={[0.8, 0.2, 0.1]}
            radius={0.1}
            smoothness={16}
            bevelSegments={0}
            creaseAngle={2}
          >
            <meshBasicMaterial
              ref={addToMaterialRefs}
              color={hovered3 ? '#777' : '#666'}
              transparent={true}
              opacity={menuOpacity}
            />
          </RoundedBox>
          <Text
            position={[0, 0, 0.01]}
            fontSize={0.14}
            ref={addToTextRefs}
            materialProps={{ transparent: true, opacity:{menuOpacity} }}
          >
            Settings
          </Text>
        </mesh>
      </Interactive>

      <Interactive
        onHover={() => setHovered4(true)}
        onBlur={() => setHovered4(false)}
        onSelect={handleSelect}
      >
        <mesh position={[0, 1.8, -2.5]}>
          <RoundedBox
            args={[1.9, 0.2, 0.1]}
            radius={0.1}
            smoothness={16}
            bevelSegments={0}
            creaseAngle={2}
          >
            <meshBasicMaterial
              ref={addToMaterialRefs}
              color={hovered4 ? '#777' : '#666'}
              transparent={true}
              opacity={menuOpacity}
            />
          </RoundedBox>
          <Text
            position={[0, 0, 0.01]}
            fontSize={0.14}
            color="#fff"
            ref={addToTextRefs}
            materialProps={{ transparent: true, opacity:{menuOpacity} }}
          >
            Start Game
          </Text>
        </mesh>
      </Interactive>

      <Plane args={[1.35, 1.2]} position={[0, 2.6, -2.5]}>
        <meshBasicMaterial
          map={logo}
          transparent={true}
          opacity={menuOpacity}
          ref={addToMaterialRefs}
        />
      </Plane>

      <MenuBackground fade={fadeBackground} />
    </>
  );
}

export default Menu;
