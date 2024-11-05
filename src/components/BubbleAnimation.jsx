import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './BubbleAnimation.css';

const BubbleAnimation = () => {
  const [scrollY, setScrollY] = useState(0);
  const [position, setPosition] = useState({ top: '50%', left: '50%' });
  const controls = useAnimation();
  const [isBurst, setIsBurst] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const newTop = `${50 + Math.sin(scrollY / 100) * 10}vh`;
      const newLeft = `${50 + Math.cos(scrollY / 100) * 10}vw`;
      setPosition({ top: newTop, left: newLeft });
    };

    window.addEventListener('scroll', handleScroll);

    controls.start({
      scale: 1 + scrollY / 500,
      opacity: 1 - scrollY / 800,
    });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY, controls]);

  const handleDoubleClick = () => {
    setIsBurst(true);
    setTimeout(() => setIsBurst(false), 500); 
  };

  return (
    <motion.div
      animate={controls}
      onDoubleClick={handleDoubleClick}
      className={`bubble ${isBurst ? 'burst' : ''}`}
      style={{
        top: position.top,
        left: position.left,
        pointerEvents: 'auto',
      }}
    />
  );
};

export default BubbleAnimation;
