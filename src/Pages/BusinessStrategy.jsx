import React from "react";

const BusinessStrategy = () => {
  const stats = [
    {
      title: "Clients",
      value: "12K",
    },
    {
      title: "Annual growth",
      value: "55%",
    },
    {
      title: "No of projects",
      value: "5k",
    },
    {
      title: "Positive ratings",
      value: "80%",
    },
  ];

  return (
    <section className="py-20 px-6  bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center" id="trust">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Our business strategy has helped many
            <br />
            businesses across the globe
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-500">
            Lorem ipsum dolor sit amet consectetur. Elementum nisl
            duis tortor sed. Suspendisse lobortis vitae quis
            vehicula pellentesque sit id.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-14 text-center" id="s" data-aos="slide-down">
          {stats.map((item, index) => (
            <div
              key={index}
              className="border-r last:border-r-0 border-gray-300"
            >
              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-2 text-2xl font-bold text-gray-700">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* Large Image */}
        <div className="mt-16">
          <div className="relative w-full h-[450px] bg-gray-200 border border-gray-300 overflow-hidden">

            <img
  src="https://images.unsplash.com/photo-1552664730-d307ca884978"
  alt="Business Team"
  className="w-full h-[450px] object-cover rounded-lg"
/>

          </div>
        </div>

      </div>
    </section>
  );
};

export default BusinessStrategy;