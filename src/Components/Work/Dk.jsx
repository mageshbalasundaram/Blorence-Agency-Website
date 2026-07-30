import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import "./Dk.css";
import gsap from "gsap"; // <-- import GSAP
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dkintro from "../../assets/Videos/intro.webm";
import dkfourlogo from "../../assets/Images/dk-four-logo.png";
import dktshirt from "../../assets/Images/dk-tshirt-design.png";
import dkcap from "../../assets/Images/Cap.png";
import dklogoanimation from "../../assets/Videos/dk-logo-animation.webm";
import dkbcard from "../../assets/Images/dkbcard.jpg";
import dkbrandcolors from "../../assets/Videos/dkbrandcolors.webm";
import dkbanner from "../../assets/Images/dkbanner.jpg";
import dkgperformance from "../../assets/Images/dkgperformance.png";
import dkiphone from "../../assets/Images/dk-iPhone.jpg";
import dkwebsite from "../../assets/Images/dkwebsite.png";
import dkad from "../../assets/Images/dk-ad.png";

import dkfourlogos from "../../assets/Images/dk-four-logo-small.png";
import dktshirts from "../../assets/Images/dk-tshirt-design-small.png";
import dkcaps from "../../assets/Images/Cap-small.png";
import dkbcards from "../../assets/Images/dkbcard-small.png";
import dkbanners from "../../assets/Images/dkbanner-small.png";
import dkgperformances from "../../assets/Images/dkgperformance-small.png";
import dkiphones from "../../assets/Images/dk-iPhone-small.png";
import dkads from "../../assets/Images/dk-ad-small.png";

import dkwebresponsive from "../../assets/Videos/dk-web-responsive.webm";



import dsfront from "../../assets/Images/ds-front.png";
import mbfront from "../../assets/Images/mb-front.png";
import tdfront from "../../assets/Images/td-front.png";
import kcfront from "../../assets/Images/kc-front.png";

gsap.registerPlugin(ScrollTrigger);

const Dk = () => {
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
        <title>
          Dk A/C Service - Branding & Website| Blorence Design Portfolio{" "}
        </title>
        <meta
          name="description"
          content="Blorence confidently crafts distinctive brand identities for DK AC SERVICE, offering a full spectrum from logo design to visual branding, including a revamped Google Business presence. Explore Blorence impressive portfolio!"
        />
        <meta
          name="keywords"
          content="DK A/C Service branding portfolio, ac service logo , ac service logo design, branding in chennai, portfolio website, branding portfolio, logo design inspiration Portfolio design, portfolio inspiration, design templates, branding design ideas, brand identity ideas, graphic designer portfolio, branding portfolio , Branding and design agency near me, graphic designer near me, website developmet agency near me,branding in chennai, creative design powerhouse, Creative Design Agency, Chennai Social Media Management, Chennai Logo Design, guduvancheri design agency, Web Design Chennai"
        />
        <link
          rel="canonical"
          href="http://blorencedesign.com/work-dkacservice"
        />

        <meta property="og:title" content="DK A/C Service | Portfolio" />
        <meta
          property="og:description"
          content="Blorence confidently crafts distinctive brand identities for DK AC SERVICE, offering a full spectrum from logo design to visual branding, including a revamped Google Business presence. Explore Blorence impressive portfolio!"
        />
        <meta
          property="og:image"
          content="https://www.blorencedesign.com/dk-ad.png"
        />
        <meta
          property="og:url"
          content="https://www.blorencedesign.com/dkacservice"
        />
      </Helmet>


      <div className="portfolio-work-container">
        <div className="portfolio-work-container-hero-text">
          <h6> Branding | Website | G business</h6>
          <h1>DK A/C Service </h1>
          <p>
            DK is a customer-focused company that provides excellent a/c service
            right at the customer's door. They received over 20 clicks a day
            locally after rebranding, along with{" "}
            <b>
              1000 views on their profiles and over 400 views on their website.
            </b>
          </p>
        </div>
        <div className="portfolio-work-container-main">
          <div className="portfolio-work-container-hero-video">
            <video autoPlay muted loop loading="lazy" poster={dkbcard}>
              <source src={dkintro} type="video/webm" loading="lazy" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="portfolio-work-detail ">
            <div className="portfolio-work-detail-text">
              <h5 ref={(el) => (textRefs.current[0] = el)}>
                What we did for the brand DK.
              </h5>
              <p ref={(el) => (textRefs.current[1] = el)}>
                Our objective is to establish a brand identity for DK that
                effectively embodies quality, professionalism, and superior
                service, while simultaneously developing dynamic advertisements
                to enhance their online visibility within the business realm.{" "}
              </p>
            </div>
            <div
              className="portfolio-work-detail-image "
              ref={(el) => (textRefs.current[2] = el)}
            >
              <img
                src={dkfourlogos}
                srcSet={`${dkfourlogos} 480w, ${dkfourlogo} 1200w`}
                sizes="(max-width: 600px) 480px, (max-width: 1200px) 1200px"

                loading="lazy"
                alt="Blorence design portfolio - Dk A/C service brand logo design"
                type="image"
              />

              <div className="w-full bg-[#f0c85b]">
                <img
                  src={dktshirts}
                   srcSet={`${dktshirts} 480w, ${dktshirt} 1200w`}
                sizes="(max-width: 600px) 480px, (max-width: 1200px) 1200px"
                  loading="lazy"
                  className="w-full"
                
                  alt="Blorence design portfolio - Dk A/C service brand product design | t-shirt design, brand cap design inspiration"
                  ref={(el) => (imageRefs.current[0] = el)}
                />
                <img
                  src={dkcaps}
                  loading="lazy"
                  className="w-full"
                  
                  srcSet={`${dkcaps} 480w, ${dkcap} 1200w`}
                  sizes="(max-width: 600px) 480px, (max-width: 1200px) 1200px"
                 
                  alt="Blorence design portfolio - Dk A/C service brand product design | t-shirt design, brand cap design inspiration"
                  ref={(el) => (imageRefs.current[1] = el)}
                />
              </div>
              <div
                className="w-full flex "
                ref={(el) => (textRefs.current[3] = el)}
              >
                <video autoPlay muted loop loading="lazy">
                  <source
                    src={dklogoanimation}
                    loading="lazy"
                    type="video/webm"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <img
                src={dkbcards}
                
                srcSet={`${dkbcards} 480w, ${dkbcard} 1200w`}
                sizes="(max-width: 600px) 480px, (max-width: 1200px) 1200px"
                className="b-card "
                loading="lazy"
                alt="Blorence design portfolio - Dk A/C service offical brand business card design inspiration"
                type="image"
              />

              <div
                className="portfolio-work-detail-video"
                ref={(el) => (textRefs.current[4] = el)}
              >
                <video autoPlay muted loop loading="lazy">
                  <source
                    src={dkbrandcolors}
                    loading="lazy"
                    type="video/webm"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div className="portfolio-work-detail-google-text">
              <p ref={(el) => (textRefs.current[5] = el)}>
                We enhanced their Google business profile with robust and
                trustworthy brand identities and strategies, resulting in a
                tenfold increase in client interaction compared to the previous
                performance.
              </p>
              <p className="my-10" ref={(el) => (textRefs.current[6] = el)}>
                On Google Maps, DK A/C service has risen to the{" "}
                <b>top 3 in its local area.</b>
              </p>
            </div>
            <div
              className="portfolio-work-detail-google-image gap-5"
              ref={(el) => (textRefs.current[7] = el)}
            >
              <img
                src={dkgperformances}
                srcSet={`${dkgperformances} 480w, ${dkgperformance} 1200w`}
                sizes="(max-width: 600px) 480px, (max-width: 1200px) 1200px"

                loading="lazy"
                alt="Blorence design portfolio - google business performance "
                type="image"
              />
              <p className="">
                The billboard features a well-structured layout that highlights
                the core services offered by DK Air Conditioner Service.
              </p>
              <img
                src={dkad}
                
                srcSet={`${dkads} 480w, ${dkad} 1200w`}
                sizes="(max-width: 600px) 480px, (max-width: 1200px) 1200px"
                loading="lazy"
                className="my-10"
                alt="Blorence design portfolio - Dk A/C service offical brand banner design inspiration"
                type="image"
              />

              <img
                src={dkbanners}
                
                srcSet={`${dkbanners} 480w, ${dkbanner} 1200w`}
                sizes="(max-width: 600px) 480px, (max-width: 1200px) 1200px"
                loading="lazy"
                className="my-10"
                alt="Blorence design portfolio - Dk A/C service offical brand banner design inspiration"
                type="image"
              />
            </div>

            <div className="portfolio-work-detail-web-text">
              <p ref={(el) => (textRefs.current[8] = el)}>
                We develop completely customized websites with excellent local
                search engine optimization that are focused solely on the brand
                essence. These websites demonstrate confidence and trust in
                their respective brands.{" "}
              </p>
            </div>
            <div
              className="portfolio-work-detail-web-image"
              ref={(el) => (textRefs.current[9] = el)}
            >
              <img
                src={dkiphones}
                
                srcSet={`${dkiphones} 480w, ${dkiphone} 1200w`}
                sizes="(max-width: 600px) 480px, (max-width: 1200px) 1200px"
                loading="lazy"
                alt="Blorence design portfolio - Dk A/C service brand web design and web development inspiration"
                type="image"
              />
              <div className="p-2 md:p-[50px]  space-y-5 md:space-y-14">
                <a href="dkacservice.in" target="_blank"
                  rel="noopener noreferrer">
                <img
                  src={dkwebsite}
                  loading="lazy"
                  className="  rounded-[30px] md:rounded-[50px]"
                  alt="Blorence design portfolio - Dk A/C service brand web design and web development inspiration  "
                  type="image"
                /></a>

                <video
                  loop
                  autoPlay
                  muted
                  loading="lazy"
                  className="rounded-[30px] md:rounded-[50px]"
                >
                  <source src={dkwebresponsive} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
          <div className="flex">
            <Link to="/contact">
              <button className="button md:text-xl text-lg md:m-20 m-10 md:px-20 px-10 md:py-5  py-3 ">
                Start a project
              </button>
            </Link>
          </div>
        </div>

        <div className="more-projects-container m-10">
          <div className="more-projects-title text-black text-5xl font-semibold">
            <h3>More Projects</h3>
          </div>

          <div className="more-projects md:max-w-full grid sm:grid-cols-3 grid-cols-1 gap-4 md:gap-10 my-10 px-3 sm:px-10">
            <div className="flex flex-col">
              <Link to="/monkeybun">
                <div className="more-project1 overflow-hidden sm:max-w-1/3  max-w-full h-auto rounded-3xl transition-all cursor-pointer ">
                  <img
                    src={mbfront}
                    alt="blorencedesign portfolio | Monkeybun "
                    loading="lazy"
                    className="hover:scale-110  transition-all"
                    type="image"
                  />
                </div>
              </Link>
              <Link
                to="/monkeybun"
                className="text-black text-3xl font-medium my-5  "
              >
                monkeyBun
                <br />
                <h6 className="text-sm text-gray-800">
                  Logo | Branding | Packaging{" "}
                </h6>
              </Link>
            </div>

            <div className="flex flex-col">
              <Link to="/kaelyncare">
                <div className="more-project1 overflow-hidden sm:max-w-1/3  max-w-full h-auto rounded-3xl transition-all cursor-pointer">
                  <img
                    src={kcfront}
                    loading="lazy"
                    alt="Blorence design portfolio page | kaelyn care | hospital branding design ideas"
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
            <div className="flex flex-col">
              <Link to="/dswhipping">
                <div className="more-project1 overflow-hidden sm:max-w-1/3  max-w-full h-auto rounded-3xl transition-all cursor-pointer">
                  <img
                    src={dsfront}
                    loading="lazy"
                    alt="Blorence design portfolio design | DS whipping shop brand design inspirations"
                    className="hover:scale-110  transition-all"
                    type="image"
                  />
                </div>
              </Link>
              <Link
                tp="/dswhipping"
                className="text-black text-3xl font-medium my-5"
              >
                {" "}
                DS Whipping <br />
                <h6 className="text-sm text-gray-800">
                  Logo | Branding | Product | Packaging{" "}
                </h6>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dk;
