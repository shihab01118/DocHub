import PropTypes from "prop-types";
import pulse from "../../../assets/icons/pulse.svg";
import pulseWhite from "../../../assets/icons/pulse_white.svg";

const SectionTitle = ({ title, subtitle, white }) => {
  return (
    <div className="w-full max-w-[288px] sm:max-w-[338px] md:max-w-[520px] lg:max-w-[475px] xl:max-w-[620px] mx-auto font-poppins z-50 mb-7 md:mb-9 lg:mb-14">
      <h2
        className={`text-[22px] md:text-2xl lg:text-[32px] font-semibold text-dark ${
          white ? "text-white" : ""
        } mb-[10px] md:mb-2 lg:mb-6 text-center lg:leading-[46px]`}
      >
        {title}
      </h2>
      <img
        src={white ? pulseWhite : pulse}
        alt="pulse-icon"
        className="w-12 mx-auto"
      />
      <p
        className={`text-sm md:text-base mt-3 text-ash ${
          white ? "text-[#eee]" : ""
        } text-center`}
      >
        {subtitle}
      </p>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  white: PropTypes.bool,
};

export default SectionTitle;
