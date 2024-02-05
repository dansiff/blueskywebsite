import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Carousel from "../components/Carousel";
import { benefitTwo } from "../components/data";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import OverviewBlock from "../components/OverviewBlock";
import Reviews from "../components/Reviews";
import FeatureSection from "../components/FeatureSection";
import LogoSection from '../components/LogoSection';
import HighLight from '../components/HighLight';
import Payinfo from '../components/Payinfo';

// Some Next.js page or component
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

// Use these variables in your code

// Use these variables in your code

const Home = () => { 
  return (
    <>
      <Head>
        <title> Blue Sky Welcome</title>
        <meta
          name="BlueSky"
          content="BlueSky Telepsych"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <FeatureSection />
      <HighLight />
          <Reviews />
          
          <Benefits imgPos="right" data={benefitTwo} />
          
          <OverviewBlock  
              pretitle="BLUESKY SERVICE AREAS"
              title="BlueSky has an extensive network of licensed providers throughout the Globe.

Insurance available in 12 states:

​

Arizona - Colorado - Connecticut - Kentucky - Illinois - Maryland - Massachusetts - Minnesota - New Mexico - North Carolina - Ohio - Oregon - Texas - Washington"
              backgroundImage="/img/Femaledoctor.jpg"
              
          />
          <ServiceArea />
              <Payinfo />
         <LogoSection />
     
     <Carousel />
          
     
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;