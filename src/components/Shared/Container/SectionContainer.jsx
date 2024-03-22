import PropTypes from "prop-types";

const SectionContainer = ({ children, classes }) => {
  return (
    <div
      className={`max-w-6xl mx-auto px-4 lg:px-12 xl:px-0 py-12 md:py-16 lg:py-24 ${classes}`}
    >
      {children}
    </div>
  );
};

SectionContainer.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.string,
};

export default SectionContainer;
