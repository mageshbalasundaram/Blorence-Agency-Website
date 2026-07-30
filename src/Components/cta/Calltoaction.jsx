import React, { useState } from "react";

import { Link } from "react-router-dom";

import copy from '../../assets/Images/copy.png'
const Calltoaction = () => {
  const [copied, setCopied] = useState("");

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(text);
      setTimeout(() => setCopied(""), 2000); // Reset after 2 seconds
    });
  };


  return (
    <div className="calltoaction-container flex flex-col justify-center items-center my-10 pm:py-20 sm:px-5">
      <div className="call-to-action flex sm:flex-row flex-col justify-between  max-w-[1200px]">
        <div className="md:w-1/2 w-full text-xl sm:text-3xl md:text-5xl ">
          <p className=" my-2 sm:p-5 px-4 ">
            We’re <span className="text-[#1182df]"> Blorence.</span> A dynamic
            team working on remarkable projects and forging lasting partnerships
            that go far beyond the final deliverable
          </p>
          <p className="my-2 sm:my-5 px-4">
            "Looking to team up with a friendly and talented crew?{" "}
            <span className="text-[#1182df]">
              {" "}
              Don't hesitate to reach out to us."
            </span>
          </p>
        </div>
        <div className="text-xl sm:text-2xl sm:mt-5 px-4">
          <div className="text-2xl sm:text-3xl font-medium">Contact</div>
          <div className=" flex items-center my-1 sm:my-2 ">
            <p
              onClick={() => copyToClipboard("+91 9087918818")}
              className="cursor-pointer hover:text-gray-500"
            >
              +91 9087918818
            </p>
            <button
              onClick={() => copyToClipboard("+91 9087918818")}
              className="ml-2"
            >
              <img src={copy} alt="Copy" className="h-4 w-4" />
            </button>
            {copied === "+91 9087918818" && (
              <span className="copy-indicator text-xs ml-2">Copied!</span>
            )}
          </div>

          <div className=" flex items-center my-1 sm:my-2 ">
            <p
              onClick={() => copyToClipboard("+91 9514561781")}
              className="cursor-pointer hover:text-gray-500"
            >
              +91 9514561781
            </p>
            <button
              onClick={() => copyToClipboard("+91 9514561781")}
              className="ml-2"
            >
              <img src={copy} alt="Copy" className="h-4 w-4" />
            </button>
            {copied === "+91 9514561781" && (
              <span className="copy-indicator text-xs ml-2">Copied!</span>
            )}
          </div>

          <div className=" flex items-center my-1 sm:my-2">
            <p
              onClick={() => copyToClipboard("contact@blorencedesign.com")}
              className="cursor-pointer hover:text-gray-500"
            >
              Catch in Mail
            </p>
            <button
              onClick={() => copyToClipboard("contact@blorencedesign.com")}
              className="ml-2"
            >
              <img src={copy} alt="Copy" className="h-4 w-4" />
            </button>
            {copied === "contact@blorencedesign.com" && (
              <span className="copy-indicator text-xs ml-2">Copied!</span>
            )}
          </div>

          <div className=" text-2xl sm:text-3xl font-medium mt:2 sm:mt-10">
            Address
          </div>
          <div className="my-1 sm:my-2">
            Guduvancheri, <br />
            Chennai <br />
            603202 <br />
            TN, India
          </div>
        </div>
      </div>

      <Link className="w-full flex justify-center items-center" to="/contact">
        <button className="cssbuttons-io-button w-10/12 text-[7vw] my-10 sm:my-20">
          Let's Collab
          <div className="icon">
            <svg
              height="200"
              width="200"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default Calltoaction;
