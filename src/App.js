import React from 'react';
import XRProvider from './XRProvider';
import PlaySpace from './Components/PlaySpace.js';

function App() {

  return (
    <>
    <XRProvider>
    <PlaySpace/>
    </XRProvider>
    </>
  );
}

export default App;
