import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const NotFound = () => {
  const titleRef = useRef();
  const messageRef = useRef();
  const linkRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "bounce" },
    );
    gsap.fromTo(
      messageRef.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out", delay: 1 },
    );
    gsap.fromTo(
      linkRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "elastic.out(1, 0.3)",
        delay: 2,
      },
    );
  }, []);

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center overflow-hidden relative">
      <h2 ref={messageRef} className=" text-xl sm:text-3xl text-gray-500">
        {" "}
        Oops! 404{" "}
      </h2>
      <h1 ref={titleRef} className=" text-2xl sm:text-6xl my-5 text-center">
        This page took a vacation! 🌴😎
      </h1>
      <div className="flex sm:gap-5 gap-2">
        <Link
          ref={linkRef}
          to="/"
          className="border-[#84c620] bg-[#84c620] border-2  my-5 text-white  text-lg sm:text-2xl px-2 py-1  sm:px-10 sm:py-3  rounded-full hover:bg-[#1182df] hover:border-[#1182df]"
        >
          Back to Home
        </Link>
        <Link
          ref={linkRef}
          to="/archive"
          className=" bg-transparnt  my-5 text-md sm:text-2xl px-2 py-1  sm:px-10 sm:py-3  rounded-full hover:bg-[#1182df] hover:border-[#1182df] hover:text-white"
        >
          Our Archive
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
