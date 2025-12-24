import React, { useState, useEffect } from 'react';

interface TypeWriterProps {
  text: string | string[];
  speed?: number;
  deleteSpeed?: number;
  wait?: number;
  loop?: boolean;
  cursor?: boolean;
  className?: string;
  cursorChar?: string;
}

export const TypeWriter: React.FC<TypeWriterProps> = ({
  text,
  speed = 150,
  deleteSpeed = 100,
  wait = 1500,
  loop = true,
  cursor = true,
  className = "",
  cursorChar = "|",
}) => {
  const texts = Array.isArray(text) ? text : [text];
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(speed);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleType = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];

      setDisplayText((current) => {
        if (isDeleting) {
          return fullText.substring(0, current.length - 1);
        } else {
          return fullText.substring(0, current.length + 1);
        }
      });

      setTypingSpeed(isDeleting ? deleteSpeed : speed);

      if (!isDeleting && displayText === fullText) {
        if (!loop && loopNum === texts.length - 1) return;
        setTypingSpeed(wait);
        setIsDeleting(true);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(speed);
      }
    };

    timer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, texts, speed, deleteSpeed, wait, loop]);

  return (
    <span className={className}>
      {displayText}
      {cursor && (
        <span className="animate-pulse ml-1">{cursorChar}</span>
      )}
    </span>
  );
};

