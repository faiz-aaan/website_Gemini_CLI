'use client';

import { useState, useEffect } from 'react';

export function TypingAnimation({ text }: { text: string }) {
  const baseText = text.slice(0, -1); // "carpenter.ai"
  const cursorChar = text.slice(-1); // "_"
  
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const delay = 2000;

  useEffect(() => {
    const handleTyping = () => {
      const fullText = baseText;
      const updatedText = isDeleting
        ? fullText.substring(0, displayedText.length - 1)
        : fullText.substring(0, displayedText.length + 1);

      setDisplayedText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, loopNum, baseText, deletingSpeed, typingSpeed, delay]);

  const renderedText = Array.from(displayedText).map((char, index) => {
    if (char === '.') {
      return (
        <span
          key={index}
          className="bg-gradient-to-r from-[#92B4F4] to-[#7868E6] text-transparent bg-clip-text"
          style={{
            filter: 'drop-shadow(0 0 0.75rem hsl(var(--primary)/0.5))',
          }}
        >
          {char}
        </span>
      );
    }
    return <span key={index}>{char}</span>;
  });

  return (
    <span className="font-bold">
      {renderedText}
      <span
        className="bg-gradient-to-r from-[#92B4F4] to-[#7868E6] text-transparent bg-clip-text animate-pulse"
        style={{
          filter: 'drop-shadow(0 0 0.75rem hsl(var(--primary)/0.5))',
        }}
      >
        {cursorChar}
      </span>
    </span>
  );
}
