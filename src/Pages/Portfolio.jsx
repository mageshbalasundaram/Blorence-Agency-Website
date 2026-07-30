import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Helmet } from "react-helmet-async";

import dkfront from "../assets/Images/dk-front.png";
import dsfront from "../assets/Images/ds-front.png";
import mbfront from "../assets/Images/mb-front.png";
import tdfront from "../assets/Images/td-front.png";
import kcfront from "../assets/Images/kc-front.png";
import Calltoaction from "../Components/cta/Calltoaction";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
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
    <div>
      <Helmet>
        <title>
          Our Portfolio | Blorence Design - The Creative Design Powerhouse
        </title>
        <meta
          name="description"
          content="We've just showcased jaw-dropping designs in our portfolio. Don't miss out – they're a great source of inspiration design for you."
        />
        <meta
          name="keywords"
          content="branding portfolio inspiration,creative portfolio ,creative design inspiration design portfolio, graphic design portfolio, Packaging design,mockups,branding design,design ideas,portfolio website,design portfolio website,what is portfolio, poster design, Branding and design agency near me, graphic designer near me, website developmet agency near me,branding in chennai, creative design powerhouse, Creative Design Agency, Chennai Social Media Management, Chennai Logo Design, guduvancheri design agency, Web Design Chennai"
        />
        <link rel="canonical" href="http://blorencedesign.com/our-portfolio" />
        <meta property="og:title" content="Our Portfolio" />
        <meta
          property="og:description"
          content="We've just showcased jaw-dropping designs in our portfolio. Don't miss out – they're a great source of inspiration design for you."
        />
        <meta
          property="og:image"
          content="https://www.blorencedesign.com/assets/dk-ad.png"
        />
        <meta
          property="og:url"
          content="https://www.blorencedesign.com/portfolio"
        />
      </Helmet>

      <div className="drag-bg flex w-full justify-center items-center px-3">
        <div className="flex max-w-[1200px] flex-col">
        <div className="drag-title flex  my-20 md:my-40 justify-center items-center ">
          <h1 className=" text-5xl md:text-[9rem] font-medium">
            Our Portfolio
          </h1>
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-[50px] justify-items-center ">
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
                  alt=" Blorence design portfolio website | PRODUCT service brand design ideas and inspirations"
                  className="rounded-xl md:rounded-3xl hover:scale-125 transition-all duration-500"
                />
              </div>
              <div className="flex">
                <div className="brand-info py-4 ">
                  <h2 className="font-medium text-3xl">DK A/C Service</h2>
                  <p className="text-gray-500">
                    Branding | Website | Google business
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/theeshadresses">
            <div
              className=" grid-item rounded-xl md:rounded-3xl md:max-w-1/2 max-w-full cursor-pointer "
              onMouseEnter={handleMouseEnter}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className=" rounded-xl md:rounded-3xl max-w-full h-auto xl:max-w-1/2 bg-gray-500 overflow-hidden transition-all ">
                <img
                  src={tdfront}
                  alt="Blorence design portfolio | premium boutique design mockups and design ideas"
                  className="rounded-xl md:rounded-3xl hover:scale-125 transition-all duration-500"
                />
              </div>
              <div className="flex">
                <div className="brand-info py-4 ">
                  <h2 className="font-medium text-3xl">Theesha Dresses</h2>
                  <p className="text-gray-500">
                    Logo | Brand identity | Packaging
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
                  alt=" blorencedesign portfolio web page | Restaurant branding and design ideas"
                  className="rounded-xl md:rounded-3xl hover:scale-125 transition-all duration-500"
                />
              </div>
              <div className="flex">
                <div className="brand-info my-4 ">
                  <h3 className="font-medium text-3xl">monkeyBun</h3>
                  <p className="text-gray-500">
                    Branding | Packaging | Campaign
                  </p>
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
                  alt=" Blorence design portfolio | premium Hosital design ideas and inspirations "
                  className="rounded-xl md:rounded-3xl hover:scale-125 transition-all duration-500"
                />
              </div>
              <div className="flex">
                <div className="brand-info my-4 ">
                  <h3 className="font-medium text-3xl">Kaelyn Care Pvt ltd</h3>
                  <p className="text-gray-500">
                    Social media design | Content | Print media design{" "}
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/dswhipping">
            <div
              className=" grid-item rounded-xl md:rounded-3xl md:max-w-1/2 max-w-full cursor-pointer "
              onMouseEnter={handleMouseEnter}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className=" rounded-xl md:rounded-3xl max-w-full h-auto xl:max-w-1/2 bg-gray-500 overflow-hidden transition-all ">
                <img
                  src={dsfront}
                  alt=" Blorence design portfolio | inspirational design and ideas"
                  className="rounded-xl md:rounded-3xl hover:scale-125 transition-all duration-500"
                />
              </div>
              <div className="flex">
                <div className="brand-info my-4 ">
                  <h4 className="font-medium text-3xl">Ds Whipping Soap</h4>
                  <p className="text-gray-500">
                    Logo | Packaging | Brand identity
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <div className="custom-cursor bg-blue-500" style={cursorStyle}>
            <div className="cursor-text ">{cursorText}</div>
          </div>
        </div>
        </div>
      </div>

      <Calltoaction />
    </div>
  );
};

export default Portfolio;
