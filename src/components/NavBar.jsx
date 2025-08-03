const imageName = "logoblack.png";


const Navbar = () => {
  return (
    <nav className=" bg-white/70 backdrop-blur-md fixed w-full   h-20 flex  z-50 shadow-sm">
      <div className="lg:mx-4  lg:px-12 py-4 flex items-center justify-between gap-x-28">
 
        <div className=" mx-6 flex items-center w-40">
            <img src={`/images/${imageName}`} alt="Dynamic Logo" />
        </div>

        {/* Menu Links */}
        <div className="flex-1 flex justify-center">
          <ul className="hidden  gap-6 lg:flex md:flex space-x-12 text-gray-700 font-medium">
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
        </div>

        {/* Buttons & Mobile Icon */}
        <div className="flex items-center space-x-4 flex-shrink-0">
          <div className="hidden md:block">
            <a
              href="#call"
              className="border border-gray-400 rounded-full px-4 py-2 text-sm hover:border-blue-600 hover:text-blue-600 transition"
            >
              Book a Call
            </a>
          </div>

          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600 focus:outline-none">
              ☰
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
