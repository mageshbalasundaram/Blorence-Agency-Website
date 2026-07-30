import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  const textRef = useRef(null);

 useEffect(() => {
  const textWidth = textRef.current.scrollWidth / 2;

  const tween = gsap.to(textRef.current, {
    x: -textWidth,
    duration: 30,
    ease: "none",
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize((x) => parseFloat(x) % textWidth),
    },
  });

  return () => {
    tween.kill();
  };
}, []);
  return (
    <div
      className="footer-con bg-[#04437a] text-[#fff] relative  h-[90vh] sm:h-[85vh]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="footer-content container mx-auto py-8  fixed bottom-0 w-full">
        <footer className="flex flex-wrap justify-between items-center">
          <div className="footer-scroll-container w-full text-center mb-8 py-2 md:py-5 ">
            <div
              className="footer-scroll-text w-full text-3xl sm:text-5xl  font-medium  relative whitespace-nowrap   text-[#ffffff60] "
              ref={textRef}
            >
              <span>
                {" "}
                ➔ The creative design power house ➔ The creative design power
                house{" "}
              </span>
              <span>
                {" "}
                ➔ The creative design power house ➔ The creative design power
                house{" "}
              </span>
              <span>
                {" "}
                ➔ The creative design power house ➔ The creative design power
                house{" "}
              </span>
              <span>
                {" "}
                ➔ The creative design power house ➔ The creative design power
                house{" "}
              </span>
            </div>
          </div>

          <div className=" flex flex-col justify-center items-center social mb-2 w-full">
            <div className="social-title title text-lg md:text-xl font-medium mb-4">
              Stay in the loop—follow us socially!
            </div>
            <ul className=" flex gap-5 md:gap-10  m-2 text-[#fff] text-2xl  md:text-4xl">
              <li className="hover:transform hover:-translate-y-2 transition-transform duration-300 hover:text-[#ffffff95]">
                <a
                  href="https://www.instagram.com/blorence_design/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li className="hover:transform hover:-translate-y-2 transition-transform duration-300 hover:text-[#ffffff95]">
                <a
                  href="https://www.behance.net/blorencedesign1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <i className="fa-brands fa-behance"></i>
                </a>
              </li>
              <li className="hover:transform hover:-translate-y-2 transition-transform duration-300 hover:text-[#ffffff95]">
                <a
                  href="https://www.linkedin.com/company/blorencedesign/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
              <li className="hover:transform hover:-translate-y-2 transition-transform duration-300 hover:text-[#ffffff95]">
                <a
                  href="https://www.youtube.com/@BlorenceDesign"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>
              <li className="hover:transform hover:-translate-y-2 transition-transform duration-300 hover:text-[#ffffff95]">
                <a
                  href="https://in.pinterest.com/blorencedesign/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-pinterest"></i>
                </a>
              </li>
              <li className="hover:transform hover:-translate-y-2 transition-transform duration-300 hover:text-[#ffffff95]">
                <a
                  href="https://x.com/Blorencedesign"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </li>
              <li className="hover:transform hover:-translate-y-2 transition-transform duration-300 hover:text-[#ffffff95] ">
                <a
                  href="https://www.facebook.com/blorencedesigning?mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
            </ul>
          </div>

          <ul className=" flex sm:flex-row flex-col  gap-2 md:gap-10 justify-center items-center w-full text-[#ffffff95]">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                About us
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="hover:text-white">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/archive" className="hover:text-white">
                Archive
              </Link>
            </li>
            <li>
              <Link to="/career" className="hover:text-white">
                Career
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact us
              </Link>
            </li>
          </ul>

          <div className="mt-5 mb-10 xl:mb-20 text-center border-t border-gray-300  pt-5 w-full z-40 ">
            <p className="text-sm">
              &copy; Blorence {year}. All rights reserved.
            </p>
            <p className="text-xs mt-2 ">
              <Link to="/T&C" className="hover:text-gray-300 text-gray-400 ">
                Terms & Condition{" "}
              </Link>{" "}
              |
              <Link
                to="/privacy&policy"
                className="hover:text-gray-300 text-gray-400 ml-2"
              >
                Privacy Policy
              </Link>
            </p>
          </div>

          <div className="w-full flex items-center justify-center px-[1vw]">
            <h2 className=" items-center justify-center text-[25vw] text-center leading-3 sm:leading-[10vw] bottom-0 se ">
              <a href="/">Blorence</a>
            </h2>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
