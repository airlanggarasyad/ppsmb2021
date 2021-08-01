import { useRef } from 'react';
import { Transition } from "react-transition-group";

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

export default function Fade({ in: inProp, children }) {
  const nodeRef = useRef();
  return (
      <>
        <Transition in={inProp} timeout={duration} nodeRef={nodeRef}>
          {state => (
            <div style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}>
              {children}
            </div>
          )}
        </Transition>
      </>
  )
}

export function FadeVmap({ in: inProp, children }) {
  const nodeRef = useRef();
  return (
      <>
        <Transition in={inProp} timeout={5000} nodeRef={nodeRef}>
          {state => (
            <div style={{
              ...defaultStyle,
            ...transitionStyles[state],
              width: '100%',
              height: '100%'
            }}>
              {children}
            </div>
          )}
        </Transition>
      </>
  )
}