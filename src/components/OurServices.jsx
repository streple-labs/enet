import React from "react";

const services = [
  {
    icon: "/images/house.png",
    title: "Bank Grade Security Infrastructure",
    description:
      "Built like a bank. Your data is guarded with financial-grade encryption and multi-layered defense.",
  },
  {
    icon: "/images/lock.png",
    title: "Managed Security",
    description:
      "We are always on protection for your systems. We detect and stop threats before they cause damage.",
  },
  {
    icon: "/images/scan.png",
    title: "Vulnerability Assessment & Penetration Testing",
    description:
      "Ethical hackers test your system before real ones do, so you stay one step ahead.",
  },
  {
    icon: "/images/certified.png",
    title: "Consultancy And Compliance Support",
    description:
      "Get expert guidance on meeting global compliance standards.",
  },
  {
    icon: "/images/blockchain.png",
    title: "Blockchain Security",
    description:
      "We secure smart contracts, wallets, and protocols, so you can build confidently on-chain.",
  },
  {
    icon: "/images/bulb.png",
    title: "Cybersecurity Awareness And Education",
    description:
      "Empower your team with the knowledge to spot threats, avoid mistakes, and stay cyber-smart.",
  },
];

const OurServices = () => {
  return (
    <section id="solutions" className="bg-white py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Tag */}
        <div className="flex justify-start">
          <span className="text-xs uppercase tracking-wider bg-gray-100 px-4 py-1 rounded-full text-gray-700">
            Our Services
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-6 text-left text-3xl md:text-4xl font-bold text-gray-900">
          What Enet offers to your business
        </h2>
        
        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative w-72 h-84 bg-blue-50 rounded-lg items-center mx-auto justify-center overflow-hidden flex flex-col text-center"
            >
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-white rounded"></div>

              <div className="flex justify-center w-full">
                <img src={service.icon} alt={service.title} className="w-auto h-40 mb-4" />
              </div>
              <h3 className="font-semibold text-gray-900">{service.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
          <div className="  flex ">
            <btn className="px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition">
              View all services →
            </btn>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurServices;
