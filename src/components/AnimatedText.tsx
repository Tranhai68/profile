import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.25'],
  });

  const characters = text.split('');

  return (
    <p ref={containerRef} className={`relative flex flex-wrap justify-center ${className}`}>
      {characters.map((char, index) => {
        const start = index / characters.length;
        const end = start + 1 / characters.length;

        return (
          <CharacterSpan
            key={index}
            char={char}
            progress={scrollYProgress}
            range={[start, end]}
          />
        );
      })}
    </p>
  );
};

interface CharacterSpanProps {
  char: string;
  progress: any;
  range: [number, number];
}

const CharacterSpan: React.FC<CharacterSpanProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  if (char === ' ') {
    return <span className="inline-block">&nbsp;</span>;
  }

  return (
    <span className="relative inline-block">
      <span className="opacity-20 select-none text-transparent">{char}</span>
      <motion.span
        style={{ opacity }}
        className="absolute left-0 top-0 text-[#D7E2EA]"
      >
        {char}
      </motion.span>
    </span>
  );
};
