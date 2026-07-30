import React, { useState, useEffect } from "react";
import "./ScrollButton.css";

const ScrollButton = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    setProgress(scrollPercent);

    if (scrollTop > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-button-container">
      <div
        className={`scroll-button ${isScrolled ? "scrolled" : ""}`}
        onClick={scrollToTop}
        style={{
          background: `conic-gradient(#84c620 ${progress}%, #000 ${progress}%)`,
        }}
      >
        <span className="scroll-text">
          {isScrolled ? "Go to Top" : "Scroll to Explore"}
        </span>
      </div>
    </div>
  );
};

export default ScrollButton;
