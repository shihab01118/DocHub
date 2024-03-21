import { useState } from "react";
import PropTypes from "prop-types";

const HelpCard = ({ title, subtitle, img, imgHovered }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="px-8 py-2 group"
    >
      <div className="w-24 h-24 rounded-full border border-[#dddddd] flex justify-center items-center mx-auto  group-hover:bg-primary transition-all">
        <img src={hovered ? imgHovered : img} alt="icon" className="w-12 h-12" />
      </div>
      <h3 className="text-dark text-center text-2xl font-bold mt-8 mb-5">
        {title}
      </h3>
      <p className="text-[#757575] text-center">
        {subtitle}
      </p>
    </div>
  );
};

HelpCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  img: PropTypes.string,
  imgHovered: PropTypes.string,
};

export default HelpCard;
