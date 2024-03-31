import { FaCheckCircle } from "react-icons/fa";
import Button from "../Shared/Button/Button";
import PropTypes from "prop-types";

const PricingCard = ({ planTitle, price, desc, features, Icon }) => {
  return (
    <div className="bg-white border border-[#ddd] px-[35px] pt-[45px] pb-[30px]">
      <div className="w-fit mx-auto">
        <Icon className="text-primary text-6xl md:text-7xl" />
      </div>
      <div className="text-center mb-5">
        <h3 className="mt-[30px] mb-4 text-dark text-xl md:text-[22px] font-medium">
          {planTitle}
        </h3>
        <h2 className="text-primary text-4xl font-bold mb-4">
          {price}{" "}
          <span className="text-ash text-[15px] font-normal">/ Per Visit</span>
        </h2>
        <p className="text-ash text-sm md:text-[15px] leading-6">{desc}</p>
      </div>
      <div>
        {features?.map((feature, idx) => (
          <li
            key={idx}
            className="flex justify-between items-center mb-3 text-ash text-[15px]"
          >
            <span>{feature}</span>
            <FaCheckCircle className="text-primary" />
          </li>
        ))}
      </div>
      <div className="mt-5">
        <Button value="Book Now" fullWidth />
      </div>
    </div>
  );
};

PricingCard.propTypes = {
  Icon: PropTypes.element,
  planTitle: PropTypes.string,
  price: PropTypes.string,
  desc: PropTypes.string,
  features: PropTypes.array,
};

export default PricingCard;
