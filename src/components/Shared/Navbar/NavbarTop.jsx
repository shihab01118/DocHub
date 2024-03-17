import { FiMail, FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";

const NavbarTop = () => {
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

  return (
    <div
      className="flex flex-col justify-center gap-3 md:flex-row md:justify-between items-center py-3 max-w-6xl mx-auto px-2 lg:px-0"
    >
      <div className="font-poppins text-dark  text-sm sm:text-base">
        <ul className="flex gap-5">{navLinksTop}</ul>
      </div>
      <div className="flex gap-4 sm:gap-7 text-sm sm:text-base">
        <div className="flex gap-2 items-center">
          <FiPhone className="text-primary" />
          <span className="font-poppins text-dark">
            <a href="tel:+880 1234 56789">+880 1234 56789</a>
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <FiMail className="text-primary" />
          <span className="font-poppins text-dark">
            <a href="mailto:support@dochub.com">support@dochub.com</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
