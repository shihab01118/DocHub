import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Drawer from "react-modern-drawer";
import Logo from "../Logo/Logo";
import Avatar from "../../Avatar/Avatar";
import { FiMenu, FiX } from "react-icons/fi";
import Button from "../Button/Button";

const NavbarBottom = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  // todo: User will be confirmed from db
  const user = false;

  // navlinks
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
  return (
    <div className="py-3 bg-white px-4 lg:px-12 xl:px-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* logo */}
        <Logo />

        {/* navlinks for large screen */}
        <div className="hidden lg:block">
          <ul className="flex gap-7 font-medium text-dark">{navLinksBottom}</ul>
        </div>

        {/* large screen login button */}
        <div className="hidden lg:block">
          {user ? (
            <Avatar />
          ) : (
            <Link to="/login">
              <Button value="Login" />
            </Link>
          )}
        </div>

        {/* drawer for small and medium screens */}
        <div className="flex ml-auto text-dark lg:hidden">
          {user ? (
            <Avatar />
          ) : (
            <Link to="/login">
              <Button value="login" />
            </Link>
          )}
          <button onClick={toggleDrawer} className="ml-3">
            <FiMenu className="text-3xl sm:text-4xl text-primary" />
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
              <ul className="flex flex-col gap-4 items-center font-medium text-dark">
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
  );
};

export default NavbarBottom;
