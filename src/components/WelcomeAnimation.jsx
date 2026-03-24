import React, { useState, useEffect } from 'react';

const WelcomeAnimation = ({ onComplete }) => {
  const [text, setText] = useState('');
  const [slideOut, setSlideOut] = useState(false);
  const targetText = "WELCOME TO\nKANISHKA PORTFOLIO";
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$*&%!?/";

  const [spinner, setSpinner] = useState('');
  const spinnerChars = ['\\', '|', '/', '-'];

  useEffect(() => {
    let spinIdx = 0;
    const spinInterval = setInterval(() => {
      setSpinner(spinnerChars[spinIdx]);
      spinIdx = (spinIdx + 1) % spinnerChars.length;
    }, 100);

    let iterations = 0;
    const interval = setInterval(() => {
      setText(targetText.split('').map((char, index) => {
        if (char === ' ') return ' ';
        if (char === '\n') return '\n';
        if (index < iterations) {
          return targetText[index];
        }
        return chars[Math.floor(Math.random() * chars.length)];
      }).join(''));

      if (iterations >= targetText.length) {
        clearInterval(interval);
        setTimeout(() => setSlideOut(true), 1500);
        setTimeout(() => onComplete(), 2300);
      }

      iterations += 1 / 3;
    }, 40);

    return () => {
      clearInterval(interval);
      clearInterval(spinInterval);
    };
  }, [onComplete]);

  return (
    <div className={`welcome-container ${slideOut ? 'slide-up' : ''}`}>
      <div className="welcome-content">
        <div className="welcome-spinner">[{spinner}] INITIATING SEQUENCE [{spinner}]</div>
        <h1 className="welcome-text" style={{ whiteSpace: 'pre-wrap' }}>{text}</h1>
        <div className="welcome-spinner">[{spinner}] ESTABLISHING CONNECTION [{spinner}]</div>
      </div>
    </div>
  );
};

export default WelcomeAnimation;
