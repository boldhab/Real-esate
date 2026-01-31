import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { projectsData } from "../data/projectdata";
import ListingModal from "./ListingModal";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const FeaturedListings = () => {
  const [selectedListing, setSelectedListing] = useState(null);

  return (
    <section id="listings" className="py-16 px-8 bg-white relative">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-semibold text-center text-emerald-600 mb-8">
          Featured Listings
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div key={index} variants={item} className="bg-gray-50 rounded-xl shadow hover:shadow-lg p-4">
              <img src={project.image} alt={project.title} className="h-48 w-full object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-gray-500 text-base mb-2">{project.location}</p>
              <p className="text-emerald-600 text-lg font-bold mb-4">{project.price}</p>
              <button
                onClick={() => setSelectedListing(project)}
                className="inline-block bg-emerald-600 text-white px-5 py-3 text-base rounded-lg hover:bg-emerald-700 transition duration-300 w-full"
              >
                View Details
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedListing && (
          <ListingModal 
            project={selectedListing} 
            onClose={() => setSelectedListing(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default FeaturedListings;
