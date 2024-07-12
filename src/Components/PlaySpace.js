import React, { useRef, useEffect } from 'react';
import { Controllers, useXR } from '@react-three/xr';
import { OrbitControls, } from '@react-three/drei';
import Smoke from './Smoke';
import MainStage from './MainStage';
import OverheadLights from './OverheadLights';
import Targets from './Targets';
import Menu from './Menu';
import MenuBackground from './MenuBackground';
import Scores from './Scores';

function PlaySpace() {
  const { controllers } = useXR();

  return (
    <>
      <Smoke
      count={10}
      color='#ccc'
      fadeDuration={0.01}
      maxHeight={4}
      speed={0.04}
      posX={3}
      posY={0.1}
      posZ={-2} />

      <Smoke
      count={10}
      color='#ccc'
      fadeDuration={0.01}
      maxHeight={4}
      speed={0.04}
      posX={-3}
      posY={0.1}
      posZ={-2} />

      <OverheadLights/>
      <MainStage/>
      {/* <Targets/> */}
      {/* <Menu/> */}

      <boxGeometry args={[1, 1, 1]}>
      <meshBasicMaterial/>
    </boxGeometry>

      <OrbitControls />
      <Controllers rayMaterial={{ color: 'green' }} />
    </>
  );
}

export default PlaySpace;
