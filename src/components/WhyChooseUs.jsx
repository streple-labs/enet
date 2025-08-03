import React from "react";
const image1= "maleuser.png";
const image2 = "socCert.png"
const WhyChooseUs = () => {
  return (
    <section className="bg-white py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Small Tag */}
        <span className="text-xs uppercase tracking-wider bg-gray-100 px-4 py-1 rounded-full text-gray-700">
          Why Choose Us
        </span>

        {/* Heading */}
        <h2 className="mt-6 text-3xl md:text-4xl font-bold text-gray-900">
          Everything Your Business Needs To Stay <br/>Secure And Grow Confidently
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Whether you’re building your MVP or scaling to Series A, Enet
          Technologies offers your startup enterprise-level security without the
          enterprise-level price.
        </p>
      </div>

      {/* Features Grid */}
      <div className="mt-12 flex flex-col">
        {/* Card 1 */}
        <div className="lg:flex gap-6 p-6">
          <div
            className="flex-2 bg-gray-900 text-white rounded-xl overflow-hidden flex flex-col justify-end bg-cover h-80 bg-center mb-4"
            style={{ backgroundImage: `url('/images/${image1}')` }}
          >
            <div className="bg-black/50 p-6 rounded-b-xl">
              <h3 className="font-semibold text-lg">
                Focus on growth not cyber threats
              </h3>
              <p className="text-sm mt-2">
                Your startup gets round-the-clock protection with real-time
                responses, so you can focus on scaling and growing.
              </p>
            </div>
          </div>
          <div className="flex-1 bg-blue-100 rounded-xl p-6 flex flex-col ">
            <h3 className=" mt-auto font-semibold text-gray-900">
              Deploy from anywhere and scale smoothly.
            </h3>
            <p className="text-sm mt-2 text-gray-700">
              Our cloud hosting is built for startups: fast, flexible, and
              guarded like Fort Knox.
            </p>
          </div>
        </div>

        {/* Card 2 - smaller */}
        <div className="lg:flex gap-6 p-6">
          <div className="  h-80 flex-1 mb-4 bg-blue-100 rounded-xl p-6 flex flex-col ">
            <h3 className="mt-auto font-semibold text-gray-900">
              Find your blind spots before attackers do
            </h3>
            <p className="text-sm mt-2 text-gray-700">
              With in-depth vulnerability scans and pen testing, you’ll spot and
              fix risks before they become real problems.
            </p>
          </div>
          <div
            className="flex-2 bg-gray-900 text-white rounded-xl overflow-hidden flex flex-col justify-end bg-cover bg-center h-80"
            style={{ backgroundImage: `url('/images/${image2}')` }}
          >
            <div className="bg-black/50 p-6 rounded-b-xl">
              <div className="p-4 ">
                <h3 className="font-semibold">
                  Win trust and pass audits with ease
                </h3>
                <p className="text-sm mt-1">
                  From ISO to SOC 2, we help you hit the standards investors and
                  partners expect — without hiring a full compliance team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="justify-center flex ">
            <btn className="px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition">
              Book a free consultation →
            </btn>
          </div>
    </section>
  );
};

export default WhyChooseUs;
