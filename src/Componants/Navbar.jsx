import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h2 className="text-2xl font-bold text-[#012970]" style={{color:'#012970'}}>
          Design.
        </h2>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li><a href="#" className="hover:text-black">Home</a></li>
          <li><a href="#" className="hover:text-black">About</a></li>
          <li><a href="#" className="hover:text-black">Service</a></li>
          <li><a href="#" className="hover:text-black">Blog</a></li>
          <li><a href="#" className="hover:text-black">Contact</a></li>
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block bg-[#4154F1] text-white px-6 py-2 rounded">
          Get Started
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-4">
          <ul className="flex flex-col gap-4 text-gray-700">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>

          <button className="mt-4 w-full bg-[#4154F1] text-white py-2 rounded">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;