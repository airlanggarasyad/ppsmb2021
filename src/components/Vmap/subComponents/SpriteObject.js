import React, { useState, useEffect } from 'react'
// import { useLoader } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
// import { TextureLoader } from 'three/src/loaders/TextureLoader'


export default function SpriteObject(props) {
  const [active, setActive] = useState(false)
//   const palapaImage = useTexture('/images/palapa.png')
  const image = useTexture(props.imageSource);

  useEffect(() => {
    document.body.style.cursor = active ? "pointer" : "auto"
  }, [active])  
  
  return (
      <sprite
          scale={active ? 0.5 : 0.3} 
          position={props.position}
          onClick={(e) => {alert("clicked")}}
          onPointerOver={(e) => setActive(!active)}
          onPointerOut={(e) => setActive(!active)}>
        <spriteMaterial attach="material" map={image} />
      </sprite>
  )
}
