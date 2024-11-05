import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const BubbleAnimation = () => {
  const [scrollY, setScrollY] = useState(0);
  const [position, setPosition] = useState({ top: '50%', left: '50%' });
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Randomize bubble position based on scroll
      const newTop = `${50 + Math.sin(scrollY / 100) * 10}vh`;
      const newLeft = `${50 + Math.cos(scrollY / 100) * 10}vw`;
      setPosition({ top: newTop, left: newLeft });
    };

    window.addEventListener('scroll', handleScroll);

    controls.start({
      scale: 1 + scrollY / 500, // Bubble grows as you scroll
      opacity: 1 - scrollY / 800, // Fade out as you scroll down
    });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY, controls]);

  return (
    <motion.div
      animate={controls}
      className="bubble"
      style={{
        width: 100,
        height: 100,
        borderRadius: '50%',
        background: 'rgba(0, 150, 255, 0.2)', // More transparent
        position: 'fixed',
        top: position.top,
        left: position.left,
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none', // Prevent bubble from blocking interactions
      }}
    />
  );
};

export default BubbleAnimation;
