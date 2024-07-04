import React, { useState, useEffect, useRef } from 'react';
import { VRButton, XR, Controllers, useController, XRController, useXREvent, useXR } from '@react-three/xr';
import { Canvas } from '@react-three/fiber';
import { Plane, OrbitControls, Text } from '@react-three/drei';
import BoxTest from './Components/BoxTest';
import XRProvider from './XRProvider';
import PlaySpace from './Components/PlaySpace';

function App() {

  return (
    <XRProvider>
      <PlaySpace/>
    </XRProvider>
  );
}

export default App;
