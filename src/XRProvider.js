import React from 'react';
import { XR, VRButton } from '@react-three/xr';
import { Canvas } from '@react-three/fiber';

const XRProvider = ({ children }) => (
    <>
    <VRButton />
    <Canvas>
        <XR>
            {children}
        </XR>
    </Canvas>
    </>
);

export default XRProvider