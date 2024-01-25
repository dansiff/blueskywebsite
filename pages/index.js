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
      <SectionTitle
        pretitle="Locations"
              title=" BlueSky serves patients in 12 states: ">
              Arizona, Colorado, Connecticut,Kentucky,
              Illinois, Maryland, Massachusetts,  Minnesota, New Mexico, North Carolina, Ohio, Oregon, Texas, and Washington.
      </SectionTitle>
      
          <Benefits imgPos="left" data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
          
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said"
             >
      </SectionTitle>
          <Reviews />
          <OverviewBlock  
              pretitle="BLUESKY SERVICE AREAS"
              title="BlueSky has an extensive network of licensed providers throughout the US.

Available in 12 states:

​

Arizona - Colorado - Connecticut - Kentucky - Illinois - Maryland - Massachusetts - Minnesota - New Mexico - North Carolina - Ohio - Oregon - Texas - Washington"
              backgroundImage="/img/Femaledoctor.jpg"
              
              />
         
      <SectionTitle pretitle="Contact" title="Contact">
              phone: "(888) 279-0002",
              email: "hello@blueskytelepsych.com"
       
      </SectionTitle>
      <Faq />
          <Cta />
      <LearnMore />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;