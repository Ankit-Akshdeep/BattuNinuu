// MovableButton.jsx
import React, { useState } from 'react';
import './button.css';

const MovableButton = () => {
  // State to track the button's position
  const [position, setPosition] = useState({ top: '50%', left: '50%' });

  // Function to generate random positions within the container
  const getRandomPosition = () => {
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;

    // Ensure the button stays within the viewport
    const x = Math.floor(Math.random() * (containerWidth - 80)) + 10; // 60px button + padding
    const y = Math.floor(Math.random() * (containerHeight - 80)) + 10;

    return { top: y, left: x };
  };

  const handleClick = () => {
    // Update the button's position
    const newPos = getRandomPosition();
    setPosition(newPos);
  };

  return (
    <button
      className="movable-button"
      onClick={handleClick}
      style={{
        top: position.top,
        left: position.left,
        transform: 'translate(100%, -20%)', 
      }}
      aria-label="Move me!"
    >
      NO
    </button>
  );
};

export default MovableButton;
