import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
import img5 from "../assets/img/img5.jpg";
import img6 from "../assets/img/img6.jpg";

// ✅ Rename the array to avoid confusion
const testimonialData = [
  {
    image: img1,
    name: "Kelechi Ndu ",
    feedback: "Afribite gave me the best jollof rice I’ve ever had. It felt like home.",
  },
  {
    image: img2,
    name: "Amaka Obi",
    feedback: "Fresh meals and amazing service. Definitely coming back for more!",
  },
  {
    image: img3,
    name: "Fatima Yusuf",
    feedback: "A mix of culture and flavor. Afribite is truly top-tier, i prefer meals from here.      ",
  },
  {
    image: img4,
    name: "Philbeth Ibire",
    feedback: "Every bite was magic. The delivery was swift, and the customer care was top notch.   ",
  },
  {
    image: img5,
    name: "Ngozi Umeh",
    feedback: "Afribite is now my go-to. Their yam porridge and Banga Soup is divine!     ",
  },
  {
    image: img6,
    name: "David Bassey",
    feedback: "Tasty food, great portions, fast delivery. Highly recommend!",
  },
];

const Testimonials = () => {
  return (
    <div className="py-12 bg-white dark:bg-[#1C1A27] px-4 lg:px-20">
      <h2 className="text-center text-3xl font-bold text-[#E27258] mb-10">
        What Our Customers Say
      </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
      >
        {testimonialData.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="border-2 border-[#f9d7d0]  dark:bg-[#2C2A38] rounded-xl shadow-lg p-6 text-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 object-cover rounded-full mx-auto mb-4"
              />
              <p className="text-gray-600 dark:text-gray-300 italic mb-2">
                "{testimonial.feedback}"
              </p>
              <h4 className="text-lg font-semibold text-[#E27258]">{testimonial.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
