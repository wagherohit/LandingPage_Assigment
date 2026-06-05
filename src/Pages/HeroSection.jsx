import React from "react";
import './Herosection.css'

const HeroSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="hero"  data-aos="fade-right">
          <h1 className="text-5xl font-bold  text-[#457cdc]">
            Great design is <br /> invisible
          </h1>

          <p className="mt-6 text-gray-500 text-lg">
            Lorem ipsum dolor sit amet constretetur
          </p>

          <button className="mt-8 bg-[#4154F1] text-white px-8 py-2 rounded hover:bg-gray-800 transition">
            Get Started
          </button>
        </div>

        {/* Right Image Placeholder */}
        <div className="w-full h-[450px] bg-gray-200 relative overflow-hidden" data-aos="fade-left">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full border border-gray-400"></div>

            <div className="absolute top-0 left-0 w-full h-full">
               <img
  src="https://images.unsplash.com/photo-1552664730-d307ca884978"
  alt="Business Team"
  className="w-full h-[450px] object-cover rounded-lg" id="vert-move"
/>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;