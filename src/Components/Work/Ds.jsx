import React, { useEffect, useRef } from "react";
import "./Dk.css";
import gsap from "gsap"; // <-- import GSAP

import { Link } from "react-router-dom";

import { Helmet } from "react-helmet-async";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dsintro from "../../assets/Videos/dsintro.webm";
import dstypeslogo from "../../assets/Images/ds-types-logo.png";
import dstypo from "../../assets/Images/ds-typo.png";
import dsproduct1 from "../../assets/Images/ds-product-1.jpg";
import dsproduct2 from "../../assets/Images/ds-product-2.jpg";
import dscolorpellete from "../../assets/Videos/ds-color-pellete.mp4";
import dsintro2 from "../../assets/Videos/dsintro2.webm";
import dsbox from "../../assets/Images/ds-box.jpg";
import dspackaging from "../../assets/Images/ds-packaging.jpg";
import dssandle from "../../assets/Images/ds-sandle.png";
import dswhite from "../../assets/Images/ds-white.png";

import dstypeslogos from "../../assets/Images/ds-types-logo-s.png";
import dstypos from "../../assets/Images/ds-typo-s.png";
import dspackagings from "../../assets/Images/ds-packaging-s.png";
import dssandles from "../../assets/Images/ds-sandle-s.jpg";
import dswhites from "../../assets/Images/ds-white-s.png";


import kcfront from "../../assets/Images/kc-front.png";
import dkfront from "../../assets/Images/dk-front.png";
import tdfront from "../../assets/Images/td-front.png";
import mbfront from "../../assets/Images/mb-front.png";

gsap.registerPlugin(ScrollTrigger);

const Ds = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const elements = gsap.utils.toArray(".portfolio-work-container-hero-text");
    gsap.to(elements, {
      yPercent: 300,
      scale: 0,
      opacity: 0.5,

      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "center top",
        scrub: true,
      },
    });
  }, []);

  const textRefs = useRef([]);

  useEffect(() => {
    textRefs.current.forEach((text, index) => {
      gsap.fromTo(
        text,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: text,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });
  }, []);

  const imageRefs = useRef([]);

  useEffect(() => {
    imageRefs.current.forEach((text, index) => {
      gsap.fromTo(
        text,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,

          duration: 1,

          scrollTrigger: {
            trigger: text,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Ds Whipping - Logo & Packaging Design | Blorence Design </title>
        <meta
          name="description"
          content="Blorence creates unique brand identities for DS Whipping, covering everything from logo design to visual brand identities. Check out Blorence's impressive portfolio!"
        />
        <meta
          name="keywords"
          content=" packaging design portfolio, packaging design inspiration,  promotional poster design,  Portfolio design, portfolio inspiration, design templates, branding design ideas, brand identity ideas, graphic designer portfolio, branding portfolio , Branding and design agency near me, graphic designer near me, website developmet agency near me,branding in chennai, creative design powerhouse, Creative Design Agency, Chennai Social Media Management, Chennai Logo Design, guduvancheri design agency, Web Design Chennai"
        />
        <link
          rel="canonical"
          href="http://blorencedesign.com/work-dswhipping"
        />

        <meta property="og:title" content="Ds Whipping | Portfolio" />
        <meta
          property="og:description"
          content="Blorence creates unique brand identities for DS Whipping, covering everything from logo design to visual brand identities. Check out Blorence's impressive portfolio!"
        />
        <meta
          property="og:image"
          content="https://www.blorencedesign.com/assets/ds-box.jpg"
        />
        <meta
          property="og:url"
          content="https://www.blorencedesign.com/dswhipping"
        />
      </Helmet>
      <div className="portfolio-work-container">
        <div className="portfolio-work-container-hero-text">
          <h6>Logo | Brand identity | Packaging</h6>
          <h1>DS Whipping </h1>
          <p>
            Ds Whipping is an established brand that specializes in the sale of
            expertly crafted, organic herbal soap cream. At Blorence Design, we
            pride ourselves on creating logos and packaging that not only stand
            out but also embody the essence of a brand.
          </p>
        </div>
        <div className="portfolio-work-container-main">
          <div className="portfolio-work-container-hero-video">
            <video autoPlay loop muted poster={dsbox}>
              <source src={dsintro} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="portfolio-work-detail ">
            <div className="portfolio-work-detail-text">
              <h5 ref={(el) => (textRefs.current[0] = el)}>
                What we did for the brand DS Whipping.
              </h5>
              <p ref={(el) => (textRefs.current[1] = el)}>
                The logo of Ds Whipping represents the essence of the brand. We
                have meticulously crafted a distinctive logo that embodies the
                brand's unique qualities of quality and versatility. Our
                rigorous creative process guarantees that the logo we produce
                impeccably merges aesthetic appeal with practicality, leaving a
                profound and enduring impact on the target audience.
              </p>
            </div>
            <div
              className="portfolio-work-detail-image"
              ref={(el) => (textRefs.current[2] = el)}
            >
              <img
                src={dstypeslogos}
                
                srcSet={`${dstypeslogos} 480w, ${dstypeslogo} 1200w`}
                sizes="(max-width: 600px) 480px, (max-width: 1200px) 1200px"
                loading="lazy"
                alt="Blorence design portfolio - Ds whipping soap brand logo design | types of logo design inspiration"
              />
              <div className="flex">
                <img
                  src={dstypos}
                  
                srcSet={`${dstypos} 480w, ${dstypo} 1200w`}
                sizes="(max-width: 600px) 480px, (max-width: 1200px) 1200px"
                  loading="lazy"
                  alt="Blorence design portfolio - Ds whipping soap brand  typography design |  typography design inspiration"
                  className="w-1/2 bg-white"
                  ref={(el) => (imageRefs.current[0] = el)}
                />
                <video autoPlay loop muted className="w-1/2">
                  <source
                    src={dscolorpellete}
                    loading="lazy"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="portfolio-work-detail-google-text">
              <p ref={(el) => (textRefs.current[3] = el)}>
                Exceptional packaging not only serves to protect the product but
                also narrates a compelling story. Our team specializes in
                crafting packaging designs that are not only visually striking
                but also effectively communicate the core values of the Ds
                Whipping brand, thereby enriching the overall customer
                experience
              </p>
            </div>
            <div className="portfolio-work-detail-google-image space-y-8 md:space-y-14">
              <img

                src={dssandles}
                
                srcSet={`${dssandles} 480w, ${dssandle} 1200w`}
                sizes="(max-width: 600px) 480px, (max-width: 1200px) 1200px"
                loading="lazy"
                alt="Blorence design portfolio - Ds whipping soap brand product showcase design | premium product design inspiration"
                className="bg-[#9c84c0]"
                ref={(el) => (textRefs.current[4] = el)}
              />

              <img
                src={dswhites}
                
                srcSet={`${dswhites} 480w, ${dswhite} 1200w`}
                sizes="(max-width: 600px) 480px, (max-width: 1200px) 1200px"
                loading="lazy"
                alt="Blorence design portfolio - Ds whipping soap brand product showcase design | premium product design inspiration"
                className="bg-[#9c84c0]"
                ref={(el) => (textRefs.current[5] = el)}
              />
            </div>

            <div className="flex  md:px-[50px] px-2 ">
              <video
                autoPlay
                loop
                muted
                className=" w-full md:w-1/2 rounded-[30px] md:rounded-[50px]"
              >
                <source src={dsintro2} loading="lazy" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="portfolio-work-detail-web-text">
              <p ref={(el) => (textRefs.current[6] = el)}>
                Regardless of whether the design direction is sleek and
                contemporary or bold and lively, our packaging designs will
                undoubtedly elevate the appeal of Ds products on the shelves.{" "}
              </p>
            </div>
            <div className="portfolio-work-detail-web-image md:px-[50px] md:py-[50px] px-2 py-[30px] space-y-5 md:space-y-14 ">
              <img
                src={dsproduct2}
                loading="lazy"
                alt="Blorence design portfolio - Ds whipping soap brand product design | branded product design inspiration"
                className=" rounded-[30px] md:rounded-[50px]"
                ref={(el) => (textRefs.current[7] = el)}
              />
              <img
                src={dsproduct1}
                loading="lazy"
                alt="Blorence design portfolio - Ds whipping soap brand product design | brand product design inspiration"
                className=" rounded-[30px] md:rounded-[50px]"
                ref={(el) => (textRefs.current[8] = el)}
              />
              <img
                src={dspackagings}
                
                srcSet={`${dspackagings} 480w, ${dspackaging} 1200w`}
                sizes="(max-width: 600px) 480px, (max-width: 1200px) 1200px"
                loading="lazy"
                alt="Blorence design portfolio - Ds whipping soap brand product design | branded productdesign, brand packaging design inspiration"
                className=" rounded-[30px] md:rounded-[50px]"
                ref={(el) => (textRefs.current[9] = el)}
              />
              <img
                src={dsbox}
                loading="lazy"
                alt="Blorence design portfolio - Ds whipping soap brand product design | brand product packaging coverdesign inspiration"
                className=" rounded-[30px] md:rounded-[50px]"
                ref={(el) => (textRefs.current[10] = el)}
              />
            </div>
          </div>

          <Link to="/contact">
            <button className="button md:text-xl text-lg md:m-20 m-10 md:px-20 px-10 md:py-5  py-3 ">
              Start a project
            </button>
          </Link>
        </div>

        <div className="more-projects-container m-10">
          <div className="more-projects-title text-black text-5xl font-semibold">
            <h3>More Projects</h3>
          </div>

          <div className="more-projects md:max-w-full grid sm:grid-cols-3 grid-cols-1 gap-4 md:gap-10 my-10 px-3 sm:px-10">
            <div className="flex flex-col">
              <Link to="/dkacservice">
                <div className="more-project1 overflow-hidden sm:max-w-1/3  max-w-full h-auto rounded-3xl transition-all cursor-pointer ">
                  <img
                    src={dkfront}
                    alt=" Blorencedesign portfolio website | DK A/C Service brand design ideas"
                    loading="lazy"
                    className="hover:scale-110  transition-all"
                    type="image"
                  />
                </div>
              </Link>
              <Link
                to="/dkacservice"
                className="text-black text-3xl font-medium my-5  "
              >
                DK A/C Service <br />{" "}
                <h6 className="text-sm text-gray-800">
                  Logo | Branding | Website | Wearables | G business
                </h6>{" "}
              </Link>
            </div>
            <div className="flex flex-col">
              <Link to="/theeshadresses">
                <div className="more-project1 overflow-hidden sm:max-w-1/3  max-w-full h-auto rounded-3xl transition-all cursor-pointer">
                  <img
                    src={tdfront}
                    loading="lazy"
                    alt="Blorence design portfolio page | Theesha dresses branding designs "
                    className="hover:scale-110  transition-all"
                    type="image"
                  />
                </div>
              </Link>
              <Link
                to="/theeshadresses"
                className="text-black text-3xl font-medium my-5"
              >
                Theesha Dresses <br />
                <h6 className="text-sm text-gray-800">
                  Logo | Brand identity | Packaging{" "}
                </h6>{" "}
              </Link>
            </div>
            <div className="flex flex-col">
              <Link to="/kaelyncare">
                <div className="more-project1 overflow-hidden sm:max-w-1/3  max-w-full h-auto rounded-3xl transition-all cursor-pointer">
                  <img
                    src={kcfront}
                    loading="lazy"
                    alt="Blorence design portfolio page | Kaelyn care hospital design portfolio inspiration"
                    className="hover:scale-110  transition-all"
                    type="image"
                  />
                </div>
              </Link>
              <Link
                to="/kaelyncare"
                className="text-black text-3xl font-medium my-5  "
              >
                Kaelyn Care Hospital <br />
                <h6 className="text-sm text-gray-800">
                  Social meida Design | Brand identity | Print media
                </h6>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ds;
