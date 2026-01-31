import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-900 text-gray-300 pt-14 pb-8 px-8 mt-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <h3 className="text-emerald-500 text-2xl font-extrabold mb-3">RealEstate</h3>
          <p className="text-gray-400 text-base leading-relaxed">
            Your trusted partner in finding dream homes. We provide verified listings and expert agents to make your journey easy.
          </p>
          <div className="mt-6">
            <p className="text-sm text-gray-400 mb-3">Get market updates and new listings.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full sm:w-auto flex-1 rounded-full bg-gray-800/70 border border-gray-700 px-4 py-2 text-sm text-gray-200 placeholder:text-gray-500 focus:outline-none focus:border-emerald-500"
              />
              <button className="rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-base">
            <li><a href="#hero" className="hover:text-emerald-500 transition-colors">Home</a></li>
            <li><a href="#listings" className="hover:text-emerald-500 transition-colors">Properties</a></li>
            <li><a href="#features" className="hover:text-emerald-500 transition-colors">Why Us</a></li>
            <li><a href="#agents" className="hover:text-emerald-500 transition-colors">Agents</a></li>
            <li><a href="#contact" className="hover:text-emerald-500 transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-4">Contact</h4>
          <p className="text-base mb-2">📍 123 Main Street, Addis Abeba</p>
          <p className="text-base mb-2">📞 +1 234 567 890</p>
          <p className="text-base mb-2">📧 info@realestate.com</p>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
          <div className="flex items-center space-x-3">
            <a href="#" className="h-10 w-10 rounded-full bg-gray-800/70 border border-gray-700 flex items-center justify-center hover:text-emerald-500 hover:border-emerald-500 transition-colors"><FaFacebookF /></a>
            <a href="#" className="h-10 w-10 rounded-full bg-gray-800/70 border border-gray-700 flex items-center justify-center hover:text-emerald-500 hover:border-emerald-500 transition-colors"><FaTwitter /></a>
            <a href="#" className="h-10 w-10 rounded-full bg-gray-800/70 border border-gray-700 flex items-center justify-center hover:text-emerald-500 hover:border-emerald-500 transition-colors"><FaInstagram /></a>
            <a href="#" className="h-10 w-10 rounded-full bg-gray-800/70 border border-gray-700 flex items-center justify-center hover:text-emerald-500 hover:border-emerald-500 transition-colors"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center border-t border-gray-800 pt-5 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} RealEstate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
