import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-12 h-12 flex items-center justify-center">
            <h2 className="text-xl fw-bold" style={{color:'#012970'}}>
  Design.
</h2>
          </div>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-10 text-gray-700 font-medium">
          <li>
            <a href="#" className="hover:text-black text-decoration-none">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black text-decoration-none">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black text-decoration-none">
              Service
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black text-decoration-none">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black text-decoration-none">
              Contact
            </a>
          </li>
        </ul>

        {/* Button */}
        <button className="bg-[#4154F1] text-white px-8 py-2 rounded hover:bg-gray-800 transition">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;