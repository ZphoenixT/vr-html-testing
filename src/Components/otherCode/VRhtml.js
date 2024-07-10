import React from 'react'

function VRhtml() {

  const { controllers } = useXR();
  return (
    <>
    {/* <Html
      as='div'
      transform={true}
      sprite
      position={[0, 1, -3]}
      style={{
        backgroundColor: '#fff',
        width: '10px',
        height: '10px',
        fontSize: '4px'
      }}
      >
        <p>hello world</p>
      </Html> */}

<Text position={[0, 2, -10]} fontSize={0.5} color="blue">
        location is: {controllers.length > 0 ? controllers[0].grip.position.z : " "}
      </Text>
    </>
  )
}

export default VRhtml