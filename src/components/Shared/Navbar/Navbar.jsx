import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import Drawer from "react-modern-drawer";

// import icons
import { FiMenu, FiX } from "react-icons/fi";

// import styles
import "./Navbar.css";
import "react-modern-drawer/dist/index.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  // navlinks
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/appointment">Appointment</NavLink>
      </li>
      <li>
        <NavLink to="/reviews">Reviews</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <nav className="py-5 bg-gray-light px-2 lg:px-0">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* logo */}
        <Link to="/">
          <div className="flex items-center gap-2 lg:gap-3">
            <img src={logo} alt="logo-img" className="xs:w-8 sm:w-10 lg:w-12" />
            <h2 className="xs:text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary">
              DocHub
            </h2>
          </div>
        </Link>

        {/* navlinks for larger screen */}
        <div className="hidden lg:block">
          <ul className="flex gap-7 font-medium text-primary">{navLinks}</ul>
        </div>

        {/* large screen login button */}
        <div className="hidden lg:block">
          <Link to="/login">
            <button className="rounded-lg border-2 border-secondary px-8 py-2 text-xl text-secondary duration-200 hover:bg-secondary hover:text-white">
              Login
            </button>
          </Link>
        </div>

        {/* drawer for small and medium screens */}
        <div className="flex gap-3 ml-auto text-primary lg:hidden">
          <Link to="/login">
            <button className="rounded-lg border-2 border-secondary px-4 py-1 text-xl text-secondary duration-200 hover:bg-secondary hover:text-white">
              Login
            </button>
          </Link>
          <button onClick={toggleDrawer}>
            <FiMenu size={24} />
          </button>
          <Drawer open={isOpen} onClose={toggleDrawer} direction="top">
            <div className="bg-gray-light h-full">
              <ul className="flex flex-col gap-4 py-3 items-center font-medium text-primary">
                {navLinks}
                <button onClick={() => setIsOpen(false)} className="text-error">
                  <FiX size={24} />
                </button>
              </ul>
            </div>
          </Drawer>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
