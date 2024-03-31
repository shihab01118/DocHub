import { useState } from "react";
import ReactPlayer from "react-player";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { FiX } from "react-icons/fi";

import SectionContainer from "../../Shared/Container/SectionContainer";
import SectionTitle from "../../Shared/Title/SectionTitle";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SectionContainer>
      <SectionTitle
        title="We Offer Different Services To Improve Your Health"
        subtitle="Diverse Healthcare Solutions Tailored to Enhance Your Well-being"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative">
        <div>
          <h3 className="text-dark text-2xl font-semibold pb-5 mb-6 relative">
            Who We Are
            <span className="bg-primary h-[2px] w-12 absolute left-0 bottom-0"></span>
          </h3>
          <p className="text-ash leading-6 mb-8">
            We are a dedicated healthcare provider committed to offering
            comprehensive medical services aimed at fostering seamless optimal
            health and well-being for all our patients.
          </p>
          <p className="text-ash leading-6 mb-8">
            We strive to deliver personalized care and innovative solutions to
            meet diverse healthcare needs.
          </p>
          <div className="grid md:grid-cols-2 gap-7 text-ash text-sm">
            <div className="space-y-3">
              <p className="flex items-center">
                <IoMdArrowDroprightCircle className="text-xl text-primary mr-3" />
                <span>Dedicated healthcare provider.</span>
              </p>
              <p className="flex items-center">
                <IoMdArrowDroprightCircle className="text-xl text-primary mr-3" />
                <span>Compassionate professionals.</span>
              </p>
              <p className="flex items-center">
                <IoMdArrowDroprightCircle className="text-xl text-primary mr-3" />
                <span>Comprehensive medical services.</span>
              </p>
            </div>
            <div className="space-y-3">
              <p className="flex items-center">
                <IoMdArrowDroprightCircle className="text-xl text-primary mr-3" />
                <span>Personalized patient care.</span>
              </p>
              <p className="flex items-center">
                <IoMdArrowDroprightCircle className="text-xl text-primary mr-3" />
                <span>Innovative healthcare solutions.</span>
              </p>
              <p className="flex items-center">
                <IoMdArrowDroprightCircle className="text-xl text-primary mr-3" />
                <span>Commitment to well-being.</span>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-thumbnail bg-center bg-no-repeat bg-cover h-[280px] md:h-[350px] lg:h-full flex items-center justify-center">
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center justify-center z-20"
          >
            <IoMdArrowDroprightCircle className="text-primary text-7xl" />
          </button>
          <span className="w-[72px] h-[72px] rounded-full bg-white absolute z-0 animate-ping"></span>
        </div>
        {isOpen && (
          <div
            className="absolute bottom-0 left-1/2 lg:top-1/2 transform -translate-x-1/2 lg:-translate-y-1/2 z-40 w-full h-[280px]  md:h-[350px] lg:w-[800px] lg:h-[450px]"
            onBlur={() => setIsOpen(false)}
          >
            <ReactPlayer
              url="https://www.youtube.com/watch?v=g-jj4KrmYPI"
              width="100%"
              height="100%"
              controls
              playing
            />
            <button
              className="absolute top-[2px] right-[2px] text-error w-7 h-7 bg-lightAsh rounded-full flex items-center justify-center lg:hidden"
              onClick={() => setIsOpen(false)}
            >
              <FiX />
            </button>
            <button
              className="absolute top-[10px] right-0 text-error rounded-full lg:flex items-center justify-center hidden text-3xl"
              onClick={() => setIsOpen(false)}
            >
              <FiX />
            </button>
          </div>
        )}
      </div>
    </SectionContainer>
  );
};

export default About;
