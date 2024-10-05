"use client";

import { useEffect, useState, useRef } from 'react';
import ghost from '@/public/pictures/ghost.png'
import Image from 'next/image';

const Cat = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isBlinking, setIsBlinking] = useState(false);
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

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 100); // Blink duration
    }, 3000); // Blink every 10 seconds

    return () => clearInterval(blinkInterval);
  }, []);

  const eyeStyle = (eyeX, eyeY, isClosed) => ({
    transform: `translate(${eyeX}px, ${eyeY}px)`,
    width: isClosed ? '0px' : '5px',
    height: isClosed ? '0px' : '5px',
  });

  const constrain = (value, min, max) => Math.max(min, Math.min(value, max));

  const eyeX = constrain(position.x / 20, -3, 3);
  const eyeY = constrain(position.y / 20, -3, 3);

  // const isMouseCenter = Math.abs(position.x) < 55 && Math.abs(position.y) < 55;

  return (
    <div className='flex justify-center items-center relative'>
      <Image
        src={ghost}
        alt="ghost"
        className='w-[500px] mix-blend-color-dodge'
      />
      <div ref={catRef} className="w-20 h-10 mx-auto absolute top-[100px]">
        <div className="absolute top-0 left-0 w-full h-full rounded-full flex items-center justify-center">
          <div className="relative w-6 h-6 bg-sky-950 rounded-full flex items-center justify-center">
            <div
              className={`absolute bg-blue-50 rounded-full duration-75`}
              style={eyeStyle(eyeX, eyeY, isBlinking)}
            ></div>
          </div>
          <div className="relative w-6 h-6 bg-sky-950 rounded-full ml-2 flex items-center justify-center">
            <div
              className="absolute bg-blue-50 rounded-full duration-75"
              style={eyeStyle(eyeX, eyeY, isBlinking)}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cat;









// "use client";

// import { useEffect, useState, useRef } from 'react';

// const Cat = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [isBlinking, setIsBlinking] = useState(false);
//   const catRef = useRef(null);

//   useEffect(() => {
//     const handleMouseMove = (event) => {
//       if (catRef.current) {
//         const rect = catRef.current.getBoundingClientRect();
//         const x = event.clientX - rect.left - rect.width / 2;
//         const y = event.clientY - rect.top - rect.height / 2;
//         setPosition({ x, y });
//       }
//     };

//     window.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   useEffect(() => {
//     const blinkInterval = setInterval(() => {
//       setIsBlinking(true);
//       setTimeout(() => setIsBlinking(false), 200); // Blink duration
//     }, 3000); // Blink every 10 seconds

//     return () => clearInterval(blinkInterval);
//   }, []);

//   const eyeStyle = (eyeX, eyeY, isClosed) => ({
//     transform: `translate(${eyeX}px, ${eyeY}px)`,
//     width: isClosed ? '2px' : '12px',
//     height: isClosed ? '2px' : '12px',
//   });

//   const constrain = (value, min, max) => Math.max(min, Math.min(value, max));

//   const eyeX = constrain(position.x / 20, -12, 12);
//   const eyeY = constrain(position.y / 20, -12, 12);

//   const isMouseCenter = Math.abs(position.x) < 55 && Math.abs(position.y) < 55;

//   return (
//     <div ref={catRef} className="relative w-32 h-32 mx-auto">
//       <div className="absolute top-0 left-0 w-full h-full bg-gray-300 rounded-full flex items-center justify-center">
//         <div className="relative w-16 h-16 bg-white rounded-full flex items-center justify-center">
//           <div
//             className="absolute bg-black rounded-full duration-75"
//             style={eyeStyle(eyeX, eyeY, isBlinking)}
//           ></div>
//         </div>
//         <div className="relative w-16 h-16 bg-white rounded-full ml-4 flex items-center justify-center">
//           <div
//             className="absolute bg-black rounded-full duration-75"
//             style={eyeStyle(eyeX, eyeY, isBlinking)}
//           ></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cat;

