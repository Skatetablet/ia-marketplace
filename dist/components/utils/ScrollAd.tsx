import React, { useEffect, useState } from 'react';

interface ScrollAdProps {
  message: string;
  backgroundColor?: string;
  textColor?: string;
}

const ScrollAd: React.FC<ScrollAdProps> = ({ message, backgroundColor = '#ffcc00', textColor = '#000' }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        display: visible ? 'block' : 'none',
        position: 'fixed',
        bottom: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor,
        color: textColor,
        padding: '10px 20px',
        borderRadius: '5px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
      }}
    >
      {message}
    </div>
  );
};

export default ScrollAd;