import React from 'react'
import Fireworks from 'fireworks-js';
import ReactConfetti from 'react-confetti';
import { useEffect, useRef } from 'react';
import "./button.css"
const FinalPage = ({imgSrc, title}) => {
  //   const fireworksRef = useRef(null);

  //   useEffect(() => {
  //     if (!fireworksRef.current) return;
    
  //     const fireworks = new Fireworks(fireworksRef.current, {
  //       speed: 2,
  //       acceleration: 1.05,
  //       friction: 0.05,
  //       gravity: 1.5,
  //       particles: 100,
  //       explosion: 5,

  // // Colors
  // colors: ['#ff0000', '#ffff00', '#00ff00', '#0000ff', '#ff00ff'],

  // // Sound
  // sound: true, // Enable or disable sound effects

  // // Custom particle functions
  // particle: (particle) => {
  //   // Customize particle behavior here
  //     }});
    
  //     fireworks.start();
    
  //     return () => fireworks.stop();
  //   }, []);
    
  

  return (
    
    <div>
        <ReactConfetti
          recycle={false}
          numberOfPieces={200}
          tweenDuration={5000}
          gravity={0.1}
          spin={false}
          />
        <div className='content'>
        <h1>{title}</h1>
        <img src="/ninuuheart.png" alt="ninuuheart" className="image" />
        </div>
    </div>
  )
}

export default FinalPage