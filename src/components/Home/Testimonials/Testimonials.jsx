import { Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../Shared/Title/SectionTitle";

// styles
import "swiper/css";
import "swiper/css/autoplay";

const Testimonials = () => {
  return (
    <section className="bg-paralax2 bg-center bg-cover bg-no-repeat bg-fixed py-16 lg:py-24 relative">
      {/* overlay */}
      <div className="bg-primary absolute inset-0 opacity-75 z-0"></div>

      {/* content */}
      <div className="relative max-w-6xl mx-auto px-4 lg:px-12 xl:px-0">
        <SectionTitle
          title="What Our Patients Say About Our Medical Treatments"
          white
        />
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            680: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 35,
            },
          }}
        >
          {testimonials?.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white rounded-md p-5">
                <p className="text-ash leading-6 mb-5 text-[15px]">
                  {testimonial.review}
                </p>
                <div className="flex">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-[53px] h-[53px] rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-medium text-dark">
                      {testimonial.name}
                    </h3>
                    <p className="text-ash text-sm">{testimonial.date}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

const testimonials = [
  {
    id: 1,
    name: "Emma Stone",
    img: "https://img.freepik.com/free-photo/portrait-smiling-blonde-woman_23-2148316635.jpg",
    date: "20-03-2024",
    review:
      "Life-changing treatment! Highly recommend their expertise and compassionate care. The staff is amazing!",
  },
  {
    id: 2,
    name: "John Doe",
    img: "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg",
    date: "12-01-2024",
    review:
      "Exceptional care! Grateful for their dedication and compassionate approach to treatment. Great experience!",
  },
  {
    id: 3,
    name: "Jane Foster",
    img: "https://img.freepik.com/free-photo/front-view-serious-woman_23-2148369453.jpg",
    date: "16-09-2023",
    review:
      "Professional staff, outstanding results. Improved my health significantly. Highly recommend this facility.",
  },
  {
    id: 4,
    name: "Kate Winslet",
    img: "https://img.freepik.com/free-photo/fashionable-young-woman-standing-front-blue-backdrop_23-2148204718.jpg",
    date: "29-04-2023",
    review:
      "Top-notch facility! Trustworthy doctors, excellent service. Improved my health significantly. Highly recommended!",
  },
  {
    id: 5,
    name: "Robert Downey Jr.",
    img: "https://img.freepik.com/free-photo/portrait-smiley-businessman_23-2148746289.jpg",
    date: "22-02-2023",
    review:
      "Outstanding experience! Improved my health and quality of life significantly. Highly recommend this place!",
  },
];
