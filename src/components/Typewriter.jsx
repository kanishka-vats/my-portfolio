import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, speed = 35 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.substring(0, index + 1));
      index++;
      if (index >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <>
      {displayedText}
      {displayedText.length < text.length && <span style={{ opacity: 0.7 }}>█</span>}
    </>
  );
};

export default Typewriter;
