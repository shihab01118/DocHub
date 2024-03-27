import PropTypes from "prop-types";
import { FaAngleRight } from "react-icons/fa6";

const Banner = ({ heading, pageTitle }) => {
  return (
    <section className="bg-reliableHands bg-center bg-cover bg-no-repeat py-[60px] lg:py-[100px] relative">
      <div className="bg-primary absolute inset-0 opacity-75"></div>
      <div className="text-white relative">
        <h3 className="text-3xl font-semibold lg:text-4xl lg:font-bold leading-9 lg:leading-[44px] text-center">
          {heading}
        </h3>
        <p className="leading-6 font-medium flex items-center space-x-3 w-fit mx-auto mt-2">
          <span>Home</span>{" "}
          <span>
            <FaAngleRight />
          </span>{" "}
          <span>{pageTitle}</span>
        </p>
      </div>
    </section>
  );
};

Banner.propTypes = {
  heading: PropTypes.string,
  pageTitle: PropTypes.string,
};

export default Banner;
