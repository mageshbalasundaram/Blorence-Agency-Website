import "./about.css";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Whowe from "../who/Whowe";
import Calltoaction from "../cta/Calltoaction";
import { useSpring, animated } from "react-spring";
import women from "../../assets/Images/women.jpg";
import magesh from "../../assets/Images/magesh.png";
import srinithi from "../../assets/Images/srinithi.jpg";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [{ offset }, set] = useSpring(() => ({ offset: 0 }));

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    set({ offset: scrollTop });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom -200%",
          scrub: true,
          pin: true,
          markers: false, // Remove markers in production
        },
      });

      timeline
        .from(".about-first-text", {
          duration: 1000,
          opacity: 0,
          scale: 0,

          ease: "elastic.out(1, 0.3)",
          stagger: 0.05,
        })
        .to(
          ".about-first-text",
          {
            duration: 1000,
            opacity: 0,

            scale: 0,

            stagger: 0.1,
            ease: "elastic.out(1, 0.5)",
          },
          "+=1",
        )
        .from(
          ".about-second-text",
          {
            duration: 1000,
            opacity: 0,
            scale: 0,

            ease: "elastic.out(1, 0.3)",
            stagger: 0.05,
          },
          "+=1",
        )
        .to(
          ".about-second-text",
          {
            duration: 1000,
            opacity: 0,

            scale: 0,
            stagger: 0.1,
            ease: "elastic.out(1, 0.5)",
          },
          "+=1",
        );

      const revealImages = () => {
        const isSmallScreen = window.innerWidth <= 640;
        const targetHeight = isSmallScreen ? "50vh" : "100vh";

        timeline.fromTo(
          ".about-image",
          {
            height: "0vh",
            opacity: 0,
            scaleX: "0.5",
          },
          {
            height: targetHeight,
            opacity: 1,

            scaleX: "1",
            duration: 1000,
            borderRadius: 10,
          },
          "+=1",
        );
      };

      revealImages();

      window.addEventListener("resize", revealImages);
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="about-page ">
      <div className="about-page-container">
        <div className="aboutPage-hero-container">
          <div className="aboutPage-hero-title">
            <h5>About us.</h5>
          </div>

          <animated.div
            className="aboutPage-hero-text"
            style={{ transform: offset.to((o) => `translateY(${o * 0.2}px)`) }}
          >
            <h1>
              The capable team of young professionals is well-equipped to
              fulfill your requirements admirably.
            </h1>
          </animated.div>
        </div>
        <div className="aboutPage-second-container">
          <div className="aboutPage-second-text">
            <p>
              Blorence is a design powerhouse, We are specialized in creating
              storytelling websites, Stunning brand products and all kind of
              design based reqirements.
            </p>
          </div>
        </div>
        <div className="aboutPage-third-container">
          <div>
            <animated.div
              className="aboutPage-third-text-container"
              style={{
                transform: offset.to((o) => `translateY(${o * -0.05}px)`),
              }}
            >
              <h2>We are a women owned design agency</h2>

              <animated.div
                className="aboutPage-third-text-img"
                style={{
                  transform: offset.to((o) => `translateY(${o * -0.05}px)`),
                }}
              >
                <img
                  src={srinithi}
                  loading="lazy"
                  alt="Founder of blorence design | we are women owned design agency"
                />
              </animated.div>
            </animated.div>
          </div>
        </div>
        <div className="aboutPage-fourth-container">
          <div className="aboutPage-fourth-text">
            <p>
              Blorence was unmistakably founded in Tamil Nadu, located in India,
              and is based in Chennai..
            </p>
          </div>
        </div>
        <div ref={containerRef} className="about-trigger">
          <div className="about-text about-first-text">
            Unlimited-creativity
          </div>
          <div className="about-text about-second-text">Two-founders.</div>
          <div className="about-images relative">
            <div className="about-image about-image1">
              <a href="https://www.linkedin.com/in/magesh-b-006b47224/"  target="_blank" rel="noopener noreferrer">
              <img
                src={magesh} loading="lazy"
                className="z-0 absolute"
                alt="Magesh | Managing director in blorence design"
              /></a>
              <div className="about-image1-text z-20 absolute bottom-5 w-full  " >
                                <a href="https://www.linkedin.com/in/magesh-b-006b47224/"  target="_blank" rel="noopener noreferrer" >Magesh Balasundaram</a>
                                <p>Managing director</p>
                            </div>
            </div>
            <div className="about-image about-image2 ">
              <a href=" srinithi.blorencedesign.com"  target="_blank" rel="noopener noreferrer">
              <img
                src={women}
                loading="laxy"
                alt="Srinithi | Head of design in blorence design"
                className="z-0 absolute"
              /></a>
               <div className="about-image2-text z-20 bottom-5 w-full absolute">
                                <a href="srinithi.blorencedesign.com"  >Srinithi</a>
                                <p>Head of design</p>
                            </div> 
            </div>
          </div>
        </div>

        <div className="aboutPage-sixth-container">
          <animated.div
            className="aboutPage-sixth-text"
            style={{
              transform: offset.to((o) => `translateY(${o * 0.001}px)`),
            }}
          >
            <p className="aboutPage-sixth-text-founder">
              <b>"</b>Me and my best friend started Blorence together. Our aim
              is to come up with really cool design solutions that make people
              feel good. We're all about fostering strong relationships and
              keeping the communication lines open because we believe that's the
              key to our success at the design agency.<b>"</b>
            </p>
            <p className="aboutPage-sixth-text-position">
              {" "}
              <a
                href="https://www.linkedin.com/in/sri-nithi-1272b027a/"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-2xl font-bold hover:text-blue-700"
              >
                Srinithi,{" "}
              </a>{" "}
              Founder, Head of design.
            </p>
          </animated.div>
        </div>

        <div className="awards mt-[150px] py-[50px] px-[15px] md:py-20 flex flex-col justify-center items-center bg-[#04437a] text-white">
          <h3 className="text-[16px] uppercase"> <a href="https://www.blorencedesign.com/">Blorence Design</a> x <a href="https://www.designrush.com/" target="_blank" rel="noopener noreferrer">DesignRush</a>
          </h3>
          <h2 className="text-[40px] text-center leading-[46px] py-[10px]">Award-Winning Designs</h2>
          <p className=" w-full md:w-[65%] text-center text-[20px]">We’re proud to announce that our MonkeyBun Packaging Design has been handpicked by DesignRush, a leading platform celebrating top global designs! Being recognized alongside brands like Prada and Fenty is a testament to our dedication to creativity and innovation. </p>
          <div className="flex justify-center gap-2 py-5 text-[14px] md:text-[16px]"><button ><a href="https://www.designrush.com/best-designs/websites/food-beverage">See Us on DesignRush</a></button><button className="btn"><a href="https://www.blorencedesign.com/monkeybun">View our work</a></button></div>

        </div>

        <div className="aboutPage-seventh-container">
          <Whowe />
        </div>
        <div className="aboutPage-eighth-container">
          <Calltoaction />
        </div>
      </div>
    </div>
  );
};

export default About;
