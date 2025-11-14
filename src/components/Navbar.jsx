import { Link as ScrollLink } from "react-scroll";
import { FaHome, FaBuilding, FaUserTie, FaInfoCircle, FaEnvelope } from "react-icons/fa";

const Navbar = () => (
  <nav className="fixed w-full bg-white shadow-md z-50 flex justify-between items-center p-4">
    <div className="text-emerald-600 font-bold text-xl flex items-center space-x-2">
      <FaHome className="text-2xl" />
      <span>RealEstate</span>
    </div>

    <div className="flex space-x-6">
      <ScrollLink to="hero" smooth={true} duration={500} className="cursor-pointer hover:text-emerald-600">Home</ScrollLink>
      <ScrollLink to="listings" smooth={true} duration={500} className="cursor-pointer hover:text-emerald-600">Properties</ScrollLink>
      <ScrollLink to="features" smooth={true} duration={500} className="cursor-pointer hover:text-emerald-600">Why Us</ScrollLink>
      <ScrollLink to="agents" smooth={true} duration={500} className="cursor-pointer hover:text-emerald-600">Agents</ScrollLink>
      <ScrollLink to="testimonials" smooth={true} duration={500} className="cursor-pointer hover:text-emerald-600">Testimonials</ScrollLink>
      <ScrollLink to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-emerald-600">Contact</ScrollLink>
    </div>
  </nav>
);

export default Navbar;
