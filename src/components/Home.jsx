import Navbar from "./Navbar";
import Hero from "./Hero";
import FeaturedListings from "./FeaturedListings";
import WhyChooseUs from "./WhyChooseUs";
import Agents from "./Agents";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <FeaturedListings />
      <WhyChooseUs />
      <Agents />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
