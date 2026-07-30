import React, { useState } from "react";
import { Link } from "react-router-dom";

import whatsapp from "../assets/Images/whatsapp.png";

const ContactModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="button px-5 py-2 text-md rounded-full md:px-9 md:py-2"
        onClick={openModal}
      >
        Contact Us
      </button>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white md:p-8  p-4 rounded-2xl md:rounded-3xl shadow-lg relative w-full max-w-3xl mx-4 md:mx-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-5 text-black-400 hover:text-gray-600 md:text-7xl text-2xl"
            >
              &times;
            </button>
            <h2 className="md:text-2xl mb-4 text-left pr-5 ">
              You propose an idea, and we will bring it to fruition.{" "}
            </h2>
            <div className="flex flex-col md:flex-row   justify-around mt-6 space-y-4 md:space-y-0 md:space-x-10">
              <div className="border md:p-5 p-2  rounded-2xl flex flex-col items-start w-full md:w-1/2">
                <div className="text-4xl mb-2">📝</div>
                <h3 className="font-bold md:text-xl ">Enquire</h3>
                <p className="text-left text-sm md:text-lg text-gray-600 mb-4">
                  Please take a moment to fill out the form. Thank you!
                </p>
                <Link to="/contact" onClick={closeModal}>
                  <button
                    style={{ background: "#1182df" }}
                    className="px-4 py-2  text-sm md:text-lg  text-white rounded-full"
                  >
                    Go to form
                  </button>
                </Link>
              </div>
              <div className="border md:p-5 p-2   rounded-2xl  flex flex-col items-start w-full md:w-1/2">
                <div className="text-4xl mb-2">
                  <img
                    src={whatsapp}
                    alt=" Whatsapp contact | blorence design"
                    className="size-10"
                  />
                </div>
                <h3 className="font-bold md:text-xl">Quick Chat</h3>
                <p className="text-left  text-sm md:text-lg text-gray-600 mb-4 ">
                  Feel free to reach out to our business team via text anytime!
                </p>
                <a
                  href="https://api.whatsapp.com/send?phone=919087918818&text=Hello%2C%20Blorence%20Design!%0AI%20am%20here%20for%20business.%20Let%27s%20talk%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-4 py-2  text-sm md:text-lg hover:bg-green-500 bg-green-600 text-white rounded-full">
                    Chat Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactModal;
