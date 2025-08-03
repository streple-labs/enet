import React from "react";
const imageName = "lock.png";
const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-100 via-blue-100 to-yellow-100 min-h-screen justify-center flex">
      <div className="max-w-7xl mx-auto flex mt-20  flex-col lg:flex-row items-center justify-between space-x-0 lg:space-x-16">
        
        {/* Left Content */}
        <div className="max-w-xl mx-40">
          <h1 className="text-4xl md:text-5xl font-bold text-left text-gray-900 leading-tight">
            Innovate Securely.<br />Grow Confidently
          </h1>
          <p className="mt-6 text-lg text-left text-gray-600">
            Empower your business and accelerate your growth with confidence. Be
            a part of businesses that rely on Enet Technologies to deliver
            comprehensive cybersecurity, cloud, and digital solutions.
          </p>


          <div className="my-12 flex space-x-4">
            <btn className="px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition">
              Book a free consultation →
            </btn>
          </div>
        </div>

        {/* Right Image */}
        <div className="mt-10 lg:mt-0">
          <img src={`/images/${imageName}`} 
            alt="Secure Lock"
            className="w-auto lg:w-auto drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
