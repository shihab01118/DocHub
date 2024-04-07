import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import Button from "../Shared/Button/Button";

const DoctorCard = ({ image, name, title, address }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="bg-white drop-shadow-lg rounded-md"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative">
        <img src={image} alt="doctor" className="rounded-t-md" />
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-white opacity-60 transition duration-500 rounded-t-md"></div>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 100 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Link to={address}>
                <Button value="Appointment" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </div>
      <div className="px-5 py-6 text-center">
        <p className="text-ash text-sm leading-6 mb-1">{title}</p>
        <Link to={`/doctors/${name}`}>
          <h3 className="text-lg text-dark font-medium hover:text-primary transition duration-300">
            {name}
          </h3>
        </Link>
      </div>
    </div>
  );
};

DoctorCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  address: PropTypes.string,
};

export default DoctorCard;
