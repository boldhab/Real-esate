import { motion } from "framer-motion";
import { projectsData } from "../data/projectdata"; // adjust path as needed

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const FeaturedListings = () => (
  <motion.section
    id="listings"
    className="py-16 px-8 bg-white"
    variants={container}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
  >
    <h2 className="text-3xl font-semibold text-center text-emerald-600 mb-8">
      Featured Listings
    </h2>
    <div className="grid md:grid-cols-3 gap-8">
      {projectsData.map((project, index) => (
        <motion.div key={index} variants={item} className="bg-gray-50 rounded-xl shadow hover:shadow-lg p-4">
          <img src={project.image} alt={project.title} className="h-48 w-full object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="text-gray-500 text-sm mb-2">{project.location}</p>
          <p className="text-emerald-600 font-bold mb-4">{project.price}</p>
          <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700">
            View Details
          </button>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default FeaturedListings;
