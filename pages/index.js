import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import LearnMore from "../components/LearnMore"
import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import OverviewBlock from "../components/OverviewBlock";
import Reviews from "../components/Reviews";
import FeatureSection from "../components/FeatureSection";
import LogoSection from '../components/LogoSection';
import HighLight from '../components/HighLight';
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

Available in 12 states:

​

Arizona - Colorado - Connecticut - Kentucky - Illinois - Maryland - Massachusetts - Minnesota - New Mexico - North Carolina - Ohio - Oregon - Texas - Washington"
              backgroundImage="/img/Femaledoctor.jpg"
              
              />
         <LogoSection />
     
      <Faq />
          <Cta />
     
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;