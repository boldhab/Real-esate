import { motion } from "framer-motion";
import { testimonialsData } from "../data/projectdata"; // adjust path if needed

const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const Testimonials = () => (
  <motion.section
    id="testimonials"
    className="py-16 px-8 bg-gray-50"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    variants={{ show: { transition: { staggerChildren: 0.2 } } }}
  >
    <h2 className="text-4xl font-semibold text-center text-emerald-600 mb-8">
      What Our Clients Say
    </h2>
    <div className="grid md:grid-cols-3 gap-8">
      {testimonialsData.map((testimonial, index) => (
        <motion.div key={index} variants={item} className="bg-white shadow p-6 rounded-xl">
          <div className="flex items-center mb-4">
            <img src={testimonial.image} alt={testimonial.alt} className="w-12 h-12 rounded-full mr-4 object-cover" />
            <div>
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-gray-500 text-base">{testimonial.title}</p>
            </div>
          </div>
          <p className="italic text-gray-600 text-base mb-2">"{testimonial.text}"</p>
          <p className="text-emerald-600 text-base font-bold">Rating: {testimonial.rating}⭐</p>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default Testimonials;
