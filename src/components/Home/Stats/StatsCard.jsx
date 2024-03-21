import { useState } from "react";
import CountUp from "react-countup";
import PropTypes from "prop-types";

const StatsCard = ({ img, imgHovered, count, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-col md:flex-row gap-3 md:gap-8 lg:gap-4 xl:gap-8 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-[70px] h-[70px] mx-auto md:mx-0 rounded-full border-2 border-white flex items-center justify-center transition-all group-hover:bg-white">
        <img
          src={isHovered ? imgHovered : img}
          alt="icon"
          className="w-8 h-8"
        />
      </div>
      <div className="text-white flex flex-col text-center md:text-left">
        <CountUp
          start={0}
          end={count}
          duration={3}
          separator=","
          className="text-3xl font-bold mb-[6px]"
        />
        <span className="font-medium">{text}</span>
      </div>
    </div>
  );
};

StatsCard.propTypes = {
  img: PropTypes.string,
  imgHovered: PropTypes.string,
  count: PropTypes.number,
  text: PropTypes.string,
};

export default StatsCard;
