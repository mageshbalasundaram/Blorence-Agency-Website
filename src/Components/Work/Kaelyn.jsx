import React, { useEffect, useRef } from "react";
import "./Dk.css";
import gsap from "gsap"; // <-- import GSAP
import ReactGA from "react-ga4";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import kcintro from "../../assets/Videos/kcintro.webm";
import kcshowcase from "../../assets/Images/kcshowcase.jpg";
import kcshowcase1 from "../../assets/Images/kcshowcase1.jpg";
import kcshowcase2 from "../../assets/Images/kcshowcase2.jpg";
import kcshowcase4 from "../../assets/Images/kcshowcase4.png";
import kcshowcase5 from "../../assets/Images/kcshowcase5.png";
import kccard from "../../assets/Images/kc-card.jpg";
import kccard2 from "../../assets/Images/kc-card1.jpg";
import kcbanner from "../../assets/Images/kc-banner.jpg";
import kcflyer from "../../assets/Images/kc-flyer.jpg";

import kcshowcases from "../../assets/Images/kcshowcase-s.png";
import kcshowcase1s from "../../assets/Images/kcshowcase1-s.png";
import kcshowcase2s from "../../assets/Images/kcshowcase2-s.png";
import kcshowcase4s from "../../assets/Images/kcshowcase4-s.png";
import kcshowcase5s from "../../assets/Images/kcshowcase5-s.png";
import kcflyers from "../../assets/Images/kc-flyer-s.png";

import dsfront from "../../assets/Images/ds-front.png";
import dkfront from "../../assets/Images/dk-front.png";
import tdfront from "../../assets/Images/td-front.png";
import mbfront from "../../assets/Images/mb-front.png";

gsap.registerPlugin(ScrollTrigger);

const Kaelyn = () => {
  const handleButtonClick = () => {
    ReactGA.event({
      category: "User",
      action: "Clicked on the start project btn",
    });
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
        { opacity: 0, y: 100 },
        {
          opacity: 1,

          y: 0,

          duration: 1,

          scrollTrigger: {
            trigger: text,
            start: "top 80%",
            end: "bottom 50% ",
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
          Kaelyn Care - brand Identity, Print & Social Media design | Blorence
        </title>
        <meta
          name="description"
          content="Blorence creates standout brand identities for Kaelyn Care Hospitals, including print, social media design, and visual designs. Explore our impressive portfolio!"
        />
        <meta
          name="keywords"
          content=" kaelyn care hospital urapakkam , hospital design in guduvancheri, design service in guduvancheri, chennai design, branding for hospital, hospital logo ideas, hospital designs, hosptial design, clinic poster design, promotional poster design,  Portfolio design, portfolio inspiration, design templates, branding design ideas, brand identity ideas, graphic designer portfolio, branding portfolio , Branding and design agency near me, graphic designer near me, website developmet agency near me,branding in chennai, creative design powerhouse, Creative Design Agency, Chennai Social Media Management, Chennai Logo Design, guduvancheri design agency, Web Design Chennai"
        />
        <link
          rel="canonical"
          href="http://blorencedesign.com/work-kaelyncare"
        />

        <meta property="og:title" content="Kaelyn care | Portfolio" />
        <meta
          property="og:description"
          content="Blorence creates standout brand identities for Kaelyn Care Hospitals, including print, social media design, and visual designs. Explore our impressive portfolio"
        />
        <meta
          property="og:image"
          content="https://www.blorencedesign.com/assets/kc-flyer.jpg"
        />
        <meta
          property="og:url"
          content="https://www.blorencedesign.com/kaelyncare"
        />
      </Helmet>

      <div className="portfolio-work-container">
        <div className="portfolio-work-container-hero-text">
          <h6>Social meida Design | Brand identity | Print media</h6>
          <h1>Kaelyn care Hospital </h1>
          <p>
            Kaelyn Care Hospital is a modern, comprehensive healthcare facility
            dedicated to providing high-quality medical care and services.
            Located in a bustling metropolitan area, the hospital is known for
            its state-of-the-art technology, compassionate care, and a wide
            range of medical specialties
          </p>
        </div>
        <div className="portfolio-work-container-main">
          <div className="portfolio-work-container-hero-video">
            <video autoPlay loop muted loading="lazy" poster={kccard}>
              <source src={kcintro} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="portfolio-work-detail ">
            <div className="portfolio-work-detail-text">
              <h5 ref={(el) => (textRefs.current[0] = el)}>
                What we did for the Brand Kaelyn care pvt ltd.
              </h5>
              <p ref={(el) => (textRefs.current[1] = el)}>
                We maintained complete social media design for kaelyn care
                hospitals, including their design needs such as prescription
                design, charts, and more. This involved creating visually
                appealing and informative content that resonated with the
                hospital's brand and effectively communicated important
                information to their audience.
              </p>
            </div>
            <div className="portfolio-work-detail p-2 md:p-[50px]  space-y-5 md:space-y-14  overflow-hidden">
              <img
                ref={(el) => (imageRefs.current[0] = el)}
                src={kcshowcases}
                
                srcSet={`${kcshowcases} 480w, ${kcshowcase} 1200w`}
                sizes="(max-width: 600px) 480px, (max-width: 1200px) 1200px"
                loading="lazy"
                className="rounded-[30px] md:rounded-[50px]  hover:scale-120 transition-transform "
                alt="Blorence design portfolio - kaelyn care brand social media design | social media poster design inspiration "
              />
              <img
                ref={(el) => (imageRefs.current[1] = el)}
                src={kcshowcase1s}
                      
                srcSet={`${kcshowcase1s} 480w, ${kcshowcase1} 1200w`}
                sizes="(max-width: 600px) 480px, (max-width: 1200px) 1200px"
                loading="lazy"
                className="rounded-[30px] md:rounded-[50px] border-2 bg-teal-700 border-teal-100"
                alt="Blorence design portfolio - kaelyn care brand social media design | social media campaign poster inspiration"
              />
              <img
                ref={(el) => (imageRefs.current[2] = el)}
                src={kcshowcase2s}
                      
                srcSet={`${kcshowcase2s} 480w, ${kcshowcase2} 1200w`}
                sizes="(max-width: 600px) 480px, (max-width: 1200px) 1200px"
                loading="lazy"
                className="rounded-[30px] md:rounded-[50px]"
                alt="Blorence design portfolio - kaelyn care brand social media design | social media poster design inspiration"
              />
            </div>
            <div className="portfolio-work-detail-google-text">
              <p ref={(el) => (textRefs.current[2] = el)}>
                we create a Custom, friendly illustrations that humanize the
                brand and make the information approachable.Use of professional
                yet approachable visuals builds trust and credibility with
                potential patients.
              </p>
              <p className="my-10" ref={(el) => (textRefs.current[3] = el)}>
                Prominent calls to action drive immediate response from the
                audience, boosting conversions.
              </p>
            </div>
            <div className="portfolio-work-detail-google-image flex flex-col items-center">
              <img
                ref={(el) => (imageRefs.current[3] = el)}
                src={kcshowcase4s}
                      
                srcSet={`${kcshowcase4s} 480w, ${kcshowcase4} 1200w`}
                sizes="(max-width: 600px) 480px, (max-width: 1200px) 1200px"
                loading="lazy"
                className="  border-2 border-teal-100 bg-teal-100"
                alt=" Blorence design portfolio - kaelyn care brand instagram poster design | social media (instagram) poster design template inspiration"
              />
            </div>
            <div className="portfolio-work-detail-web-text">
              <p ref={(el) => (textRefs.current[5] = el)}>
                This digital billboard advertisement effectively captures
                attention with its clear, attractive design and compelling
                offer. The use of friendly illustrations and organized layout
                ensures that the message is easily understood, making it an
                effective tool for promoting Kaelyn Care Pharmacy's services and
                offers to the public.
              </p>
            </div>
            <div className="portfolio-work-detail-web-image p-2 space-y-5 md:space-y-14 md:p-[50px]">
              <img
                ref={(el) => (imageRefs.current[5] = el)}
                src={kcflyers}
                      
                srcSet={`${kcflyers} 480w, ${kcflyer} 1200w`}
                sizes="(max-width: 600px) 480px, (max-width: 1200px) 1200px"
                loading="lazy"
                className="rounded-[30px] md:rounded-[50px] "
                alt="Blorence design portfolio - kaelyn care brand flyer design , phamplet design | flyer design inspiration"
              />

              <img
                ref={(el) => (imageRefs.current[6] = el)}
                src={kcbanner}
                loading="lazy"
                className="rounded-[30px] md:rounded-[50px] "
                alt="Blorence design portfolio - kaelyn care brand banner design | hospital banner design  inspiration"
              />
            </div>
            <div className="portfolio-work-detail-web-text">
              <p ref={(el) => (textRefs.current[6] = el)}>
                <b>
                  The Kaelyn Care business card design effectively combines
                  professional aesthetics with clear, organized information.
                </b>
              </p>
              <p ref={(el) => (textRefs.current[7] = el)}>
                The consistent use of teal and white, along with the subtle
                background elements, enhances the visual appeal while
                maintaining a strong focus on readability and brand identity.
              </p>
            </div>
            <div className="portfolio-work-detail-web-image p-2 space-y-5 md:space-y-14 md:p-[50px]">
              <img
                ref={(el) => (imageRefs.current[7] = el)}
                loading="lazy"
                src={kccard}
            
                className="rounded-[30px] md:rounded-[50px] "
                alt="Blorence design portfolio - kaelyn care brand business card| hospital business card design  inspiration"
              />

              <img
                ref={(el) => (imageRefs.current[8] = el)}
                loading="lazy"
                src={kccard2}
                className="rounded-[30px] md:rounded-[50px] "
                alt=" Blorence design portfolio - kaelyn care brand business card | hospital business card design  inspiration"
              />
            </div>
            <div className="portfolio-work-detail-web-text">
              <p ref={(el) => (textRefs.current[9] = el)}>
                To highlight the capabilities and professionalism of their lab
                services. This post emphasizes the scientific and analytical
                work done at Kaelyn Care Lab, suggesting they have skilled
                technicians and modern facilities.
              </p>
            </div>
            <div className="portfolio-work-detail-web-image p-2 space-y-5 md:space-y-14 md:p-[50px]">
              <img
                ref={(el) => (imageRefs.current[9] = el)}
                loading="lazy"
                src={kcshowcase5s}
                      
                srcSet={`${kcshowcase5s} 480w, ${kcshowcase5} 1200w`}
                sizes="(max-width: 600px) 480px, (max-width: 1200px) 1200px"
                className="rounded-[30px] md:rounded-[50px] "
                alt="Blorence design portfolio - kaelyn care brand awareness social media poster |  brand awareness social media poster design  inspiration"
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
              <Link to="/theeshadresses">
                <div className="more-project1 overflow-hidden sm:max-w-1/3  max-w-full h-auto rounded-3xl transition-all cursor-pointer">
                  <img
                    src={tdfront}
                    loading="lazy"
                    alt="blorence design portfolio | theesha dresses logo design ideas"
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
              <Link to="/monkeybun">
                <div className="more-project1 overflow-hidden sm:max-w-1/3  max-w-full h-auto rounded-3xl transition-all cursor-pointer ">
                  <img
                    src={mbfront}
                    alt=" Blorence design portfolio | monkeybun brand  packaging design mockup"
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
            <div className="flex flex-col">
              <Link to="/dkacservice">
                <div className="more-project1 overflow-hidden sm:max-w-1/3  max-w-full h-auto rounded-3xl transition-all cursor-pointer">
                  <img
                    src={dkfront}
                    loading="lazy"
                    alt="Blorence design portfolio | DK A/C Service branding design "
                    className="hover:scale-110  transition-all"
                    type="image"
                  />
                </div>
              </Link>
              <Link
                to="/dkacservice"
                className="text-black text-3xl font-medium my-5  "
              >
                DK A/C service <br />
                <h6 className="text-sm text-gray-800">
                  Logo | Branding | Website | Wearables | G business
                </h6>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kaelyn;
