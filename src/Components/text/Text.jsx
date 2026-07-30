import "./text.css";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Text = () => {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const textRef = useRef(null);

  useEffect(() => {
    const splitText = (element) => {
      const chars = element.innerText
        .split(" ")
        .map((char) => {
          return `<span class='char1'>${char}</span>`;
        })
        .join(" ");
      element.innerHTML = chars;
    };

    if (textRef.current) {
      splitText(textRef.current);
    }
    const animateChars = (element) => {
      const char = element.querySelectorAll(".char1");
      gsap.from(char, {
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%",
          end: " top 50%",
          scrub: true,
          markers: false,
        },
        opacity: 0.2,
        stagger: 0.5,
      });
    };
    if (textRef.current) {
      animateChars(textRef.current);
    }
  }, []);

  return (
    <>
      <div className="text-fill-container ">
        <div className="text-fill"> 
          <div className="text-fill-container-title">
            <h2>Wait wait you must know one thing</h2>
            <h6>Who we are.</h6>
          </div>
          <p ref={textRef}>
            Blorence is a rad design <b>powerhouse</b>, that's all about turning
            ideas into eye-popping visuals. Let's team up and make some
            unforgettable experiences together!
          </p>
        </div>
      </div>

      <div className="horizontal-scroll-container item-center flex w-full justify-center pb-[30px] overflow-hidden ">
        <div
          className="horizontal-scroll inline-block items-center text-3xl md:text-9xl whitespace-nowrap text-white bg-[#04437a] py-[10px] md:py-[20px]"
          style={{ transform: `translateX(-${scrollPos}px)` }}
        >
          <span className="text1 ">
            Blorence design → Blorence design → Blorence design → Blorence
            design →Blorence design → Blorence design → Blorence design
            →Blorence design → Blorence design → Blorence design → Blorence
            design → Blorence design → Blorence design → Blorence design → 
          </span>
        </div>
      </div>
    </>
  );
};

export default Text;
