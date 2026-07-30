import React from "react";

import { Helmet } from "react-helmet-async";
import About from "../Components/about/About";

const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>
          About Us | Blorence Design - The Creative Design Powerhouse
        </title>
        <meta
          name="description"
          content="Blorence is a women owned design agency with capable team of young professionals."
        />
        <meta
          name="keywords"
          content="poster design, Branding and design agency near me,famous women graphic designers,indian logo designer,trending logo design,graphic design tutorials,2024 best designs, graphic designer near me, website developmet agency near me,women designer, women entrepreneur, branding in chennai, creative design powerhouse, Creative Design Agency, Chennai Social Media Management, Chennai Logo Design, guduvancheri design agency, Web Design Chennai"
        />
        <link rel="canonical" href="http://blorencedesign.com/about-us" />
        <meta property="og:title" content="About Us" />
        <meta
          property="og:description"
          content="Blorence is a women owned design agency with capable team of young professionals."
        />
        <meta
          property="og:image"
          content="https://www.blorencedesign.com/assets/srinithi.jpg"
        />
        <meta
          property="og:url"
          content="https://www.blorencedesign.com/about"
        />
      </Helmet>

      <About />
    </div>
  );
};

export default AboutUs;
