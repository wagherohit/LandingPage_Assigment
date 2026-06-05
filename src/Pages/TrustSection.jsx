import React from "react";
import { CheckCircle } from "lucide-react";
import './Herosection.css'

const TrustSection = () => {
  const features = [
    "Lorem ipsum dolor sit amet consectetur.",
    "Lorem ipsum dolor sit amet consectetur.",
    "Lorem ipsum dolor sit amet consectetur.",
    "Lorem ipsum dolor sit amet consectetur.",
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-16" id="trust">
          <h2 className="text-5xl font-bold">
            Why our clients trust us
          </h2>

          <p className="mt-5 text-gray-500 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Elementum nisl
            duis tortor sed. Suspendisse lobortis vitae quis vehicula.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Images */}
          <div className="relative h-[500px]" data-aos="fade-right">
            
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
              alt=""
              className="absolute top-0 left-0 w-64 h-64 object-cover rounded-lg shadow-lg"
            />

            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978"
              alt=""
              className="absolute top-10 right-10 w-40 h-48 object-cover rounded-lg shadow-lg"
            />

            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt=""
              className="absolute bottom-0 left-20 w-56 h-44 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div>
            <div className="space-y-8" data-aos="fade-left">
              {features.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle
                    size={24}
                    className="text-green-500 mt-1 flex-shrink-0"
                  />

                  <div >
                    <h4 className="font-semibold text-lg">
                      {item}
                    </h4>

                    <p className="text-gray-500">
                      Elementum nisl duis tortor sed.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-10 bg-[#4154F1] text-white px-8 py-2 rounded-md hover:bg-gray-800">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;