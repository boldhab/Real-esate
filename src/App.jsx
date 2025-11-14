import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedListings from "./components/FeaturedListings";
import WhyChooseUs from "./components/WhyChooseUs";
import Agents from "./components/Agents";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
     <Navbar/>
      <Hero />
      <FeaturedListings />
      <WhyChooseUs />
      <Agents />
      <Testimonials />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
