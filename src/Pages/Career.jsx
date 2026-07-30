import Joinus from "../Components/joinus/Joinus";

import { Helmet } from "react-helmet-async";

const Career = () => {
  return (
    <div>
      <Helmet>
        <title>Career | Blorence Design - The Creative Design Powerhouse</title>
        <meta
          name="description"
          content="If you are passionate about design, we invite you to email us your portfolio. Your unique perspective and skills will be valued here!"
        />
        <meta
          name="keywords"
          content="hiring, design career, designer career ,creative design inspiration design portfolio, graphic design portfolio, what is portfolio, poster design, graphic design job, graphic design intership chenna,web design jobe chennai,web development job india,designing job chennai,web development hiring ,graphic designer hiring, design job guduvanchery,logo design job,hiring designers,Branding and design agency near me, graphic designer near me, website developmet agency near me,branding in chennai, creative design powerhouse, Creative Design Agency, Chennai Social Media Management, Chennai Logo Design, guduvancheri design agency, Web Design Chennai"
        />
        <link rel="canonical" href="http://blorencedesign.com/career-joinus" />
        <meta property="og:title" content="Career" />
        <meta
          property="og:description"
          content="If you are passionate about design, we invite you to email us your portfolio. Your unique perspective and skills will be valued here!"
        />
        <meta
          property="og:image"
          content="https://www.blorencedesign.com/assets/Career.png"
        />
        <meta
          property="og:url"
          content="https://www.blorencedesign.com/career"
        />
      </Helmet>
      <Joinus />
    </div>
  );
};

export default Career;
