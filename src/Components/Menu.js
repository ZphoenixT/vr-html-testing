import { Plane, RoundedBox, Text } from '@react-three/drei';
import { Interactive } from '@react-three/xr';
import React, { useState, useRef, useEffect } from 'react';
import * as THREE from 'three';
import MenuBackground from './MenuBackground';
import { useFrame } from '@react-three/fiber';
import Scores from './Scores';

function Menu() {
  const logo = new THREE.TextureLoader().load('/Textures/Designer.jpeg');
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);
  const [fadeBackground, setFadeBackground] = useState(false);
  const [fadeMenu, setFadeMenu] = useState(false); // Separate state for menu fade
  const [menuOpacity, setMenuOpacity] = useState(1); // State for menu items opacity
  const [scoreOpacity, setScoreOpacity] = useState(0);
  const [showScores, setShowScores] = useState(false);

  const materialRefs = useRef([]); // Refs to hold material references
  const textRefs = useRef([]); // Refs to hold text references

  const handleSelectStart = () => {
    setFadeMenu(true); // Start fading menu
    setFadeBackground(true); // Start fading background
  };

  const handleSelectScores = () => {
    setFadeMenu(true); // Start fading menu
    };

    const handleBackToMenu = () => {
      setFadeMenu(false);
      setFadeBackground(false);
      setShowScores(false);
      setMenuOpacity(1);
      setScoreOpacity(0);
      console.log('back to the menu');
    };

  useFrame(() => {

    if (fadeMenu && menuOpacity > 0) {
      setMenuOpacity((prev) => Math.max(prev - 0.01, 0)); // Gradually decrease menu opacity

      materialRefs.current.forEach((material) => {
      if (material) material.opacity = menuOpacity;
    });
    textRefs.current.forEach((text) => {
      if (text) text.material.opacity = menuOpacity;
    });
    }

    if ( menuOpacity == 0 && scoreOpacity < 1) {
      setScoreOpacity((prev) => Math.min(prev + 0.01, 1)); // Gradually increase scores opacity
      setShowScores(true);

      materialRefs.current.forEach((material) => {
        if (material) material.opacity = scoreOpacity;
      });
      textRefs.current.forEach((text) => {
        if (text) text.material.opacity = scoreOpacity;
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

  useEffect(() => {
    console.log(scoreOpacity);
  }, [scoreOpacity]);

  return (
    <>
      {menuOpacity > 0 && ( // Render interactive components only if fadeBackground is false
        <>
          <Interactive
            onHover={() => setHovered1(true)}
            onBlur={() => setHovered1(false)}
          >
            <mesh position={[0, 1, -2.7]}>
              <RoundedBox
                args={[1.9, 0.2, 0.1]}
                radius={0.1}
                smoothness={16}
                bevelSegments={0}
                creaseAngle={2}
              >
                <meshBasicMaterial
                  ref={addToMaterialRefs}
                  color={hovered1 ? '#7c5c5c' : '#666'}
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
            onSelect={handleSelectScores}
          >
            <mesh position={[-0.45, 1.3, -2.7]}>
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
                materialProps={{ transparent: true, opacity: menuOpacity }}
              >
                HighScores
              </Text>
            </mesh>
          </Interactive>

          <Interactive
            onHover={() => setHovered3(true)}
            onBlur={() => setHovered3(false)}
          >
            <mesh position={[0.55, 1.3, -2.7]}>
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
                materialProps={{ transparent: true, opacity: menuOpacity }}
              >
                Settings
              </Text>
            </mesh>
          </Interactive>

          <Interactive
            onHover={() => setHovered4(true)}
            onBlur={() => setHovered4(false)}
            onSelect={handleSelectStart}
          >
            <mesh position={[0, 1.6, -2.7]}>
              <RoundedBox
                args={[1.9, 0.2, 0.1]}
                radius={0.1}
                smoothness={16}
                bevelSegments={0}
                creaseAngle={2}
              >
                <meshBasicMaterial
                  ref={addToMaterialRefs}
                  color={hovered4 ? '#68725e' : '#666'}
                  transparent={true}
                  opacity={menuOpacity}
                />
              </RoundedBox>
              <Text
                position={[0, 0, 0.01]}
                fontSize={0.14}
                color="#fff"
                ref={addToTextRefs}
                materialProps={{ transparent: true, opacity: menuOpacity }}
              >
                Start Game
              </Text>
            </mesh>
          </Interactive>
        </>
      )}

      <Plane args={[1.35, 1.2]} position={[0, 2.4, -2.7]}>
        <meshBasicMaterial
          map={logo}
          transparent={true}
          opacity={menuOpacity}
        />
      </Plane>

      <MenuBackground fade={fadeBackground} />
      {showScores && <Scores opacity={scoreOpacity} onBackToMenu={handleBackToMenu}/>}
    </>
  );
}

export default Menu;