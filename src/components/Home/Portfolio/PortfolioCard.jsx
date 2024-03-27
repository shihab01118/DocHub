import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import ButtonWhite from "../../Shared/Button/ButtonWhite";

const PortfolioCard = ({ img, address }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={img} alt="Image" className="w-full" />
      {hovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-primary opacity-75 transition duration-500"></div>
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Link to={address}>
              <ButtonWhite value="View Details" />
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

PortfolioCard.propTypes = {
  img: PropTypes.string,
  address: PropTypes.string,
};

export default PortfolioCard;
