import { Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../Shared/Title/SectionTitle";
import PortfolioCard from "./PortfolioCard";

// styles
import "swiper/css";
import "swiper/css/autoplay";

const Portfoilio = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24">
      <SectionTitle
        title="We Maintain Cleanliness Rules Inside Our Hospital"
        subtitle="Ensuring a hygienic environment within our hospital, prioritizing your health and safety."
      />
      <div className="px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          autoplay={{ delay: 4000 }}
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
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {profiles?.map((profile) => (
            <SwiperSlide key={profile.id}>
              <PortfolioCard img={profile.img} address={profile.address} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Portfoilio;

const profiles = [
  {
    id: 1,
    img: "https://i.ibb.co/MDgc0vS/pf1.webp",
    address: "",
  },
  {
    id: 2,
    img: "https://i.ibb.co/MsgMr7v/pf2.webp",
    address: "",
  },
  {
    id: 3,
    img: "https://i.ibb.co/jMCW7ky/pf3.webp",
    address: "",
  },
  {
    id: 4,
    img: "https://i.ibb.co/XSC0L9F/pf4.webp",
    address: "",
  },
  {
    id: 5,
    img: "https://i.ibb.co/MDgc0vS/pf1.webp",
    address: "",
  },
  {
    id: 6,
    img: "https://i.ibb.co/jMCW7ky/pf3.webp",
    address: "",
  },
];
