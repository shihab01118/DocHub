import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// components
import NavbarTop from "./NavbarTop";
import NavbarBottom from "./NavbarBottom";

// import styles
import "./Navbar.css";
import "react-modern-drawer/dist/index.css";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 160) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  return (
    <>
      <nav id="nav" className="w-full z-10">
        {/* top part of navbar */}
        <NavbarTop />

        {/* navbar divider */}
        <hr id="divider" className="border-primary border-opacity-30" />

        {/* bottom part of navbar */}
        <NavbarBottom />
      </nav>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          id="scrolled-nav"
          className="drop-shadow-md fixed w-full top-0 z-50"
        >
          <NavbarBottom />
        </motion.nav>
      )}
    </>
  );
};

export default Navbar;
