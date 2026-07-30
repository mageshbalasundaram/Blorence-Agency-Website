import React, { useEffect, useRef } from "react";
import "./Dk.css";
import gsap from "gsap"; // <-- import GSAP
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import tdintro from "../../assets/Videos/theesha-intro.webm";
import tdlogotype from "../../assets/Images/td-logo-type.png";
import tdbag1 from "../../assets/Images/tdbag-1.png";
import tdbag2 from "../../assets/Images/tdbag-2.png";
import tdbag3 from "../../assets/Images/tdbag-3.png";
import tdtag from "../../assets/Images/td-tag.png";
import tdbutton from "../../assets/Images/td-button.png";
import tdlogo from "../../assets/Images/tdlogo.png";
import tdlogo2 from "../../assets/Images/tdlogo2.png";
import tdcircle from "../../assets/Images/tdcircle.png";
import tdimage from "../../assets/Images/tdimage.png";
import tdimage1 from "../../assets/Images/tdimage1.jpg";
import tdimage2 from "../../assets/Images/tdimage2.jpg";
import tdimage3 from "../../assets/Images/tdimage3.jpg";
import tdimage4 from "../../assets/Images/tdimage4.png";
import tdimage5 from "../../assets/Images/tdimage5.jpg";
import tdimage6 from "../../assets/Images/tdimage6.jpg";
import rightarrow from "../../assets/Images/right-arrow.svg";
import leftarrow from "../../assets/Images/left-arrow.svg";

import tdbag1s from "../../assets/Images/tdbag-1-s.png";
import tdbag3s from "../../assets/Images/tdbag-3-s.png";
import tdtags from "../../assets/Images/td-tag-s.png";
import tdbuttons from "../../assets/Images/td-button-s.png";
import tdlogos from "../../assets/Images/tdlogo-s.png";
import tdlogo2s from "../../assets/Images/tdlogo2-s.png";
import tdcircles from "../../assets/Images/tdcircle-s.png";

import dsfront from "../../assets/Images/ds-front.png";
import dkfront from "../../assets/Images/dk-front.png";
import kcfront from "../../assets/Images/kc-front.png";
import mbfront from "../../assets/Images/mb-front.png";

gsap.registerPlugin(ScrollTrigger);

const Thessa = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 500, behavior: "smooth" });
    }
  };
  const reelscrollContainerRef = useRef(null);

  const reelscrollLeft = () => {
    if (reelscrollContainerRef.current) {
      reelscrollContainerRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const reelscrollRight = () => {
    if (reelscrollContainerRef.current) {
      reelscrollContainerRef.current.scrollBy({
        left: 500,
        behavior: "smooth",
      });
    }
  };

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
          Theesha Dresses - Logo & Packaging design | Blorence Design Porfolio
        </title>
        <meta
          name="description"
          content="Blorence crafts exclusive brand identities for Theesha Dresses boutique, providing a complete range from captivating logos to compelling visual design. Explore Blorence's inspiring portfolio today!"
        />
        <meta
          name="keywords"
          content=" boutique branding ideas, branding for boutique, boutique brand color pallettes branding portfolio, boutique logo design,  boutique brand logo,   dresess packaging design ideas,  packaging design portfolio, packaging design inspiration,  promotional poster design,  Portfolio design, portfolio inspiration, design templates, branding design ideas, brand identity ideas, graphic designer portfolio, branding portfolio , Branding and design agency near me, graphic designer near me, website developmet agency near me,branding in chennai, creative design powerhouse, Creative Design Agency, Chennai Social Media Management, Chennai Logo Design, guduvancheri design agency, Web Design Chennai"
        />
        <link
          rel="canonical"
          href="http://blorencedesign.com/work-theesha-dresses"
        />

        <meta property="og:title" content="Theesha Dresses | Portfolio" />
        <meta
          property="og:description"
          content="Blorence crafts exclusive brand identities for Theesha Dresses boutique, providing a complete range from captivating logos to compelling visual design. Explore Blorence's inspiring portfolio today!"
        />
        <meta
          property="og:image"
          content="https://www.blorencedesign.com/assets/td-tag.png"
        />
        <meta
          property="og:url"
          content="https://www.blorencedesign.com/theeshadresses"
        />
      </Helmet>
      <div className="portfolio-work-container">
        <div className="portfolio-work-container-hero-text">
          <h6>Logo | Brand identity | Packaging </h6>
          <h1>Theesha dresses</h1>
          <p>
            Theesha dresses is a charming, cozy boutique owned and operated by a
            family, often passed down through generations. The shop exudes
            warmth and friendliness, making every customer feel like part of the
            family. It offers a curated selection of dresses for various
            occasions, including casual wear, formal events, and special
            celebrations.
          </p>
        </div>
        <div className="portfolio-work-container-main">
          <div className="portfolio-work-container-hero-video">
            <video autoPlay loop muted poster={tdbag3}>
              <source src={tdintro} loading="lazy" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="portfolio-work-detail ">
            <div className="portfolio-work-detail-text">
              <h5 ref={(el) => (textRefs.current[0] = el)}>
                What we did for the brand Theesha Dresses.
              </h5>
              <p ref={(el) => (textRefs.current[1] = el)}>
                {" "}
                Creating the brand identity for Theesha Dresses involved a
                strategic and creative process focused on highlighting elegance,
                quality, and empowerment. We started by defining a clear vision
                and mission, aiming to empower women through timeless and
                stylish dresses.{" "}
              </p>
              <p ref={(el) => (textRefs.current[2] = el)}>
                The core values shows in their brands elegance, quality,
                empowerment, inclusivity, and sustainability—guided every
                decision.{" "}
              </p>
            </div>
            <div
              className="portfolio-work-detail-image bg-[#9cb677]"
              ref={(el) => (textRefs.current[3] = el)}
            >
              <img
                src={tdcircles}
                srcSet={`${tdcircles} 480w, ${tdcircle} 1200w`}
                sizes="(max-width: 600px) 480px, (max-width: 1200px) 1200px"
                
                loading="lazy"
                alt="Blorence design portfolio - theesha dresses brand logo design | creative boutique logo design inspiration"
                ref={(el) => (textRefs.current[4] = el)}
              />

              <img
                src={tdlogo2s}
                srcSet={`${tdlogo2s} 480w, ${tdlogo2} 1200w`}
                sizes="(max-width: 600px) 480px, (max-width: 1200px) 1200px"

                loading="lazy"
                alt="Blorence design portfolio - theesha dresses brand logo design | creative boutique logo design inspiration"
                ref={(el) => (imageRefs.current[0] = el)}
              />
              <img
                src={tdlogos}
                srcSet={`${tdlogos} 480w, ${tdlogo} 1200w`}
                sizes="(max-width: 600px) 480px, (max-width: 1200px) 1200px"
                loading="lazy"
                alt="Blorence design portfolio - theesha dresses brand logo design | creative boutique logo design inspiration"
                ref={(el) => (imageRefs.current[1] = el)}
              />
              <img
                src={tdlogotype}
                loading="lazy"
                alt="Blorence design portfolio - theesha dresses brand  logo design types | creative boutique logo design types inspiration"
                ref={(el) => (textRefs.current[5] = el)}
              />
            </div>
            <div className="portfolio-work-detail-google-text">
              <p ref={(el) => (textRefs.current[6] = el)}>
                The logo, a modern circular design with partial breaks and
                dotted details, combined with a sophisticated cursive font for
                "Theesha" and a straightforward font for "Dresses," perfectly
                encapsulates our brand essence{" "}
              </p>
            </div>

            <div className=" relative portfolio-work-detail-google-image space-y-5 md:space-y-14 ">
              <button
                className="absolute left-4 md:left-16 top-1/2 transform -translate-y-1/2 w-8 md:w-14 p-2 hover:bg-[#ffffff68] bg-[#ffffff48] rounded-full z-20"
                onClick={reelscrollLeft}
              >
                <img src={leftarrow} alt=" arrow" />
              </button>

              <div
                ref={reelscrollContainerRef}
                className="scrollContainer2 flex gap-10 overflow-x-scroll snap-mandatory h-3/4  md:h-[100vh]  snap-x scrollbar-hide "
                style={{ overflowY: "hidden" }}
              >
                <img
                  src={tdimage}
                  loading="lazy"
                  className="my-5 snap-center "
                  alt="Blorence design portfolio - Theesha Dresses packaging design | boutique branding and packaging design inspiration"
                />
                <img
                  src={tdimage1}
                  loading="lazy"
                  className="my-5 snap-center "
                  alt="Blorence design portfolio - Theesha Dresses packaging design | boutique branding and packaging design inspiration"
                />
                <img
                  src={tdimage2}
                  loading="lazy"
                  className=" my-5 snap-center"
                  alt="Blorence design portfolio - Theesha Dresses packaging design | boutique branding and packaging design inspiration"
                />
                <img
                  src={tdimage3}
                  loading="lazy"
                  className="my-5 snap-center "
                  alt="Blorence design portfolio - Theesha Dresses packaging design | boutique branding and packaging design inspiration"
                />
                <img
                  src={tdimage4}
                  loading="lazy"
                  className="my-5 snap-center "
                  alt="Blorence design portfolio - Theesha Dresses packaging design | boutique branding and packaging design inspiration"
                />
                <img
                  src={tdimage5}
                  loading="lazy"
                  className=" my-5 snap-center"
                  alt="Blorence design portfolio - Theesha Dresses packaging design | boutique branding and packaging design inspiration"
                />
                <img
                  src={tdimage6}
                  loading="lazy"
                  className="my-5 snap-center "
                  alt="Blorence design portfolio - Theesha Dresses packaging design | boutique branding and packaging design inspiration"
                />
              </div>
              <button
                className="absolute right-4 md:right-16 top-1/2 transform -translate-y-1/2 w-8 md:w-14 hover:bg-[#ffffff68] bg-[#ffffff48] p-2 rounded-full z-20"
                onClick={reelscrollRight}
              >
                <img src={rightarrow} alt=" arrow" />
              </button>
            </div>

            <div className="portfolio-work-detail-google-text">
              <p ref={(el) => (textRefs.current[7] = el)}>
                <b>
                  Our chosen color palette, featuring various shades of green,
                  reflects freshness, growth, and harmony.{" "}
                </b>{" "}
              </p>
            </div>

            <div className=" relative portfolio-work-detail-google-image space-y-5 md:space-y-14 ">
              <button
                className="absolute left-4 md:left-16 top-1/2 transform -translate-y-1/2 w-8 md:w-14 p-2 hover:bg-[#ffffff68] bg-[#ffffff48] rounded-full z-10"
                onClick={scrollLeft}
              >
                <img src={leftarrow} alt=" arrow" />
              </button>

              <div
                ref={scrollContainerRef}
                className="scrollContainer2 flex gap-10 overflow-x-scroll snap-mandatory h-3/4  md:h-full snap-x scrollbar-hide "
                style={{ overflowY: "hidden" }}
              >
                <img
                  src={tdbag1s}
                  srcSet={`${tdbag1s} 480w, ${tdbag1} 1200w`}
                sizes="(max-width: 600px) 480px, (max-width: 1200px) 1200px"
                  loading="lazy"
                  className="my-5 snap-center "
                  alt="Blorence design portfolio - Theesha boutique branding and  packaging design | dress box and carry cover premium design inspiration"
                />
                <img
                  src={tdbag2}
                  
                  loading="lazy"
                  className="my-5 snap-center "
                  alt="Blorence design portfolio - Theesha boutique branding and  packaging design | dress box and carry cover premium design inspiration"
                />
                <img
                  src={tdbag3s}
                  srcSet={`${tdbag3s} 480w, ${tdbag3} 1200w`}
                sizes="(max-width: 600px) 480px, (max-width: 1200px) 1200px"
                  loading="lazy"
                  className=" my-5 snap-center"
                  alt="Blorence design portfolio - Theesha boutique branding and  packaging design | dress box and carry cover premium design inspiration"
                />
              </div>
              <button
                className="absolute right-4 md:right-16 top-1/2 transform -translate-y-1/2 w-8 md:w-14 hover:bg-[#ffffff68] bg-[#ffffff48] p-2 rounded-full z-10"
                onClick={scrollRight}
              >
                <img src={rightarrow} alt=" arrow" />
              </button>
            </div>

            <div className="portfolio-work-detail-web-text">
              <p ref={(el) => (textRefs.current[8] = el)}>
                Through consistent brand messaging, elegant packaging, and
                exceptional customer service, we have created a cohesive and
                memorable brand experience that inspires confidence and
                celebrates individuality.
              </p>
            </div>
            <div className="portfolio-work-detail-web-image space-y-5 md:space-y-14 m-2 md:m-[50px]">
              <img
                src={tdbuttons}
                srcSet={`${tdbuttons} 480w, ${tdbutton} 1200w`}
                sizes="(max-width: 600px) 480px, (max-width: 1200px) 1200px"
                alt="Blorence design portfolio - Theesha boutique  premium branding and  packaging design |  elagant shop logo design inspiration"
                className="rounded-[30px] md:rounded-[50px] "
                ref={(el) => (textRefs.current[9] = el)}
              />
              <img
                src={tdtags}
                srcSet={`${tdtags} 480w, ${tdtag} 1200w`}
                sizes="(max-width: 600px) 480px, (max-width: 1200px) 1200px"
                alt="Blorence design portfolio - Theesha boutique premium  branding and  packaging design |  elagant shop logo design inspiration"
                className="rounded-[30px] md:rounded-[50px] "
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
              <Link to="/kaelyncare">
                <div className="more-project1 overflow-hidden sm:max-w-1/3  max-w-full h-auto rounded-3xl transition-all cursor-pointer">
                  <img
                    src={kcfront}
                    loading="lazy"
                    alt=" Blorence design portfolio website | kaelyn care hospital | hospital design"
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
                    alt=" Blorence design portfolio | Ds whipping product design inspiration "
                    className="hover:scale-110  transition-all"
                    type="image"
                  />
                </div>
              </Link>
              <Link
                to="/dswhipping"
                className="text-black text-3xl font-medium my-5"
              >
                {" "}
                DS Whipping soap <br />
                <h6 className="text-sm text-gray-800">
                  Logo | Branding | Product | Packaging{" "}
                </h6>{" "}
              </Link>
            </div>

            <div className="flex flex-col">
              <Link to="/monkeybun">
                <div className="more-project1 overflow-hidden sm:max-w-1/3  max-w-full h-auto rounded-3xl transition-all cursor-pointer ">
                  <img
                    src={mbfront}
                    alt="Blorencedesign portfolio | Monkey bun | burger shop design ideas"
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
                monkeyBun <br />
                <h6 className="text-sm text-gray-800">
                  Logo | Branding | Packaging{" "}
                </h6>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Thessa;
