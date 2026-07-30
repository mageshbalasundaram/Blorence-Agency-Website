import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./service.css";

import { Link } from "react-router-dom";

import social from "../../assets/Images/social.png";
import brand from "../../assets/Images/brand.png";
import packaging from "../../assets/Images/package.png";
import motion from "../../assets/Images/motion.png";
import web from "../../assets/Images/website.png";

gsap.registerPlugin(ScrollTrigger);

const Service = () => {
  const wordsRef = useRef([]);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const images = [brand, web, motion, social, packaging];

  useEffect(() => {
    wordsRef.current.forEach((word, index) => {
      if (word) {
        ScrollTrigger.create({
          trigger: word,
          start: "top center",
          end: "top 20%",
          onEnter: () => highlightWord(index),
          onEnterBack: () => highlightWord(index),
          onLeave: () => unhighlightWord(index),
          onLeaveBack: () => unhighlightWord(index),
        });
      }
    });

    function highlightWord(index) {
      wordsRef.current.forEach((word, idx) => {
        if (idx === index) {
          gsap.to(word, { color: "#04437a", opacity: 1, duration: 0.1 });
        } else {
          gsap.to(word, { color: "#04437a", opacity: 0.1, duration: 0.2 });
        }
      });
    }

    function unhighlightWord(index) {
      gsap.to(wordsRef.current[index], {
        color: "#04437a",
        opacity: 0.1,
        duration: 0.2,
      });
    }
  }, []);

  return (
    <div id="service">
      <div className="service-section ">
        <div className="service-text-title">
          <h4>You need it! we do it!</h4>
          <p>Click to explore our services</p>
        </div>

        <div
          className="service-container"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {["Branding", "Website", "Motion", "Social Media", "Packaging"].map(
            (word, index) => (
              <div
                key={index}
                className="service-word"
                ref={(el) => (wordsRef.current[index] = el)}
              >
                <Link to="/portfolio">
                  {word}
                  {isHovered && (
                    <div
                      className="image"
                      style={{
                        left: cursorPosition.x - 0,
                        top: cursorPosition.y - 0,
                      }}
                    >
                      <img
                        src={images[index]}
                        alt={`Blorence services | ${word}`}
                      />
                    </div>
                  )}
                </Link>
              </div>
            ),
          )}

          <div className="service-word-more w-full ">
            <div className="px-[20px] md:px-[50px] py-[30px] md:py-[50px] bg-[#04437a] text-white rounded-[30px] md:rounded-[50px] text-left mt-5 w-full ">
              <h6 className="text-2xl sm:text-5xl mb-5">
                And a whole lot more....
              </h6>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:text-3xl gap-4 w-full">
                <div className="space-y-2">
                  <p>Illustration</p>
                  <p>Branding</p>
                  <p>Product Design</p>
                  <p>Webflow</p>
                  <p>Consulting</p>
                  <p>Graphic Design</p>
                </div>
                <div className="space-y-2">
                  <p>UI/UX</p>
                  <p>Web design</p>
                  <p>Iconography</p>
                  <p>Print Design</p>
                  <p>Packaging</p>
                  <p>Naming</p>
                </div>
                <div className="space-y-2">
                  <p>Social Media</p>
                  <p>Infographics</p>
                  <p>Characters</p>
                  <p>Posters</p>
                  <p>Email Newsletters</p>
                  <p>Banners</p>
                </div>
                <div className="space-y-2">
                  <p>T-shirt & Merch</p>
                  <p>eBook and Courses</p>
                  <p>Accessibility</p>
                  <p>Typography</p>

                  <p>
                    <a
                      href="https://api.whatsapp.com/send?phone=919087918818&text=Hello%2C%20Blorence%20Design!%0AI%20am%20here%20for%20business.%20Let%27s%20talk%3F"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#84c620]"
                    >
                      Don't see it? <span className="font-bold">Ask us</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
