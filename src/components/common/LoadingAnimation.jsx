import React, { useEffect, useState } from 'react';
import { LOGO } from '../../constants/images';

const LoadingAnimation = ({ onComplete }) => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 2 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    // Complete animation after 2.5 seconds (fade + transition time)
    const completeTimer = setTimeout(() => {
      setIsAnimating(false);
      onComplete();
    }, 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (!isAnimating) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div
        className={`transform transition-all duration-700 ease-in-out ${
          fadeOut
            ? 'scale-50 -translate-x-[40vw] -translate-y-[45vh]'
            : 'scale-100'
        }`}
      >
        <img
          src={LOGO.FULL_BLACK}
          alt="Studio Strait Arc"
          className="w-80 h-auto animate-fade-in"
        />
      </div>
    </div>
  );
};

export default LoadingAnimation;