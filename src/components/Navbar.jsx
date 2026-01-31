import { Link as ScrollLink } from "react-scroll";
import { FaHome, FaBuilding, FaUserTie, FaInfoCircle, FaEnvelope } from "react-icons/fa";

const Navbar = () => (
  <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-xl border-b border-emerald-100 shadow-sm">
    <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
      <div className="text-emerald-600 font-extrabold text-2xl flex items-center space-x-2 tracking-tight">
        <FaHome className="text-3xl" />
        <span>RealEstate</span>
      </div>

      <div className="hidden md:flex items-center space-x-6 text-[15px] font-medium text-gray-700">
        <ScrollLink to="hero" smooth={true} duration={500} className="cursor-pointer hover:text-emerald-600 transition-colors">Home</ScrollLink>
        <ScrollLink to="listings" smooth={true} duration={500} className="cursor-pointer hover:text-emerald-600 transition-colors">Properties</ScrollLink>
        <ScrollLink to="features" smooth={true} duration={500} className="cursor-pointer hover:text-emerald-600 transition-colors">Why Us</ScrollLink>
        <ScrollLink to="agents" smooth={true} duration={500} className="cursor-pointer hover:text-emerald-600 transition-colors">Agents</ScrollLink>
        <ScrollLink to="testimonials" smooth={true} duration={500} className="cursor-pointer hover:text-emerald-600 transition-colors">Testimonials</ScrollLink>
      </div>

      <ScrollLink
        to="contact"
        smooth={true}
        duration={500}
        className="cursor-pointer text-sm md:text-base font-semibold px-4 py-2 rounded-full bg-emerald-600 text-white shadow-md hover:bg-emerald-700 transition-colors"
      >
        Contact
      </ScrollLink>
    </div>
  </nav>
);

export default Navbar;
