import "./Whowe.css";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


import logo1 from '../../assets/Images/logo1.png'
import logo2 from '../../assets/Images/logo2.png'
import logo3 from '../../assets/Images/logo3.png'
import logo4 from '../../assets/Images/logo4.png'
import logo5 from '../../assets/Images/logo5.png'



const testimonials = [
  {
    logo: logo1,
    position: "Chief technician, DK A/C service",
    name: "- Dinesh Kumar",
    text: "Srinithi designed a fantastic logo that perfectly represents our brand. Highly recommended!",
  },
  {
    logo: logo2,
    name: "- DS Whipping",
    text: "Thank you for your logo design its amazing and I love it. I love the creativity and you met my expectations as well.",
  },
  {
    logo: logo3,
    position: "Managing director, monkeyBun",
    name: "- Magesh",
    text: "Simply loved to work with you!",
  },
  {
    logo: logo4,
    position: "General Practitioner, Kaelyn care hospital",
    name: "- Dr.Raj kumar",
    text: "Designs are really awesome! Their works helps me to get more clients",
  },
  {
    logo: logo5,
    position: "Founder, Theesha boutique",
    name: "- Joshnaa ",
    text: "Working with blorence design has been a game-changer for our brand!",
  },
  {
    logo: logo1,
    position: "Chief technician, DK A/C service",
    name: "- Dinesh Kumar",
    text: "Srinithi designed a fantastic logo that perfectly represents our brand. Highly recommended!",
  },
  {
    logo: logo2,
    name: "- DS Whipping",
    text: "Thank you for your logo design its amazing and I love it. I love the creativity and you met my expectations as well.",
  },
  {
    logo: logo3,
    position: "Managing director, monkeyBun",
    name: "- Magesh",
    text: "Simply loved to work with you!",
  },
  {
    logo: logo4,
    position: "General Practitioner, Kaelyn care hospital",
    name: "- Dr.Raj kumar",
    text: "Designs are really awesome! Their works helps me to get more clients",
  },
  {
    logo: logo5,
    position: "Founder, Theesha boutique",
    name: "- Joshnaa ",
    text: "You guys just transformed our vision into stunning visuals that truly capture our brands essence",
  },
  {
    logo: logo1,
    position: "Chief technician, DK A/C service",
    name: "- Dinesh Kumar",
    text: "Srinithi designed a fantastic logo that perfectly represents our brand. Highly recommended!",
  },
  {
    logo: logo2,
    name: "- DS Whipping",
    text: "Thank you for your logo design its amazing and I love it. I love the creativity and you met my expectations as well.",
  },
  {
    logo: logo3,
    position: "Managing director, monkeyBun",
    name: "- Magesh",
    text: "Simply loved to work with you!",
  },
  {
    logo: logo4,
    position: "General Practitioner, Kaelyn care hospital",
    name: "- Dr.Raj kumar",
    text: "Designs are really awesome! Their works helps me to get more clients",
  },
  {
    logo: logo5,
    position: "Founder, Theesha boutique",
    name: "- Joshnaa ",
    text: "Working with blorence design has been a game-changer for our brand! ",
  },
];

const Whowe = () => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const scroller = scrollerRef.current;

    gsap.to(scroller, {
      x: -100 * (testimonials.length - 1),
      ease: "linear",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: true,
        end: "top top",
      },
    });

    testimonials.forEach((_, i) => {
      const logo = scroller.children[i];

      gsap.fromTo(
        logo,
        { scale: 0.2, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: logo,
            start: "left bottom",
            end: "right 70%",
            scrub: true,
            anticipatePin: 1,
          },
        },
      );

      gsap.to(logo.querySelector(".tooltip"), {
        autoAlpha: 1,
        duration: 0.5,
        opacity: 1,
        scrollTrigger: {
          trigger: logo,
          start: "left 80%",
          end: "right center",
        },
      });
    });

    gsap.to(scroller, {
      x: () => -(scroller.scrollWidth / 2),
      ease: "linear",
      repeat: -1,
      repeatDelay: 0,
      duration: 40,
      modifiers: {
        x: gsap.utils.unitize(
          (x) => parseFloat(x) % (scroller.scrollWidth / 2),
        ), // Ensure the animation resets seamlessly
      },
    });
  }, []);


  return (
    <div className="know-about-con">
      <div className="testimonial">
        <div className="scroll-text-title">
          <h3>
            What our <br /> clients says{" "}
          </h3>
          <p>Seeing cheerful clients makes all our efforts worthwhile.</p>
        </div>
        <div className="scroll-container" ref={containerRef}>
          <div className="scroller" ref={scrollerRef}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="logo-wrapper">
                <img
                  src={testimonial.logo}
                  alt="Our clients | Blorence design"
                  className="client-logo"
                />
                <div className="tooltip triangle">
                  {testimonial.text}
                  <div className="client-name">{testimonial.name}</div>
                  <div className="client-position">{testimonial.position}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whowe;
