import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Drawer from "react-modern-drawer";

// import icons
import { FiMail, FiMenu, FiPhone, FiX } from "react-icons/fi";

// components
import Logo from "../Logo/Logo";

// import styles
import "./Navbar.css";
import "react-modern-drawer/dist/index.css";
import Avatar from "../../Avatar/Avatar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  // todo: User will be confirmed from db
  const user = true;

  // navlinks
  const navLinksTop = (
    <>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/doctors">Doctors</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/faq">FAQ</Link>
      </li>
    </>
  );

  const navLinksBottom = (
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

  // conditions on scrolling navbar
  window.addEventListener("scroll", () => {
    const navTop = document.getElementById("navbar-top");
    const navBottom = document.getElementById("navbar-bottom");
    const divider = document.getElementById("divider");

    if (window.scrollY > 165) {
      navTop.classList.add("hidden");
      divider.classList.add("hidden");
      navBottom.classList.add(
        "fixed",
        "top-0",
        "w-full",
        "drop-shadow-md",
        "transition"
      );
    } else {
      navTop.classList.remove("hidden");
      divider.classList.remove("hidden");
      navBottom.classList.remove(
        "fixed",
        "top-0",
        "drop-shadow-md",
        "transition"
      );
    }
  });

  return (
    <nav className="w-full z-10">
      {/* top part of navbar */}
      <div
        id="navbar-top"
        className="flex flex-col justify-center gap-3 md:flex-row md:justify-between items-center py-3 max-w-7xl mx-auto px-2 lg:px-0"
      >
        <div className="font-poppins text-title  text-sm sm:text-base">
          <ul className="flex gap-5">{navLinksTop}</ul>
        </div>
        <div className="flex gap-4 sm:gap-7 text-sm sm:text-base">
          <div className="flex gap-2 items-center">
            <FiPhone className="text-primary" />
            <span className="font-poppins text-title">
              <a href="tel:+880 1234 56789">+880 1234 56789</a>
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <FiMail className="text-primary" />
            <span className="font-poppins text-title">
              <a href="mailto:support@dochub.com">support@dochub.com</a>
            </span>
          </div>
        </div>
      </div>

      {/* navbar divider */}
      <hr id="divider" className="border-primary border-opacity-30" />

      {/* bottom part of navbar */}
      <div id="navbar-bottom" className="py-3 bg-white px-2 lg:px-0">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* logo */}
          <Logo />

          {/* navlinks for large screen */}
          <div className="hidden lg:block">
            <ul className="flex gap-7 font-medium text-title">
              {navLinksBottom}
            </ul>
          </div>

          {/* large screen login button */}
          <div className="hidden lg:block">
            {user ? (
              <Avatar />
            ) : (
              <Link to="/login">
                <button className="rounded-md border-2 border-primary px-8 py-2 text-xl text-primary duration-500 transition hover:bg-primary hover:text-white">
                  Login
                </button>
              </Link>
            )}
          </div>

          {/* drawer for small and medium screens */}
          <div className="flex ml-auto text-title lg:hidden">
            {user ? (
              <Avatar />
            ) : (
              <Link to="/login">
                <button className="rounded-lg border-2 border-primary px-4 py-1 text-xl text-primary transition duration-500 hover:bg-primary hover:text-white">
                  Login
                </button>
              </Link>
            )}
            <button onClick={toggleDrawer} className="ml-3">
              <FiMenu className="text-3xl sm:text-4xl" />
            </button>
            <Drawer open={isOpen} onClose={toggleDrawer} direction="left">
              <div className="bg-white h-full">
                <div className="w-fit mx-auto pt-5">
                  <Logo />
                </div>
                <hr
                  id="divider"
                  className="border-primary border-opacity-30 mt-6 mb-5"
                />
                <ul className="flex flex-col gap-4 items-center font-medium text-title">
                  {navLinksBottom}
                  <button onClick={toggleDrawer} className="text-error">
                    <FiX size={24} />
                  </button>
                </ul>
              </div>
            </Drawer>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
