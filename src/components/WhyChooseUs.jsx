import { FaShieldAlt, FaUserTie, FaDollarSign, FaMapMarkedAlt } from "react-icons/fa";

const WhyChooseUs = () => (
  <section id="features" className="py-16 bg-gray-50 px-8">
    <h2 className="text-4xl font-semibold text-center text-emerald-600 mb-10">Why Choose Us</h2>
    <div className="grid md:grid-cols-4 gap-8 text-center">
      <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg">
        <FaShieldAlt className="text-4xl text-emerald-600 mx-auto mb-3"/>
        <h3 className="text-lg font-semibold mb-1">Verified Listings</h3>
        <p className="text-gray-500 text-base">All properties are verified for accuracy.</p>
      </div>
      <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg">
        <FaUserTie className="text-4xl text-emerald-600 mx-auto mb-3"/>
        <h3 className="text-lg font-semibold mb-1">Expert Agents</h3>
        <p className="text-gray-500 text-base">Work with experienced professionals.</p>
      </div>
      <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg">
        <FaDollarSign className="text-4xl text-emerald-600 mx-auto mb-3"/>
        <h3 className="text-lg font-semibold mb-1">Best Prices</h3>
        <p className="text-gray-500 text-base">Competitive pricing across all listings.</p>
      </div>
      <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg">
        <FaMapMarkedAlt className="text-4xl text-emerald-600 mx-auto mb-3"/>
        <h3 className="text-lg font-semibold mb-1">Prime Locations</h3>
        <p className="text-gray-500 text-base">Find homes in your favorite neighborhoods.</p>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;



