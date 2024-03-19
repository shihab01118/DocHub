import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaArrowRightLong } from "react-icons/fa6";

const DisplayCard = ({ address, title, subtitle, content, Icon }) => {
  return (
    <div className="lg:max-w-[360px] w-full text-white p-6 bg-primary rounded-md relative transform hover:-translate-y-2 transition duration-500">
      <h3 className="mb-3">{subtitle}</h3>
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="mb-4">{content}</div>
      <Link to={address}>
        <button className="flex items-center font-medium relative overflow-hidden group">
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white/60 transition-transform transform origin-left scale-x-0 group-hover:scale-x-100 duration-500"></span>
          Learn More <FaArrowRightLong className="ml-2 text-lg" />
        </button>
      </Link>
      <div className="absolute -right-4 top-[68%]">
        <Icon className="scale-x-[-1] text-white/30" size={120} />
      </div>
    </div>
  );
};

DisplayCard.propTypes = {
  address: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  content: PropTypes.node,
  Icon: PropTypes.string,
};

export default DisplayCard;
