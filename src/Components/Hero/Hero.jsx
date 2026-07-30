"useClient";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import blorenceintro from "../../assets/Videos/blorence-intro.webm";
import tdtag from '../../assets/Images/td-tag.png'

import FlipWords from "../Flipwords";

import "./Hero.css";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const words = ["Thoughts", "Brand", "Website"];

  const videoContainerRef = useRef(null);

  useEffect(() => {
    const videoContainer = videoContainerRef.current;

    gsap.fromTo(
      videoContainer,
      { scale: 1 },
      {
        scale: 1,

        ease: "power1.out",
        scrollTrigger: {
          trigger: videoContainer,
          start: "top 70%",
          end: "bottom center",
          scrub: true,
        },
      },
    );
  }, []);

  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const splitText = (element) => {
      const chars = element.innerText
        .split("")
        .map((char) => {
          if (char === " ") {
            return `<span class='char'>&nbsp;</span>`;
          }
          return `<span class='char'>${char}</span>`;
        })
        .join("");
      element.innerHTML = chars;
    };

    if (titleRef.current) {
      splitText(titleRef.current);
    }
    if (subtitleRef.current) {
      splitText(subtitleRef.current);
    }

    const animateChars = (element) => {
      const chars = element.querySelectorAll(".char");
      gsap.fromTo(
        chars,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          stagger: 0.05,
          ease: "back.out(1.7)",
          delay: 0.2,
        },
      );
    };

    if (titleRef.current) {
      animateChars(titleRef.current);
    }
    if (subtitleRef.current) {
      animateChars(subtitleRef.current);
    }
  }, []);

  return (
    <div className="hero-container">
      <div className="hero">
        <h1 className="hero-title">
          <span ref={titleRef}>We Design Your</span>
          <br />
          <FlipWords words={words} interval={2000} />
        </h1>
        <motion.p
          className="hero-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Blorence is where brands get best designing experience never yet!
        </motion.p>
        <Link to="/portfolio">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="button-2"
          >
            {" "}
            View portfolio
          </motion.button>
        </Link>
      </div>
      <div className="full-screen-vedio">
        <div className="video-container" ref={videoContainerRef}>
          <motion.video
            initial={{ y: 100, opacity: 0.5 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="full-screen-video"
            autoPlay
            loop
            muted
            poster={tdtag}
          >
            <source src={blorenceintro} loading="lazy" type="video/webm" />
            Your browser does not support the video tag.
          </motion.video>
        </div>
      </div>
    </div>
  );
};

export default Hero;
