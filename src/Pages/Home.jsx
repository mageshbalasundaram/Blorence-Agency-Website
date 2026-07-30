import { Helmet } from "react-helmet-async";

import Drag from "../Components/drag/Drag";
import Whowe from "../Components/who/Whowe";
import Service from "../Components/service/Service";
import Text from "../Components/text/Text";
import Calltoaction from "../Components/cta/Calltoaction";
import Hero from "../Components/Hero/Hero";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Blorence Design | The Creative Design Powerhouse</title>
        <meta
          name="description"
          content=" Blorence Design is a global branding and design agency, dedicated to creating visually stunning brand identities and enhancing digital presence"
        />
        <meta
          name="keywords"
          content=" Branding and design agency near me, graphic designer near me, website developmet agency near me,branding in chennai, creative design powerhouse, Creative Design Agency, Chennai Social Media Management,Graphic design agency in india,Designing agency,Logo design,Graphic design,Web development,Web development agency,Designing service,Website design service,Graphic design service, Branding service, Chennai Logo Design, guduvancheri design agency, Web Design Chennai"
        />
        <link
          rel="canonical"
          href="https://blorencedesign.com/designing_agency"
        />
        <meta property="og:title" content="Blorence design" />
        <meta
          property="og:description"
          content="Blorence Design is a global branding and design agency, dedicated to creating visually stunning brand identities and enhancing digital presence"
        />
        <meta
          property="og:image"
          content="https://www.blorencedesign.com/blorence_logo.png"
        />
        <meta property="og:url" content="https://www.blorencedesign.com/" />

      </Helmet>

      <Hero />
      <Text />
      <Drag />
      <Service />
      <Whowe />
      <Calltoaction />
    </div>
  );
};

export default Home;
