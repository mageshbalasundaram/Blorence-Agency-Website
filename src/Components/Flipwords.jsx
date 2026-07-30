import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Flipwords.css"; 
const FlipWords = ({ words, interval = 2000 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const wordRef = useRef(null);

  useEffect(() => {
    const flipInterval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(flipInterval);
  }, [words.length, interval]);

  useEffect(() => {
  if (!wordRef.current) return;

  const ctx = gsap.context(() => {
    gsap.fromTo(
      ".char",
      {
        opacity: 0,
        y: 50,
        rotation: 360,
      },
      {
        opacity: 1,
        y: 0,
        rotation: 0,
        duration: 1,
        stagger: 0.05,
        ease: "elastic.out(1,0.5)",
      }
    );
  }, wordRef);

  return () => ctx.revert();
}, [currentWordIndex]);
  const getWordWithSpans = (word) => {
    return word.split("").map((char, index) => (
      <span key={index} className="char">
        {char}
      </span>
    ));
  };

  return (
    <span className="flip-container">
      <span className="flip-word" ref={wordRef}>
        {getWordWithSpans(words[currentWordIndex])}
      </span>
    </span>
  );
};

export default FlipWords;
