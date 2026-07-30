import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import "./Navigation.css"; // Importing the CSS for animations
import ContactModal from "../ContactModel";

import blorencelogo from "../../assets/Images/blorence.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);
  const navRef = useRef();

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      closeMenu();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  let lastScrollY = window.scrollY;

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // if scroll down hide the navbar
      setShow(false);
    } else {
      // if scroll up show the navbar
      setShow(true);
    }

    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <nav className={` navbar ${show ? "active" : "hidden"}`}>
      <div className="navbar-container " ref={navRef}>
        <div className="logo">
          <Link to="/">
            <img
              src={blorencelogo}
              alt=" Blorence design logo | The creative design powerhouse"
            />
          </Link>
        </div>

        <div className="menu-btn">
          <div className="cta-btn">
            <ContactModal />
          </div>

          <div className="menu-con" onClick={toggleNav}>
            <button className="toggle-nav">{isOpen ? "Close" : "Menu"}</button>

            <div className={`nav-menu ${isOpen ? "open" : ""}`}>
              <ul className="nav-links" onClick={closeMenu}>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/portfolio">Work</Link>
                </li>
                <li>
                  <Link to="/archive">Archive</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/career">Career</Link>
                </li>
              </ul>
              <hr />
              <div className="social-links" onClick={closeMenu}>
                <a
                  href="https://www.instagram.com/blorence_design/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="instagram"
                >
                  Instagram ↗
                </a>
                <a
                  href="https://www.linkedin.com/company/blorencedesign/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin"
                >
                  LinkedIn ↗
                </a>
                <a
                  href="https://www.behance.net/blorencedesign1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="twitter"
                >
                  Behance ↗
                </a>
              </div>
              <hr />
              <Link className="contact-button-link" to="/contact">
                <button className="contact-button" onClick={closeMenu}>
                  Contact us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
