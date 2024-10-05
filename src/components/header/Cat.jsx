"use client"

import { useEffect, useState, useRef } from 'react';

const Cat = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const catRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (catRef.current) {
        const rect = catRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        setPosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const eyeStyle = (eyeX, eyeY) => ({
    transform: `translate(${eyeX}px, ${eyeY}px)`,
  });

  const constrain = (value, min, max) => Math.max(min, Math.min(value, max));

  const eyeX = constrain(position.x / 20, -8, 8);
  const eyeY = constrain(position.y / 20, -8, 8);

  return (
    <div ref={catRef} className="relative w-32 h-32 mx-auto">
      <div className="absolute top-0 left-0 w-full h-full bg-gray-300 rounded-full flex items-center justify-center">
        <div className="relative w-16 h-16 bg-white rounded-full flex items-center justify-center">
          <div
            className="absolute w-4 h-4 bg-black rounded-full"
            style={eyeStyle(eyeX, eyeY)}
          ></div>
        </div>
        <div className="relative w-16 h-16 bg-white rounded-full ml-4 flex items-center justify-center">
          <div
            className="absolute w-4 h-4 bg-black rounded-full"
            style={eyeStyle(eyeX, eyeY)}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Cat;
