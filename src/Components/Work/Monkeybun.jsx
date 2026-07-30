import React, { useEffect, useRef } from "react";
import "./Dk.css";
import gsap from "gsap"; // <-- import GSAP

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import mbboardone from "../../assets/Images/mbboardone.png";
import mbboardtwol from "../../assets/Images/mbboardtwo.png";
import nonvegbox from "../../assets/Images/nonvegbox.png";
import vegbox from "../../assets/Images/vegbox.jpg";
import carrybagone from "../../assets/Images/carrybagone.jpg";
import carrybagtwo from "../../assets/Images/carrybagtwo.jpg";
import mbgiftcard from "../../assets/Images/mbgiftcard.jpg";
import mbgiftcard1 from "../../assets/Images/mbgiftcard1.jpg";
import wrap1 from "../../assets/Images/wrap1.jpg";
import wrap2 from "../../assets/Images/wrap2.jpg";
import mbcolorpalete from "../../assets/Images/mbcolorpalete.png";
import mblogotext from "../../assets/Images/mblogotext.png";
import mblogoanimation from "../../assets/Videos/mblogoanimation.mp4";
import mbbunbox from "../../assets/Images/mbbunbox.jpg";
import mbmascot from "../../assets/Images/mbmascot.png";
import mbmonkey from "../../assets/Images/mbmonkey.png";
import mbad from "../../assets/Images/mb-ad.jpg";
import mbcub from "../../assets/Images/mb-cub.png";
import mbtextone from "../../assets/Videos/mbtextone.mp4";
import mbtexttwo from "../../assets/Videos/mbtexttwo.webm";
import rightarrow from "../../assets/Images/right-arrow.svg";
import leftarrow from "../../assets/Images/left-arrow.svg";
import mbintro from "../../assets/Videos/mbintro.webm";

import mbboardones from "../../assets/Images/mbboardone-s.png";
import mbboardtwols from "../../assets/Images/mbboardtwo-s.png";
import nonvegboxs from "../../assets/Images/nonvegbox-s.png";
import vegboxs from "../../assets/Images/vegbox-s.png";
import carrybagones from "../../assets/Images/carrybagone-s.png";
import carrybagtwos from "../../assets/Images/carrybagtwo-s.png";
import mbgiftcards from "../../assets/Images/mbgiftcard-s.png";
import mbgiftcard1s from "../../assets/Images/mbgiftcard1-s.png";
import wrap1s from "../../assets/Images/wrap1-s.png";
import mbcolorpaletes from "../../assets/Images/mbcolorpalete-s.png";
import mblogotexts from "../../assets/Images/mblogotext-s.png";
import mbbunboxs from "../../assets/Images/mbbunbox-s.png";
import mbmascots from "../../assets/Images/mbmascot-s.png";
import mbads from "../../assets/Images/mb-ad-s.png";
import mbcubs from "../../assets/Images/mb-cub-s.png";

import dsfront from "../../assets/Images/ds-front.png";
import dkfront from "../../assets/Images/dk-front.png";
import tdfront from "../../assets/Images/td-front.png";
import kcfront from "../../assets/Images/kc-front.png";

gsap.registerPlugin(ScrollTrigger);

const Monkeybun = () => {
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
          monkey Bun - Branding & packaging design | Blorence Design Portfolio{" "}
        </title>
        <meta
          name="description"
          content="Blorence specializes in creating distinctive brand identities for restaurants, offering a comprehensive range from logo design to visual branding. Explore Blorence's impressive portfolio!"
        />
        <meta
          name="keywords"
          content="restaurants packaging design inspirations,  brand identities for restaurants, restaurants branding ,  restaurants branding in chennai,   Portfolio design, portfolio inspiration, design templates, branding design ideas, brand identity ideas, graphic designer portfolio, branding portfolio , Branding and design agency near me, graphic designer near me, website developmet agency near me,branding in chennai, creative design powerhouse, Creative Design Agency, Chennai Social Media Management, Chennai Logo Design, guduvancheri design agency, Web Design Chennai"
        />
        <link rel="canonical" href="http://blorencedesign.com/work-monkeybun" />

        <meta property="og:title" content="monkey Bun | Portfolio" />
        <meta
          property="og:description"
          content="Blorence specializes in creating distinctive brand identities for restaurants, offering a comprehensive range from logo design to visual branding. Explore Blorence's impressive portfolio!"
        />
        <meta
          property="og:image"
          content="https://www.blorencedesign.com/mbbunbox.png"
        />
        <meta
          property="og:url"
          content="https://www.blorencedesign.com/monkeybun"
        />
      </Helmet>

      <div className="portfolio-work-container relative overflow-x-hidden">
        <div className="portfolio-work-container-hero-text">
          <h6>Branding | Pacakging | Campagin</h6>
          <h1>monkeyBun</h1>
          <p>
            MonkeyBun, a contemporary cloud kitchen, delivers fresh, delicious
            meals online. Enjoy gourmet dining from the comfort of your home
            with MonkeyBun's convenient delivery service. we used Strategic
            color to enhances message clarity and Using the golden ratio,
            monkeyBun's palette is designed to be visually pleasing and
            impactful, making your brand memorable and attractive.
          </p>{" "}
        </div>
        <div className="portfolio-work-container-main">
          <div className="portfolio-work-container-hero-video">
            <video autoPlay loop muted poster={mbbunbox}>
              <source src={mbintro} loading="lazy" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="portfolio-work-detail ">
            <div className="portfolio-work-detail-text">
              <h5 ref={(el) => (textRefs.current[0] = el)}>
                What we did for MonkeyBun.
              </h5>
              <p ref={(el) => (textRefs.current[1] = el)}>
                We came up with a really cool look for this brand that's all
                about serving up delicious food. Our awesome packaging and brand
                visuals helped them reach a wider audience and they've been
                doing great ever since. our approach demonstrates a thoughtful
                and sophisticated brand identity, setting us apart in the
                marketplace.
              </p>
            </div>
            <div
              className="portfolio-work-detail-image  bg-[#fff3ab]"
              ref={(el) => (textRefs.current[2] = el)}
            >
              <img
                src={mblogotexts}
                srcSet={`${mblogotexts} 480w, ${mblogotext} 1200w`}
                sizes="(max-width: 600px) 480px, (max-width: 1200px) 1200px"
                ref={(el) => (textRefs.current[3] = el)}
                loading="lazy"
                alt="Blorence design portfolio - monkey bun's brand logo design | logo design inspiration "
              />

              <div className="flex" ref={(el) => (imageRefs.current[0] = el)}>
                <img
                  src={mbmascots}
                srcSet={`${mbmascots} 480w, ${mbmascot} 1200w`}
                sizes="(max-width: 600px) 480px, (max-width: 1200px) 1200px"
                  loading="lazy"
                  className="w-1/2"
                  alt="Blorence design portfolio - monkey bun's brand logo mascot design | logo mascot design inspiration"
                />
                <img
                  src={mbmonkey}
                  
                  loading="lazy"
                  className="w-1/2 h-auto "
                  alt="Blorence design portfolio - monkey bun's brand logo mascot design | logo mascot design inspiration"
                />
              </div>
              <video
                autoPlay
                loop
                muted
                ref={(el) => (imageRefs.current[1] = el)}
              >
                <source src={mblogoanimation} loading="lazy" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="portfolio-work-detail-web-text">
              <p ref={(el) => (textRefs.current[4] = el)}>
                <b>Brand color pallete:</b>
              </p>
              <p ref={(el) => (textRefs.current[5] = el)}>
                {" "}
                monkeyBun brand color palette has been meticulously crafted
                using the golden ratio to create a visually harmonious and
                balanced design. The golden ratio, approximately 1.618, is a
                mathematical principle often found in nature and classical art,
                known for its pleasing proportions.
              </p>
            </div>

            <div className="portfolio-work-detail-image-image bg-[#fff3ab] m-2 md:m-[50px] rounded-[20px] md:rounded-[50px]">
              <img
                src={mbcolorpaletes}
                srcSet={`${mbcolorpaletes} 480w, ${mbcolorpalete} 1200w`}
                sizes="(max-width: 600px) 480px, (max-width: 1200px) 1200px"
                loading="lazy"
                alt="Blorence design portfolio - monkey bun brand's color palette design | palette design inspiration"
                className=""
                ref={(el) => (imageRefs.current[2] = el)}
              />
            </div>

            <div className="portfolio-work-detail-google-text">
              <p ref={(el) => (textRefs.current[6] = el)}>
                For the most delicious and freshest meals, it's essential to
                have the tastiest packaging that reflects the brand's identity
                and the love for serving food!{" "}
              </p>
              <div className="p-2 md:p-[50px]">
                <img
                  src={mbcubs}
                  srcSet={`${mbcubs} 480w, ${mbcub} 1200w`}
                sizes="(max-width: 600px) 480px, (max-width: 1200px) 1200px"
                  loading="lazy"
                  className="  rounded-[30px] md:rounded-[50px]"
                  alt="Blorence design portfolio - monkey bun brand's coffee cup packaging design | coffee cup packaging design inspiration"
                  ref={(el) => (textRefs.current[7] = el)}
                />
              </div>

              <p ref={(el) => (textRefs.current[8] = el)}>
                "We love to serve foods" This is what they really believe in -
                their passion and professionalism!
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
                className="scrollContainer flex gap-10 overflow-x-scroll snap-mandatory h-3/4  md:h-[95vh]  snap-x scrollbar-hide "
                style={{ overflowY: "hidden" }}
              >
                <img
                  src={mbbunboxs}
                  srcSet={`${mbbunboxs} 480w, ${mbbunbox} 1200w`}
                sizes="(max-width: 600px) 480px, (max-width: 1200px) 1200px"
                  loading="lazy"
                  className="my-5 snap-center "
                  alt="Blorence design portfolio - monkey bun brand's packaging design |food box packaging design inspiration"
                />
                <img
                  src={nonvegboxs}
                  srcSet={`${nonvegboxs} 480w, ${nonvegbox} 1200w`}
                sizes="(max-width: 600px) 480px, (max-width: 1200px) 1200px"
                  loading="lazy"
                  className="my-5 snap-center "
                  alt="Blorence design portfolio - monkey bun brand's packaging design |food packaging design inspiration"
                />
                <img
                  src={wrap1s}
                  srcSet={`${wrap1s} 480w, ${wrap1} 1200w`}
                sizes="(max-width: 600px) 480px, (max-width: 1200px) 1200px"
                  loading="lazy"
                  className=" my-5 snap-center"
                  alt="Blorence design portfolio - monkey bun brand's packaging design | packaging design inspiration"
                />
                <img
                  src={vegboxs}
                  srcSet={`${vegboxs} 480w, ${vegbox} 1200w`}
                sizes="(max-width: 600px) 480px, (max-width: 1200px) 1200px"
                  loading="lazy"
                  className=" my-5 snap-center"
                  alt="Blorence design portfolio - monkey bun brand's packaging design | packaging design inspiration"
                />
                <img
                  src={wrap2}
                  loading="lazy"
                  className=" my-5 snap-center"
                  alt="Blorence design portfolio - monkey bun brand's packaging design | packaging design inspiration"
                />
                <img
                  src={carrybagones}
                  srcSet={`${carrybagones} 480w, ${carrybagone} 1200w`}
                sizes="(max-width: 600px) 480px, (max-width: 1200px) 1200px"
                  loading="lazy"
                  className="snap-center my-5"
                  alt="Blorence design portfolio - monkey bun brand's packaging design | packaging design inspiration"
                />
                <img
                  src={carrybagtwos}
                  srcSet={`${carrybagtwos} 480w, ${carrybagtwo} 1200w`}
                sizes="(max-width: 600px) 480px, (max-width: 1200px) 1200px"
                  loading="lazy"
                  className="snap-center my-5"
                  alt="Blorence design portfolio - monkey bun brand's packaging design | packaging design inspiration"
                />
              </div>
              <button
                className="absolute right-4 md:right-16 top-1/2 transform -translate-y-1/2 w-8 md:w-14 hover:bg-[#ffffff68] bg-[#ffffff48] p-2 rounded-full z-10"
                onClick={scrollRight}
              >
                <img src={rightarrow} alt=" arrow" />
              </button>
            </div>

            <div className="portfolio-work-detail-web-image my-10 mx-2 gap-5 ">
              <div
                ref={(el) => (imageRefs.current[3] = el)}
                className="flex  justify-start  items-center p-2 md:p-10  w-full md:w-3/4 rounded-full border   hover:bg-[#fff3ab] hover:text-[#9c2c2d] transition-all hover:border-0"
              >
                <video
                  loading="lazy"
                  autoPlay
                  loop
                  muted
                  className="w-40 md:w-60 rounded-full"
                >
                  <source src={mbtexttwo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="flex flex-col">
                  <h5 className=" text-xl md:text-3xl ml-[10px] md:ml-[50px]">
                    <b>font family:</b> Cafe Cake
                  </h5>
                </div>
              </div>

              <div
                ref={(el) => (textRefs.current[9] = el)}
                className="flex flex-row-reverse justify-start  items-center  p:2 md:p-10 w-full md:w-3/4 rounded-full border hover:bg-[#fff3ab] hover:text-[#9c2c2d] transition-all hover:border-0"
              >
                <video
                  loading="lazy"
                  autoPlay
                  loop
                  muted
                  className=" w-40 md:w-60 rounded-full"
                >
                  <source src={mbtextone} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="flex flex-col  items-end  ">
                  <h5 className="text-xl md:text-3xl mr-[10px] md:mr-[50px] ">
                    <b>font family:</b> Sono
                  </h5>
                </div>
              </div>
            </div>
            <div
              className="portfolio-work-detail-web-text"
              ref={(el) => (textRefs.current[10] = el)}
            >
              <p>
                We create standee that shows playful and vibrant design targets
                a broad audience, especially those looking for a good deal on a
                meal. The simplicity of the message and the visual appeal make
                it suitable for busy environments where quick, clear
                communication is essential.
              </p>
            </div>
            <div className="rounded-[30px] md:rounded-[50px] overflow-hidden m-2 md:m-[50px]">
              <img
                src={mbads}
                srcSet={`${mbads} 480w, ${mbad} 1200w`}
                sizes="(max-width: 600px) 480px, (max-width: 1200px) 1200px"
                loading="lazy"
                className="w-full"
                alt="Blorence design portfolio - monkey bun brand's campaign design, billboard banner design | campaignand billboard design inspiration"
                ref={(el) => (textRefs.current[11] = el)}
              />
            </div>
            <div className="flex rounded-[30px] md:rounded-[50px] overflow-hidden m-2 md:m-[50px]">
              <img
                src={mbboardones}
                srcSet={`${mbboardones} 480w, ${mbboardone} 1200w`}
                sizes="(max-width: 600px) 480px, (max-width: 1200px) 1200px"
                loading="lazy"
                className="w-1/2 hover:scale-110"
                alt="Blorence design portfolio - monkey bun brand's campaign design | campaign design inspiration"
                ref={(el) => (textRefs.current[12] = el)}
              />
              <img
                src={mbboardtwols}
                srcSet={`${mbboardtwols} 480w, ${mbboardtwol} 1200w`}
                sizes="(max-width: 600px) 480px, (max-width: 1200px) 1200px"
                loading="lazy"
                className="w-1/2 hover:scale-110"
                alt="Blorence design portfolio - monkey bun brand's campaign design | campaign design inspiration"
                ref={(el) => (textRefs.current[13] = el)}
              />
            </div>
            <div
              className="portfolio-work-detail-web-text"
              ref={(el) => (textRefs.current[14] = el)}
            >
              <p>
                {" "}
                We create a gift card that is perfect for customers who wish to
                share the joy of monkey Bun's offerings with their friends and
                loved ones. It makes an excellent gift, combining practicality
                with a delightful presentation.
              </p>
            </div>
            <div className=" portfolio-work-detail-image flex flex-col-reverse">
              <img
                src={mbgiftcards}
                srcSet={`${mbgiftcards} 480w, ${mbgiftcard} 1200w`}
                sizes="(max-width: 600px) 480px, (max-width: 1200px) 1200px"
                loading="lazy"
                alt="Blorence design portfolio - monkey bun brand's gift card design | brand gift card design inspiration"
                ref={(el) => (textRefs.current[15] = el)}
              />
              <img
                src={mbgiftcard1s}
                srcSet={`${mbgiftcard1s} 480w, ${mbgiftcard1} 1200w`}
                sizes="(max-width: 600px) 480px, (max-width: 1200px) 1200px"
                loading="lazy"
                alt="Blorence design portfolio - monkey bun brand's gift card design | brand gift card design inspiration"
                ref={(el) => (textRefs.current[16] = el)}
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
              <Link to="/dswhipping">
                <div className="more-project1 overflow-hidden sm:max-w-1/3  max-w-full h-auto rounded-3xl transition-all cursor-pointer">
                  <img
                    src={dsfront}
                    loading="lazy"
                    alt=" Blorence design portfolio | Ds Whipping shop brand product design"
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
                DS Whipping Soap <br />
                <h6 className="text-sm text-gray-800">
                  Logo | Branding | Product | Packaging{" "}
                </h6>{" "}
              </Link>
            </div>
            <div className="flex flex-col">
              <Link to="/dkacservice">
                <div className="more-project1 overflow-hidden sm:max-w-1/3  max-w-full h-auto rounded-3xl transition-all cursor-pointer ">
                  <img
                    src={dkfront}
                    alt=" Blorence design portfolio | DK A/C Service brand designs"
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
                    alt="Blorence Design Portfolio | theesha dresses logo design  "
                    className="hover:scale-110  transition-all"
                    type="image"
                  />
                </div>
              </Link>
              <Link
                to="/theeshadresses"
                className="text-black text-3xl font-medium my-5  "
              >
                Theesha Dresses <br />
                <h6 className="text-sm text-gray-800">
                  Logo | Brand identity | Packaging{" "}
                </h6>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Monkeybun;
