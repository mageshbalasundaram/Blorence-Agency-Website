import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./LoadingAnimation.css";
import blorencelogo from "../../assets/Images/blorence.png";

const LoadingAnimation = () => {
  const loadingScreenRef = useRef(null);
  const loadingTextRef = useRef(null);
  const logoRef = useRef(null); // Added reference for the logo
  const loadingBarRef = useRef(null);
  const [loadingTime, setLoadingTime] = useState(0);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("loadingAnimationShown")) {
      setIsLoading(false);
      return;
    }

    const tl = gsap.timeline({
      onUpdate: function () {
        const progress = tl.progress() * 100;
        setLoadingTime(progress.toFixed(0));
      },
      onComplete: function () {
        document.body.style.overflow = "auto";
        sessionStorage.setItem("loadingAnimationShown", "true");
        gsap.to(loadingScreenRef.current, {
          opacity: 0,
          duration: 1,
          onComplete: () => setIsLoading(false),
        });
      },
    });

    // Logo animation
    tl.to(logoRef.current, {
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    });

    tl.to(loadingTextRef.current, {
      x: "20px",
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    })
      .fromTo(
        loadingBarRef.current,
        { width: "0%" },
        {
          width: "50%",
          duration: 2,
          ease: "power2.inOut",
        },
        "-=0.5",
      )

      .to(
        loadingScreenRef.current,
        {
          height: "0%",
          duration: 1.5,
          ease: "power2.inOut",
          onComplete: () => {
            gsap.to(loadingScreenRef.current, {
              y: "-100%",
              duration: 1,
              ease: "power2.inOut",
            });
          },
        },
        "-=1",
      );

    return () => {
      gsap.killTweensOf(loadingScreenRef.current);
    };
  }, []);

  if (!isLoading) {
    return null;
  }

  return (
    <div className="loading-screen" ref={loadingScreenRef}>
      <div className="loading-text-container">
        <img
          src={blorencelogo}
          alt="blorence design Logo | The Creative Design Powerhouse "
          ref={logoRef}
          className="loading-logo"
        />{" "}
        {/* Added logo element */}
        <div className="loading-text" ref={loadingTextRef}>
          Blorence <br /> design
        </div>
      </div>

      <div className="loading-number ">{loadingTime}%</div>
    </div>
  );
};

export default LoadingAnimation;
