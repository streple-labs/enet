import React, { useState } from "react";
const imageName = "logoblack.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/70 backdrop-blur-md fixed w-full h-20 flex z-50 shadow-sm">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/">
            <img
              src={`/images/${imageName}`}
              alt="Dynamic Logo"
              className="w-28 sm:w-32 md:w-36 lg:w-40"
            />
          </a>
        </div>

        {/* Menu Links (Desktop) */}
        <ul className="hidden md:flex space-x-6 lg:space-x-12 text-gray-700 font-medium">
          <li>
            <a href="#solutions" className="hover:text-blue-600">
              Solutions
            </a>
          </li>
          <li>
            <a href="#products" className="hover:text-blue-600">
              Products
            </a>
          </li>
          <li>
            <a href="#blog" className="hover:text-blue-600">
              Blog
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-600">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
          </li>
        </ul>

        {/* Buttons */}
        <div className="hidden md:block">
          <a
            href="#call"
            className="border border-gray-400 rounded-full px-4 py-2 text-sm hover:border-blue-600 hover:text-blue-600 transition"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            className="text-gray-700 hover:text-blue-600 focus:outline-none text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white/95 backdrop-blur-md shadow-md md:hidden">
          <ul className="flex flex-col space-y-4 py-4 text-center text-gray-700 font-medium">
            <li>
              <a href="#solutions" className="hover:text-blue-600">
                Solutions
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-blue-600">
                Products
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-blue-600">
                Blog
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-600">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-600">
                Contact
              </a>
            </li>
            <li>
              <a
                href="#call"
                className="border border-gray-400 rounded-full px-4 py-2 text-sm hover:border-blue-600 hover:text-blue-600 transition inline-block"
              >
                Book a Call
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
