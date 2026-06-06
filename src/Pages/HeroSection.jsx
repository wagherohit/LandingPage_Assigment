import React from "react";
import "./Herosection.css";

const HeroSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div className="hero" data-aos="fade-right">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#457cdc] leading-tight">
            Great design is <br /> invisible
          </h1>

          <p className="mt-4 md:mt-6 text-gray-500 text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur.
          </p>

          <button className="mt-6 md:mt-8 bg-[#4154F1] text-white px-6 md:px-8 py-2 rounded hover:bg-gray-800 transition">
            Get Started
          </button>
        </div>

        {/* Right Image */}
        <div
          className="w-full h-[250px] sm:h-[350px] md:h-[450px] bg-gray-200 relative overflow-hidden rounded-lg"
          data-aos="fade-left"
        >
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978"
            alt="Business Team"
            className="w-full h-full object-cover"
            id="vert-move"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;