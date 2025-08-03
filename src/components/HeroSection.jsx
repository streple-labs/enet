import React from "react";
const imageName = "lock.png";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r w-full from-blue-100 via-blue-100 to-yellow-100 min-h-screen flex justify-center">
      <div className="max-w-7xl w-full mx-auto flex mt-20 flex-col lg:flex-row items-center justify-between px-6 sm:px-8 lg:px-16">
        
        {/* Left Content */}
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Innovate Securely.<br />Grow Confidently
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Empower your business and accelerate your growth with confidence. Be
            a part of businesses that rely on Enet Technologies to deliver
            comprehensive cybersecurity, cloud, and digital solutions.
          </p>

          <div className="my-12 flex justify-center lg:justify-start">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition">
              Book a free consultation →
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="mt-10 lg:mt-0 flex justify-center lg:justify-end">
          <img
            src={`/images/${imageName}`} 
            alt="Secure Lock"
            className="max-w-full h-auto drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
