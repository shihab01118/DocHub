import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ServiceCard = ({ img, address, title, description }) => {
  return (
    <div className="flex gap-4 lg:my-7">
      <img src={img} alt="" className="w-[45px] h-[50px]" />
      <div>
        <Link to={address}>
          <h3 className="text-dark hover:text-primary transition duration-300 text-2xl font-semibold">
            {title}
          </h3>
        </Link>
        <p className="text-[#757575] mt-5 text-justify">{description}</p>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  img: PropTypes.string,
  address: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default ServiceCard;
