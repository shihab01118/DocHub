import { GiCheckMark } from "react-icons/gi";
import { FaRegCircle } from "react-icons/fa";

import SectionContainer from "../Shared/Container/SectionContainer";

const VisionArea = () => {
  return (
    <SectionContainer>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-5 xl:gap-7">
        {contents?.map((content) => (
          <div
            key={content?.id}
            className="py-6 px-5 shadow-md bg-white group transform hover:-translate-y-2 transition duration-500 rounded-md relative"
          >
            {/* overlay */}
            <span className="absolute inset-0 w-full bg-primary transition-transform transform origin-left scale-x-0 group-hover:scale-x-100 rounded-md duration-500"></span>

            {/* content */}
            <div className="relative">
              <div className="w-[60px] h-[60px] rounded-full bg-primary group-hover:bg-white flex justify-center items-center mb-5">
                <GiCheckMark className="text-2xl text-white group-hover:text-primary transition duration-500" />
              </div>
              <h4 className="text-dark group-hover:text-white text-2xl font-bold transition duration-500">
                {content?.title}
              </h4>
              <p className="mt-3 text-ash group-hover:text-white text-sm leading-6 transition duration-500">
                {content?.desc}
              </p>
            </div>

            {/* icon */}
            <div className="absolute -left-8 -bottom-10 scale-0 transition-transform transform origin-left group-hover:scale-100 duration-500">
              <FaRegCircle className="text-white/30" size={100} />
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default VisionArea;

const contents = [
  {
    id: 1,
    title: "Our Mission",
    desc: "Driven by compassion and excellence, our mission is to provide exceptional healthcare services, ensuring the holistic well-being of our patients.",
  },
  {
    id: 2,
    title: "Our Planning",
    desc: "With meticulous planning and foresight, we strategize to deliver seamless and comprehensive health care solutions to meet diverse needs.",
  },
  {
    id: 3,
    title: "Our Vision",
    desc: "We envision a future where healthcare is innovative, accessible, powerful, and fosters optimal well-being for all individuals and communities.",
  },
];
