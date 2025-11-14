import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    
    <footer className="bg-gray-900 text-gray-300 py-10 px-8 mt-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        
        <div>
          <h3 className="text-emerald-600 text-xl font-bold mb-4">RealEstate</h3>
          <p className="text-gray-400 text-sm">
            Your trusted partner in finding dream homes. We provide verified listings and expert agents to make your journey easy.
          </p>
        </div>

      
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#hero" className="hover:text-emerald-500">Home</a></li>
            <li><a href="#listings" className="hover:text-emerald-500">Properties</a></li>
            <li><a href="#features" className="hover:text-emerald-500">Why Us</a></li>
            <li><a href="#agents" className="hover:text-emerald-500">Agents</a></li>
            <li><a href="#contact" className="hover:text-emerald-500">Contact</a></li>
          </ul>
        </div>

       
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <p className="text-sm mb-2">📍 123 Main Street, Los Angeles, CA</p>
          <p className="text-sm mb-2">📞 +1 234 567 890</p>
          <p className="text-sm mb-2">📧 info@realestate.com</p>
        </div>

      
        <div>
          <h4 className="font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-emerald-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-emerald-500"><FaTwitter /></a>
            <a href="#" className="hover:text-emerald-500"><FaInstagram /></a>
            <a href="#" className="hover:text-emerald-500"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center border-t border-gray-700 pt-4 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} RealEstate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
