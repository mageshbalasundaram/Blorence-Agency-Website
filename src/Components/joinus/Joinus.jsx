import "./Joinus.css";
import { motion } from "framer-motion";
import React, { useState } from "react";

import career from "../../assets/Images/Career.png";

const Joinus = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleMouseEnter = () => {
    setShowMessage(true);
  };

  const handleMouseLeave = () => {
    setShowMessage(false);
  };

  return (
    <div>
      <div className="career-container">
        <div className="career-container-hero">
          <motion.div
            className="career-container-hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <h6>Are you passionate about design and innovation?</h6>
            <h3>Join Our Creative Team.</h3>
            <p>
              {" "}
              At Blorence, we’re not just a team - We’re a family dedicated to
              turning dreams into reality. We believe in the power of creativity
              and collaboration to make a lasting impact.
            </p>
            <div className="career-container-hero-btn flex gap-5 ">
              <a
                href="https://www.linkedin.com/company/blorencedesign/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="button sm:my-2 my-10">View Openings</button>
              </a>
              <a href="mailto:blorencedesign@gmail.com">
                <button className="button sm:my-2  my-10 text-black ">
                  Send your resume
                </button>
              </a>
            </div>
          </motion.div>
          <motion.div
            className="career-container-hero-img "
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <img src={career} alt=" Career at blorence design" />
          </motion.div>
        </div>

        <div className="how-to-apply">
          <div className="how-to-apply-title">
            <h2>If your are looking for internship </h2>
          </div>
          <div className="how-to-apply-text relative">
            <div className="para">
              Candidates can send their resumes and portfolios to
              <br />
              <a
                href="mailto:career@blorencedesign.com"
                className="hover-link"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                career@blorencedesign.com
              </a>
              {showMessage && (
                <div className="message-box">
                  Of course we read them. You'll expect our replies in three or
                  four business days.
                  <div className="message-tail"></div>
                </div>
              )}
              {showMessage && (
                <div className="message-box-2 ">
                  We don't spam you!
                  <div className="message-tail"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Joinus;
