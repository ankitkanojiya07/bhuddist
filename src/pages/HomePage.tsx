import Hero from "../components/Hero";
import QuickStats from "../components/QuickStats";
import Destinations from "../components/Destinations";
import FeaturedTours from "../components/FeaturedTours";
import WhyChooseUs from "../components/WhyChooseUs";
import AboutBuddhism from "../components/AboutBuddhism";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import Contact from "../components/Contact";

const HomePage = () => {
  return (
    <>
      <Hero />
      <QuickStats />
      <Destinations />
      <FeaturedTours />
      <WhyChooseUs />
      <AboutBuddhism />
      <Testimonials />
      <CallToAction />
      <Contact />
    </>
  );
};

export default HomePage;
