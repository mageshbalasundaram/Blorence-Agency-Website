import React, { useEffect, useState } from "react";
import "./ContainerScrollAnimation.css"; // Assuming you have a CSS file for styling

const ContainerScrollAnimation = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container-scroll-animation">
      {React.Children.map(children, (child, index) => (
        <div
          key={index}
          className={`item ${scrollY > index * 200 ? "animate" : ""}`}
        >
          {child} <div className="box"></div>
        </div>
      ))}
    </div>
  );
};

export default ContainerScrollAnimation;
