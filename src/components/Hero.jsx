
import backgroundImg from "../assets/header_img.png";

const Hero = () => (
  
  <section  style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
         id="hero" className="h-screen bg-gray-50 flex flex-col justify-center items-center text-center px-6">
    <h1 className="text-5xl font-bold text-emerald-600 mb-4">Find Your Dream Home</h1>
    <p className="text-emerald-600 mb-8">Search properties across top cities and discover your perfect place.</p>
    <div className="flex justify-center gap-2">
      <input type="text" placeholder="Enter location..." className=" text-emerald-600 w-72 p-3 rounded-l-lg border focus:outline-none"/>
      <button className="bg-emerald-600 text-white px-6 rounded-r-lg hover:bg-emerald-700">Search</button>
    </div>
  </section>
);

export default Hero;
