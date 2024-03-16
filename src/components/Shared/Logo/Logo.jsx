import { Link } from "react-router-dom";
import logo from "/logo.svg";

const Logo = () => {
  return (
    <Link to="/">
      <div className="flex items-center gap-2 lg:gap-3">
        <img src={logo} alt="logo-img" className="xs:w-8 sm:w-10 lg:w-12" />
        <h2 className="xs:text-2xl sm:text-3xl lg:text-4xl font-semibold text-title">
          <span className="text-primary">Doc</span>Hub
        </h2>
      </div>
    </Link>
  );
};

export default Logo;
