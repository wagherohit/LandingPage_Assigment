import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet consectetur. Blandit mattis mattis lobortis orci.",
    name: "Jacqueline Wright",
    role: "Customer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet consectetur. Blandit mattis mattis lobortis orci.",
    name: "Jacqueline Wright",
    role: "Customer",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet consectetur. Blandit mattis mattis lobortis orci.",
    name: "John Smith",
    role: "Customer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6" id="trust">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Happy Clients
        </h2>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={2}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white p-6 rounded-lg shadow mt-5">
                <p className="text-gray-600 mb-6">{item.text}</p>

                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />

                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm text-gray-500">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}