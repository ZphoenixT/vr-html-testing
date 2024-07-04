import React from 'react';
import { XR, VRButton } from '@react-three/xr';
import { Canvas } from '@react-three/fiber';

const XRProvider = ({ children }) => (
    <>
    <VRButton />
    <Canvas style={{ background: '#262626' }}>
        <XR>
            {children}
        </XR>
    </Canvas>
    </>
);

export default XRProvider