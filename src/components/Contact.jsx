const Contact = () => (
  <section id="contact" className="py-16 px-8 bg-white">
    <div className="max-w-3xl mx-auto text-center mb-8">
      <h2 className="text-3xl font-semibold text-emerald-600 mb-4">Get In Touch</h2>
      <p className="text-gray-600">Have questions or want to schedule a viewing? Fill out the form below.</p>
    </div>

    <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-xl shadow-md">
      <form className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <input type="text" placeholder="Your Name" className="flex-1 border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600" required/>
          <input type="email" placeholder="Your Email" className="flex-1 border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600" required/>
        </div>
        <input type="text" placeholder="Subject" className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"/>
        <textarea placeholder="Your Message" rows="5" className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"></textarea>
        <button type="submit" className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition">
          Send Message
        </button>
      </form>
    </div>
  </section>
);

export default Contact;
