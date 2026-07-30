import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Career from "./Pages/Career";
import Navigation from "./Components/navigation/Navigation";
import Footer from "./Components/footer/Footer";
import Portfolio from "./Pages/Portfolio";
import ContactUs from "./Pages/ContactUs";
import DynamicImages from "./Components/unbaising/Archived";
import ScrollButton from "./Components/scrollButton/ScrollButton";
import Dk from "./Components/Work/Dk";
import Ds from "./Components/Work/Ds";
import Kaelyn from "./Components/Work/Kaelyn";
import Thessa from "./Components/Work/Thessa";
import Monkeybun from "./Components/Work/Monkeybun";
import TermsAndConditions from "./Components/TermsAndConditions";
import PrivacyPolicy from "./Components/PrivacyPolicy";

import NotFound from "./Components/NotFound";
import LoadingAnimation from "./Components/loading/LoadingAnimation";
import ScrollToTop from "./Components/ScrollToTop";

const App = () => {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <motion.div className="progress-bar" style={{ scaleX }} />
        <LoadingAnimation />
        <Navigation />

        <Routes>
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/archive" element={<DynamicImages />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/dkacservice" element={<Dk />} />
          <Route path="/dswhipping" element={<Ds />} />
          <Route path="/kaelyncare" element={<Kaelyn />} />
          <Route path="/theeshadresses" element={<Thessa />} />
          <Route path="/monkeybun" element={<Monkeybun />} />
          <Route path="/T&C" element={<TermsAndConditions />} />
          <Route path="/privacy&policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <ScrollButton />
      </BrowserRouter>
    </div>
  );
};

export default App;
