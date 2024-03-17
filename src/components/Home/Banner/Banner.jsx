import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";

const Banner = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  // slides
  const slide1 = (
    <div
      key={1}
      className="min-w-full h-80 sm:h-96 md:h-[540px] bg-carousel1 bg-center bg-cover bg-no-repeat"
    >
      <div className="max-w-6xl mx-auto h-full flex items-center">
        <div className="max-w-xl md:max-w-2xl px-2 lg:px-0">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-bold text-dark capitalize"
          >
            We Provide <span className="text-primary">medical</span> services
            that you can <span className="text-primary">trust!</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.4, ease: "easeOut" }}
            className="font-poppins my-4 md:my-7 leading-7 text-dark text-sm sm:text-base"
          >
            Experience Trusted Excellence in Medical Care: Comprehensive
            Services Delivered <br className="hidden md:block" /> with
            Compassion and Expertise.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.7, ease: "easeOut" }}
          >
            <button className="md:text-xl px-5 py-3 bg-primary text-white relative overflow-hidden group z-10 hover:text-white duration-1000 rounded-md">
              <span className="absolute bg-dark w-[250px] h-[250px] -left-8 -top-[92px] rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
              Get Appointment
            </button>
            <button className="md:text-xl px-5 py-3 bg-dark text-white relative overflow-hidden group z-10 hover:text-white duration-1000  rounded-md ml-3">
              <span className="absolute bg-primary size-44 -left-5 -top-[60px] rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );

  const slide2 = (
    <div
      key={2}
      className="min-w-full h-80 sm:h-96 md:h-[540px] bg-carousel2 bg-center bg-cover bg-no-repeat"
    >
      <div className="max-w-6xl mx-auto h-full flex items-center">
        <div className="max-w-xl md:max-w-2xl px-2 lg:px-0">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-bold text-dark capitalize"
          >
            We Provide <span className="text-primary">medical</span> services
            that you can <span className="text-primary">trust!</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.4, ease: "easeOut" }}
            className="font-poppins my-4 md:my-7 leading-7 text-dark text-sm sm:text-base"
          >
            Experience Trusted Excellence in Medical Care: Comprehensive
            Services Delivered <br className="hidden md:block" /> with
            Compassion and Expertise.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.7, ease: "easeOut" }}
          >
            <button className="md:text-xl px-5 py-3 bg-primary text-white relative overflow-hidden group z-10 hover:text-white duration-1000 rounded-md">
              <span className="absolute bg-dark w-[250px] h-[250px] -left-8 -top-[92px] rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
              Get Appointment
            </button>
            <button className="md:text-xl px-5 py-3 bg-dark text-white relative overflow-hidden group z-10 hover:text-white duration-1000  rounded-md ml-3">
              <span className="absolute bg-primary size-44 -left-5 -top-[60px] rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );

  const slide3 = (
    <div
      key={3}
      className="min-w-full h-80 sm:h-96 md:h-[540px] bg-carousel3 bg-center bg-cover bg-no-repeat"
    >
      <div className="max-w-6xl mx-auto h-full flex items-center">
        <div className="max-w-xl md:max-w-2xl px-2 lg:px-0">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-bold text-dark capitalize"
          >
            We Provide <span className="text-primary">medical</span> services
            that you can <span className="text-primary">trust!</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.4, ease: "easeOut" }}
            className="font-poppins my-4 md:my-7 leading-7 text-dark text-sm sm:text-base"
          >
            Experience Trusted Excellence in Medical Care: Comprehensive
            Services Delivered <br className="hidden md:block" /> with
            Compassion and Expertise.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.7, ease: "easeOut" }}
          >
            <button className="md:text-xl px-5 py-3 bg-primary text-white relative overflow-hidden group z-10 hover:text-white duration-1000 rounded-md">
              <span className="absolute bg-dark w-[250px] h-[250px] -left-8 -top-[92px] rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
              Get Appointment
            </button>
            <button className="md:text-xl px-5 py-3 bg-dark text-white relative overflow-hidden group z-10 hover:text-white duration-1000  rounded-md ml-3">
              <span className="absolute bg-primary size-44 -left-5 -top-[60px] rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );

  const slides = [slide1, slide2, slide3];

  // slide changing button functions
  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? slides.length - 1 : currentSlider - 1
    );
  const nextSlider = useCallback(
    () =>
      setCurrentSlider((currentSlider) =>
        currentSlider === slides.length - 1 ? 0 : currentSlider + 1
      ),
    [slides.length]
  );

  // slide autoplay handler
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [nextSlider]);

  return (
    <div className="w-full h-80 sm:h-96 md:h-[540px] relative overflow-hidden">
      {/* arrow left */}
      <button
        onClick={prevSlider}
        className="absolute top-1/2 left-3 z-20 flex justify-center items-center bg-primary rounded-full w-6 h-6 md:w-8 md:h-8"
      >
        <svg
          className="w-4 h-4 md:w-6 md:h-6 icon"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <g strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill="#FFFFFF"
              d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
            ></path>
          </g>
        </svg>
      </button>
      {/* arrow right */}
      <button
        onClick={nextSlider}
        className="absolute top-1/2 z-20 right-3  flex justify-center items-center bg-primary rounded-full w-6 h-6 md:w-8 md:h-8"
      >
        <svg
          className="w-4 h-4 md:w-6 md:h-6 icon"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          transform="rotate(180)"
        >
          <g strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill="#FFFFFF"
              d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
            ></path>
          </g>
        </svg>
      </button>

      {/* Carousel container */}
      <div
        className="ease-linear duration-500 flex transform-gpu"
        style={{ transform: `translateX(-${currentSlider * 100}%)` }}
      >
        {/* sliders */}
        {slides.map((slide, inx) => (
          <div key={inx} className="min-w-full">
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
