import React from "react";
import ContactForm from "../Components/Form";

import { Helmet } from "react-helmet-async";

const ContactUs = () => {
  return (
    <div>
      <Helmet>
        <title>
          Contact Us | Blorence Design - The Creative Design Powerhouse
        </title>
        <meta
          name="description"
          content="Looking to team up with a friendly and talented crew? Don't hesitate to reach out to Blorence design"
        />
        <meta
          name="keywords"
          content="contact form, ,creative design inspiration design portfolio, graphic design portfolio, what is portfolio, poster design, Branding and design agency near me, graphic designer near me, website developmet agency near me,branding in chennai, creative design powerhouse, Creative Design Agency, Chennai Social Media Management, Chennai Logo Design, guduvancheri design agency, Web Design Chennai"
        />
        <link rel="canonical" href="http://blorencedesign.com/contact-us" />
        <meta property="og:title" content="Contact Us" />
        <meta
          property="og:description"
          content="Looking to team up with a friendly and talented crew? Don't hesitate to reach out to Blorence design"
        />
        <meta
          property="og:image"
          content="https://www.blorencedesign.com/assets/form-img.svg"
        />
        <meta
          property="og:url"
          content="https://www.blorencedesign.com/contact"
        />
      </Helmet>
      <ContactForm />
    </div>
  );
};

export default ContactUs;
