import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./Archived.css";
import Calltoaction from "../cta/Calltoaction";

import { Helmet } from "react-helmet-async";


import archived1 from "../../assets/Images/archived-1.jpg";
import archived2 from "../../assets/Images/archived-2.jpg";
import archived3 from "../../assets/Images/archived-3.png";
import archived4 from "../../assets/Images/archived-4.jpg";
import archived5 from "../../assets/Images/archived-5.jpg";
import archived6 from "../../assets/Images/archived-6.jpg";
import archived7 from "../../assets/Images/archived-7.jpg";
import archived8 from "../../assets/Images/archived-8.jpg";
import archived9 from "../../assets/Images/archived-9.jpg";
import archived10 from "../../assets/Images/archived-10.jpg";
import archived11 from "../../assets/Images/archived-11.png";
import archived12 from "../../assets/Images/archived-12.jpg";
import archived13 from "../../assets/Images/archived-13.jpg";
import archived14 from "../../assets/Images/archived-14.jpg";
import archived15 from "../../assets/Images/archived-15.jpg";
import archived16 from "../../assets/Images/archived-16.png";
import archived17 from "../../assets/Images/ds-sandle-s.jpg";
import archived18 from "../../assets/Images/td-tag-s.png";
import archived20 from "../../assets/Images/kc-banner.jpg";
import archived21 from "../../assets/Images/tdimage1.jpg";

const images = [
  archived1,
  archived2,
  archived3,
  archived17,
  archived4,
  archived5,
  archived6,
  archived18,
  archived7,
  archived8,
  archived9,
  archived10,
  archived11,
  archived12,
  archived13,
  archived20,
  archived14,
  archived15,
  archived16,
  archived21,

  // Add more image URLs as needed
];

const DynamicImages = () => {
  const containerRef = useRef(null);
  const imagesWrapperRef = useRef(null);

  const [canAddImage, setCanAddImage] = useState(true);
  let imageCount = 0;

  useEffect(() => {
    const container = containerRef.current;
    const imagesWrapper = imagesWrapperRef.current;

    const handleMouseMove = (e) => {
      if (!canAddImage) return;

      const { clientX, clientY } = e;

      const newImage = document.createElement("img");
      newImage.src = images[Math.floor(Math.random() * images.length)];
      newImage.alt = `Blorence design | portfolio | Archived ${imageCount + 1}`;
      newImage.className = "image-item";
      newImage.style.top = `${clientY}px`;
      newImage.style.left = `${clientX}px`;
      imagesWrapper.appendChild(newImage);

      const rotation = imageCount % 20 === 0 ? 2 : 4 ? 8 : 16 ? 24 : 40; // Alternate rotation direction
      imageCount++;

      gsap.fromTo(
        newImage,
        { opacity: 1, scale: 0.5, rotation: 0, duration: 0.1, delay: 1 },
        {
          opacity: 1,
          scale: 1,
          rotation,
          delay: 0.2,
          duration: 0.8,
          ease: "power3.out",
        },
      );
      gsap.to(newImage, {
        opacity: 0,
        scale: 0,
        duration: 0.5,
        delay: 2,
        ease: "power3.in",
        onComplete: () => newImage.remove(),
      });

      setCanAddImage(false);
      setTimeout(() => {
        setCanAddImage(true);
      }, 50);
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, [canAddImage]);

  return (
    <>
      <Helmet>
        <title>
          Our Archive | Blorence Design - The Creative Design Powerhouse
        </title>
        <meta
          name="description"
          content="Dive into our history and see how we've evolved to bring you innovative design solutions and creative excellence in blorence"
        />
        <meta
          name="keywords"
          content="Histroy of design, archived portfolio, vintage style design, design trend 2026,  our archive , poster design, Branding and design agency near me, graphic designer near me, website developmet agency near me,branding in chennai, creative design powerhouse, Creative Design Agency, Chennai Social Media Management, Chennai Logo Design, guduvancheri design agency, Web Design Chennai"
        />
        <link rel="canonical" href="http://blorencedesign.com/archive-hidden" />

        <meta property="og:title" content="Archived" />
        <meta
          property="og:description"
          content="Dive into our history and see how we've evolved to bring you innovative design solutions and creative excellence in blorence"
        />
        <meta
          property="og:image"
          content="https://www.blorencedesign.com/assets/archived-4.jpg"
        />
        <meta
          property="og:url"
          content="https://www.blorencedesign.com/archive"
        />
      </Helmet>

      <div className="dynamic-container" ref={containerRef}>
        <h1 className="archive-title">Archive</h1>
        <div className="images-wrapper" ref={imagesWrapperRef}></div>
      </div>
      <Calltoaction />
    </>
  );
};

export default DynamicImages;
