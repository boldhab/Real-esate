import { motion } from "framer-motion";
import { useEffect } from "react";

const ListingModal = ({ project, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Modal Content */}
      <motion.div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row overflow-hidden"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        {/* Close Button Mobile */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full md:hidden text-gray-800 hover:bg-white"
        >
          ✕
        </button>

        {/* Image Section */}
        <div className="w-full md:w-1/2 h-64 md:h-auto relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />
          <div className="absolute bottom-4 left-4 text-white md:hidden">
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <p className="opacity-90">{project.location}</p>
          </div>
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 p-8 flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <div className="hidden md:block">
              <h2 className="text-4xl font-bold text-gray-800">{project.title}</h2>
              <p className="text-gray-500 mt-1">{project.location}</p>
            </div>
            <button
              onClick={onClose}
              className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
            >
              ✕
            </button>
          </div>

          <div className="mb-6">
            <h3 className="text-3xl font-bold text-emerald-600 mb-2">{project.price}</h3>
          </div>

          <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar">
            <h4 className="text-lg font-semibold text-gray-700 mb-2">Description</h4>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              {project.description ||
                "Experience luxury living in this stunning property. Featuring modern amenities, spacious interiors, and a prime location, this home is perfect for those seeking comfort and style."}
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-base font-bold py-3.5 rounded-xl transition duration-300 shadow-lg shadow-emerald-200">
              Contact Agent
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ListingModal;
