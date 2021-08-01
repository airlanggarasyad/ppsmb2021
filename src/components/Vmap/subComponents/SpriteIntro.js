import React, { useRef } from 'react'
import { Html } from "@react-three/drei"
import { Transition } from "react-transition-group";


export default function SpriteIntro(props) {
  return (
    <>
          {/* <SpriteQuote x={1.5} y={0.5} z={-0.5} text="Fakultas Ilmu Politik" />
          <SpriteQuote x={1} y={0.5} z={0.5} text="Fakultas Ekonomi Bisnis" />
          <SpriteQuote x={1} y={0.5} z={2} text="Fakultas Ilmu Budaya" />
          <SpriteQuote x={2.2} y={0.5} z={2} text="Fakultas Psikologi" />
          <SpriteQuote x={2.5} y={0.5} z={1} text="Fakultas Filsafat" />
          <SpriteQuote x={3} y={0.5} z={0} text="Fakultas Hukum" />
          <SpriteQuote x={4.5} y={0.5} z={2} text="GOR Lembah UGM" />
          <SpriteQuote x={5} y={0.5} z={-1} text="Lembah UGM" />
          <SpriteQuote x={7} y={0.5} z={-1} text="Stadion Pancasila" />
          <SpriteQuote x={8.5} y={0.5} z={0} text="Bulaksumur Residence" />
          <SpriteQuote x={9} y={0.5} z={-2} text="Fakultas Peternakan" />
          <SpriteQuote x={6.8} y={0.5} z={-2.5} text="Fakultas Kedokteran Hewan" />
          <SpriteQuote x={3.8} y={0.5} z={-2} text="Fakultas Pertanian" />
          <SpriteQuote x={2} y={0.5} z={-1.7} text="Fakultas Teknologi Pertanian" />
          <SpriteQuote x={2} y={0.5} z={-3.5} text="Fakultas Kehutanan" />
          <SpriteQuote x={0.4} y={0.5} z={-2.2} text="Balairung" />
          <SpriteQuote x={0} y={0.5} z={-1} text="Perpus Pusat UGM" />
          <SpriteQuote x={-0.5} y={0.5} z={-4} text="Fakultas Geografi" />
          <SpriteQuote x={-1.5} y={0.5} z={-3} text="Fakultas MIPA" />
          <SpriteQuote x={-2} y={0.5} z={-4.5} text="Fakultas Biologi" />
          <SpriteQuote x={-4} y={0.5} z={-7.5} text="Pascasarjana UGM" />
          <SpriteQuote x={-5} y={0.5} z={-5} text="Fakultas Teknik" />
          <SpriteQuote x={-6} y={0.5} z={-1.3} text="RSUP Sardjito" />
          <SpriteQuote x={-3.7} y={0.5} z={-1.3} text="Fakultas KKMK" />
          <SpriteQuote x={-2} y={0.5} z={-1.5} text="Fakultas Farmasi" />
          <SpriteQuote x={-4.3} y={0.5} z={0.5} text="Fakultas Kedokteran Gigi" />
          <SpriteQuote x={-4.5} y={0.5} z={5} text="Sekolah Vokasi UGM" />
          <SpriteQuote x={-2.2} y={0.5} z={6.7} text="Bundaran UGM" /> */}
      
          <SpriteQuoteFade in={props.introStep === 1} x={1.5} y={0.5} z={-0.5} text="Fakultas Ilmu Politik" />
          <SpriteQuoteFade in={props.introStep === 2} x={1} y={0.5} z={0.5} text="Fakultas Ekonomi Bisnis" /> 
          <SpriteQuoteFade in={props.introStep === 3} x={1} y={0.5} z={2} text="Fakultas Ilmu Budaya" /> 
          <SpriteQuoteFade in={props.introStep === 4} x={2.2} y={0.5} z={2} text="Fakultas Psikologi" /> 
          <SpriteQuoteFade in={props.introStep === 5} x={2.5} y={0.5} z={1} text="Fakultas Filsafat" /> 
          <SpriteQuoteFade in={props.introStep === 6} x={3} y={0.5} z={0} text="Fakultas Hukum" /> 
          <SpriteQuoteFade in={props.introStep === 7} x={4.5} y={0.5} z={2} text="GOR Lembah UGM" /> 
          <SpriteQuoteFade in={props.introStep === 8} x={5} y={0.5} z={-1} text="Lembah UGM" /> 
          <SpriteQuoteFade in={props.introStep === 9} x={7} y={0.5} z={-1} text="Stadion Pancasila" /> 
          <SpriteQuoteFade in={props.introStep === 10} x={8.5} y={0.5} z={0} text="Bulaksumur Residence" /> 
          <SpriteQuoteFade in={props.introStep === 11} x={9} y={0.5} z={-2} text="Fakultas Peternakan" /> 
          <SpriteQuoteFade in={props.introStep === 12} x={6.8} y={0.5} z={-2.5} text="Fakultas Kedokteran Hewan" /> 
          <SpriteQuoteFade in={props.introStep === 13} x={3.8} y={0.5} z={-2} text="Fakultas Pertanian" /> 
          <SpriteQuoteFade in={props.introStep === 14} x={2} y={0.5} z={-1.7} text="Fakultas Teknologi Pertanian" /> 
          <SpriteQuoteFade in={props.introStep === 15} x={2} y={0.5} z={-3.5} text="Fakultas Kehutanan" /> 
          <SpriteQuoteFade in={props.introStep === 16} x={0.4} y={0.5} z={-2.2} text="Balairung" /> 
          <SpriteQuoteFade in={props.introStep === 17} x={0} y={0.5} z={-1} text="Perpus Pusat UGM" /> 
          <SpriteQuoteFade in={props.introStep === 18} x={-0.5} y={0.5} z={-4} text="Fakultas Geografi" /> 
          <SpriteQuoteFade in={props.introStep === 19} x={-1.5} y={0.5} z={-3} text="Fakultas MIPA" /> 
          <SpriteQuoteFade in={props.introStep === 20} x={-2} y={0.5} z={-4.5} text="Fakultas Biologi" /> 
          <SpriteQuoteFade in={props.introStep === 21} x={-4} y={0.5} z={-7.5} text="Pascasarjana UGM" /> 
          <SpriteQuoteFade in={props.introStep === 22} x={-5} y={0.5} z={-5} text="Fakultas Teknik" /> 
          <SpriteQuoteFade in={props.introStep === 23} x={-6} y={0.5} z={-1.3} text="RSUP Sardjito" /> 
          <SpriteQuoteFade in={props.introStep === 24} x={-3.7} y={0.5} z={-1.3} text="Fakultas KKMK" /> 
          <SpriteQuoteFade in={props.introStep === 25} x={-2} y={0.5} z={-1.5} text="Fakultas Farmasi" /> 
          <SpriteQuoteFade in={props.introStep === 26} x={-4.3} y={0.5} z={0.5} text="Fakultas Kedokteran Gigi" /> 
          <SpriteQuoteFade in={props.introStep === 27} x={-4.5} y={0.5} z={5} text="Sekolah Vokasi UGM" /> 
          <SpriteQuoteFade in={props.introStep === 28} x={-2.2} y={0.5} z={6.7} text="Bundaran UGM" /> 
    </>
  )
} 

// function SpriteQuote(props) {
//     return (
//         <Html sprite
//               transform
//               position={[props.x, props.y, props.z]}
//               style={{
//                   background: 'palegreen',
//                   fontSize: '3px',
//                   padding: '2px 2px',
//                   border: '1px solid darkgreen',
//               }} >
//             {props.text}
//         </Html>
//     )
// }
  

const duration = 1000;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out, bottom ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 0.5 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0.5 },
  exited:  { opacity: 0 },
};

export function SpriteQuoteFade({ in: inProp, text, x, y, z }) {
  const nodeRef = useRef();
  return (
      <>
        <Transition in={inProp} timeout={duration} nodeRef={nodeRef}>
          {state => (
            <Html sprite
                  transform
                  position={[x, y, z]}
                  style={{
                      ...defaultStyle,
                      ...transitionStyles[state],
                      background: 'palegreen',
                      fontSize: '3px',
                      padding: '2px 2px',
                      border: '1px solid darkgreen',
                  }}>
              {text}
            </Html>
          )}
        </Transition>
      </>
  )
}