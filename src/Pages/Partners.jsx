const Partners = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6" id="trust">

        <h2 className="text-4xl font-bold text-center mb-12">
          Our Partners
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center mt-5">
          <div className="text-3xl font-semibold text-gray-500">
            <img src="https://expo-react-project.vercel.app/logo/brand1.png.webp" alt="" />
          </div>

          <div className="text-3xl font-semibold text-gray-500">
            <img src="https://expo-react-project.vercel.app/logo/brand2.png.webp" alt="" />
          </div>

          <div className="text-3xl font-semibold text-gray-500">
            <img src="https://expo-react-project.vercel.app/logo/brand5.png.webp" alt="" />
          </div>

          <div className="text-3xl font-semibold text-gray-500">
            <img src="https://expo-react-project.vercel.app/logo/brand6.png.webp" alt="" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Partners;