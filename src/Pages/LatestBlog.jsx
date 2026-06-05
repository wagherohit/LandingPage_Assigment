const blogs = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
    title: "Humans are much more smarter than AI",
    desc: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978",
    title: "Humans are much more smarter than AI",
    desc: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    title: "Humans are much more smarter than AI",
    desc: "Lorem ipsum dolor sit amet consectetur.",
  },
];

const LatestBlog = () => {
  return (
    <section className="py-20  bg-gray-50">
      <div className="max-w-6xl mx-auto px-6" id="trust">

        <h2 className="text-4xl font-bold text-center mb-12">
          Latest blog
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-5" >

          {blogs.map((blog) => (
            <div  key={blog.id}>

              {/* Placeholder Image */}
              <div className="relative h-52 overflow-hidden rounded-lg border border-gray-300">
  <img
    src={blog.image}
    alt={blog.title}
    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
  />
</div>

              <h3 className="mt-4 text-xl text-[#4154F1] font-semibold">
                {blog.title}
              </h3>

              <p className="mt-3 text-gray-500">
                {blog.desc}
              </p>

              <button className="mt-4 text-black font-medium hover:underline">
                Learn more
              </button>

            </div>
          ))}

        </div>

        <div className="text-center mt-5">
            <button className="mt-8 bg-[#4154F1] text-white px-8 py-2 rounded hover:bg-gray-800 transition">
            Get Started
          </button>
        </div>

      </div>
    </section>
  );
};

export default LatestBlog;