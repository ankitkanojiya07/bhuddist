import Hero from "../components/Hero";
import IndiaTourPackages from "../components/QuickStats";
import Destinations from "../components/Destinations";
import FeaturedTours from "../components/FeaturedTours";
import WhyChooseUs from "../components/WhyChooseUs";
import WhoWeAre from "../components/AboutBuddhism";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import Contact from "../components/Contact";

const HomePage = () => {
  return (
    <>
      <Hero />
      <IndiaTourPackages />
      <Destinations />
      <WhoWeAre />
      <FeaturedTours />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
      <Contact />
    </>
  );
};

export default HomePage;
