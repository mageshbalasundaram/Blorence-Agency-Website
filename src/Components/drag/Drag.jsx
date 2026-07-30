import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// import "./Drag.css";

import gsap from "gsap"; // <-- import GSAP
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./Drag.css";

import dkfront from "../../assets/Images/dk-front.png";
import dsfront from "../../assets/Images/ds-front.png";
import mbfront from "../../assets/Images/mb-front.png";
import tdfront from "../../assets/Images/td-front.png";
import kcfront from "../../assets/Images/kc-front.png";

gsap.registerPlugin(ScrollTrigger);

const Drag = () => {
  const [cursorText, setCursorText] = useState("");
  const [cursorStyle, setCursorStyle] = useState({ display: "none" });

  const handleMouseEnter = () => {
    setCursorText("View Portfolio View Portfolio View Portfolio");
    setCursorStyle({ display: "block" });
  };

  const handleMouseMove = (e) => {
    setCursorStyle({
      display: "block",
      left: e.clientX + "px",
      top: e.clientY + "px",
    });
  };

  const handleMouseLeave = () => {
    setCursorText("");
    setCursorStyle({ display: "none" });
  };

  const containerRef = useRef(null);

  useEffect(() => {
    const elements = gsap.utils.toArray(".grid-item");

    elements.forEach((element, index) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 10, scale: 0.9 },
        {
          scale: 1,
          y: 0,
          opacity: 1,

          duration: 1,
          delay: index * 0.2,
          ease: "power2.out",

          scrollTrigger: {
            trigger: element,
            start: "top 110%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });
    gsap.to(elements, {
      yPercent: -20,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className=" w-full flex flex-col justify-center items-center pt-10 px-3">
<div className="max-w-[1200px]">

      <div className=" flex flex-col w-full justify-start items-start">
        <h3 className="text-[16px] md:text-[20px] w-full text-center md:text-left uppercase">Something exciting for you!</h3>
        <h2 className="text-[40px] md:text-[4rem] lg:text[4rem] w-full text-center md:text-left">Featured Work</h2>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-[50px] justify-items-center pt-[100px]">
        <Link to="/dkacservice">
          <div
            className="grid-item rounded-3xl md:max-w-1/2 max-w-full relative cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className=" rounded-xl md:rounded-3xl max-w-full h-auto xl:max-w-1/2 bg-gray-500 overflow-hidden transition-all ">
              <img
                src={dkfront}
                alt="Blorence design portfolio page | DK A/C Service brand design portfolio "
                className="rounded-xl md:rounded-3xl hover:scale-125 transition-all duration-500"
              />
            </div>
            <div className="flex">
              <div className="brand-info py-4 ">
                <h3 className="font-medium text-3xl">DK A/C Service</h3>
                <p className="text-gray-500">
                  Branding | Website | Google business{" "}
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/monkeybun">
          <div
            className=" grid-item rounded-xl md:rounded-3xl md:max-w-1/2 max-w-full cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className=" rounded-xl md:rounded-3xl max-w-full h-auto xl:max-w-1/2 bg-gray-500 overflow-hidden transition-all ">
              <img
                src={mbfront}
                alt=" Blorence design portfolio | monkeybun brand design portfolio page "
                className="rounded-xl md:rounded-3xl hover:scale-125 transition-all duration-500"
              />
            </div>
            <div className="flex">
              <div className="brand-info py-4 ">
                <h3 className="font-medium text-3xl">monkeyBun</h3>
                <p className="text-gray-500">Branding | Packaging | Campaign</p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/kaelyncare">
          <div
            className=" grid-item rrounded-xl md:rounded-3xl md:max-w-1/2 max-w-full cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className=" rounded-xl md:rounded-3xl max-w-full h-auto xl:max-w-1/2 bg-gray-500 overflow-hidden transition-all ">
              <img
                src={kcfront}
                alt=" blorence design portfolio page, kaelyn care hospital branding design page"
                className="rounded-xl md:rounded-3xl hover:scale-125 transition-all duration-500"
              />
            </div>
            <div className="flex">
              <div className="brand-info py-4 ">
                <h3 className="font-medium text-3xl">Kaelyn Care Pvt ltd</h3>
                <p className="text-gray-500">
                  Social media design | Content | Print media design
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/dswhipping">
          <div
            className=" grid-item rounded-xl md:rounded-3xl md:max-w-1/2 max-w-full cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className=" rounded-xl md:rounded-3xl max-w-full h-auto xl:max-w-1/2 bg-gray-500 overflow-hidden transition-all ">
              <img
                src={dsfront}
                alt=" Blorence design portfolio | ds whipping shop cream product design ideas and inspiration"
                className="rounded-xl md:rounded-3xl hover:scale-125 transition-all duration-500"
              />
            </div>
            <div className="flex">
              <div className="brand-info py-4 ">
                <h3 className="font-medium text-3xl">Ds Whipping </h3>
                <p className="text-gray-500">
                  Logo | Packaging | Brand identity
                </p>
              </div>
            </div>
          </div>
        </Link>

        <div className="custom-cursor" style={cursorStyle}>
          <div className="cursor-text">{cursorText}</div>
        </div>
      </div>
        
</div>
    </div>
  );
};

export default Drag;
