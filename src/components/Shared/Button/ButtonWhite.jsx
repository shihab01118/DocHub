import { useState } from "react";
import PropTypes from "prop-types";

const ButtonWhite = ({ value }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 200);
  };
  return (
    <button
      className={`xs:text-sm sm:text-base md:text-xl px-5 py-[6px] md:py-[10px] text-primary relative overflow-hidden group z-10 hover:text-white duration-1000 rounded-md bg-white ${
        isClicked ? "scale-95" : ""
      }`}
      onClick={handleButtonClick}
    >
      <span
        className={`absolute bg-dark w-0 h-14 group-hover:w-[250px] group-hover:h-[250px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-x-100 scale-x-0 -z-10 group-hover:duration-700 duration-500 origin-center transition-all`}
      ></span>
      {value}
    </button>
  );
};

ButtonWhite.propTypes = {
  value: PropTypes.string,
};

export default ButtonWhite;
