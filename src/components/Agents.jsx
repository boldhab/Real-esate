
import { agentdata } from "../data/projectdata";
const Agents = () => (
  <section id="agents" className="py-16 px-8 bg-white">
    <h2 className="text-3xl font-semibold text-center text-emerald-600 mb-8">Meet Our Agents</h2>
    <div className="grid md:grid-cols-3 gap-8 text-center">
      {agentdata.map((agent) => (
        <div key={agent} >
            
            
          <div className="">
            <img src={agent.image} className="h-24 w-24 mx-auto rounded-full mb-4" />
          </div>
          <h3 className="font-semibold">{agent.name}</h3>
          <p className="text-gray-500 text-sm mb-3">Real Estate Specialist</p>
          <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700">
            View Profile
          </button>
        </div>
      ))}
    </div>
  </section>
);

export default Agents;
