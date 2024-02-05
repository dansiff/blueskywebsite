import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Carousel from "../components/Carousel";
import { benefitTwo } from "../components/data";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import PopupWidget from "../components/popupWidget";
import OverviewBlock from "../components/OverviewBlock";
import Reviews from "../components/Reviews";
import FeatureSection from "../components/FeatureSection";
import LogoSection from '../components/LogoSection';
import HighLight from '../components/HighLight';
import Payinfo from '../components/Payinfo';
import ServiceSection from '../components/ServiceSection';
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

              title="BlueSky has an extensive network of licensed providers throughout the Globe."
              subtitle="Insurance available in 12 states:"
              listItems={['Arizona', 'Colorado', 'Connecticut', 'Kentucky', 'Illinois', 'Maryland', 'Massachusetts', 'Minnesota', 'New Mexico', 'North Carolina', 'Ohio', 'Oregon', 'Texas', 'Washington']}
             
              contactInfo="1-888-279-0002"
              backgroundImage="/img/Femaledoctor.jpg"
              
          />
          
         
              <Payinfo />
         <LogoSection />
     
    
          
     
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;