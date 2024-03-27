import { Link } from "react-router-dom";

import { FaTelegramPlane } from "react-icons/fa";
import {
  FaFacebookF,
  FaTwitter,
  FaVimeoV,
  FaPinterestP,
} from "react-icons/fa6";
import { IoMdArrowDropright } from "react-icons/io";
import { IoLogoGoogle } from "react-icons/io5";

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#01A0A4] py-12 md:py-16 lg:py-[100px]">
        <div className="max-w-6xl mx-auto px-4 lg:px-12 xl:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-4">
          <div className="lg:pr-4">
            <h3 className="text-white text-xl font-semibold pb-5 mb-10 relative">
              About Us
              <span className="bg-white h-1 w-12 absolute left-0 bottom-0"></span>
            </h3>
            <p className="text-[#eee]">
              Discover our story, mission, and commitment to providing
              exceptional healthcare services to our community.
            </p>
            <div className="mt-6 flex gap-[10px]">
              <Link className="border border-white hover:bg-white w-8 h-8 rounded-full flex justify-center items-center group transition-all duration-300">
                <FaFacebookF className="text-white group-hover:text-primary" />
              </Link>
              <Link className="border border-white hover:bg-white w-8 h-8 rounded-full flex justify-center items-center group transition-all duration-300">
                <IoLogoGoogle className="text-white group-hover:text-primary" />
              </Link>
              <Link className="border border-white hover:bg-white w-8 h-8 rounded-full flex justify-center items-center group transition-all duration-300">
                <FaTwitter className="text-white group-hover:text-primary" />
              </Link>
              <Link className="border border-white hover:bg-white w-8 h-8 rounded-full flex justify-center items-center group transition-all duration-300">
                <FaVimeoV className="text-white group-hover:text-primary" />
              </Link>
              <Link className="border border-white hover:bg-white w-8 h-8 rounded-full flex justify-center items-center group transition-all duration-300">
                <FaPinterestP className="text-white group-hover:text-primary" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-white text-xl font-semibold pb-5 mb-10 relative">
              Quick Links
              <span className="bg-white h-1 w-12 absolute left-0 bottom-0"></span>
            </h3>
            <div className="grid grid-cols-2 text-[#eee]">
              <div className="space-y-3">
                <Link
                  to="/"
                  className="flex items-center gap-1 transform hover:translate-x-2 transition duration-300"
                >
                  <IoMdArrowDropright size={24} /> <span>Home</span>
                </Link>
                <Link
                  to="/"
                  className="flex items-center gap-1 transform hover:translate-x-2 transition duration-300"
                >
                  <IoMdArrowDropright size={24} /> <span>About Us</span>
                </Link>
                <Link
                  to="/"
                  className="flex items-center gap-1 transform hover:translate-x-2 transition duration-300"
                >
                  <IoMdArrowDropright size={24} /> <span>Services</span>
                </Link>
                <Link
                  to="/"
                  className="flex items-center gap-1 transform hover:translate-x-2 transition duration-300"
                >
                  <IoMdArrowDropright size={24} /> <span>Appointment</span>
                </Link>
                <Link
                  to="/"
                  className="flex items-center gap-1 transform hover:translate-x-2 transition duration-300"
                >
                  <IoMdArrowDropright size={24} /> <span>Doctors</span>
                </Link>
              </div>
              <div className="space-y-3">
                <Link
                  to="/"
                  className="flex items-center gap-1 transform hover:translate-x-2 transition duration-300"
                >
                  <IoMdArrowDropright size={24} /> <span>Blogs</span>
                </Link>
                <Link
                  to="/"
                  className="flex items-center gap-1 transform hover:translate-x-2 transition duration-300"
                >
                  <IoMdArrowDropright size={24} /> <span>Pricing</span>
                </Link>
                <Link
                  to="/"
                  className="flex items-center gap-1 transform hover:translate-x-2 transition duration-300"
                >
                  <IoMdArrowDropright size={24} /> <span>Testimonials</span>
                </Link>
                <Link
                  to="/"
                  className="flex items-center gap-1 transform hover:translate-x-2 transition duration-300"
                >
                  <IoMdArrowDropright size={24} /> <span>FAQ</span>
                </Link>
                <Link
                  to="/"
                  className="flex items-center gap-1 transform hover:translate-x-2 transition duration-300"
                >
                  <IoMdArrowDropright size={24} /> <span>Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-white text-xl font-semibold pb-5 mb-10 relative">
              Open Hours
              <span className="bg-white h-1 w-12 absolute left-0 bottom-0"></span>
            </h3>
            <p className="text-[#eee]">
              Explore our convenient operating hours designed to accommodate
              your schedule to healthcare.
            </p>
            <div className="mt-6 text-[#eee]">
              <div className="flex justify-between">
                <p>Monday - Friday</p>
                <p>8.00-20.00</p>
              </div>
              <div className="flex justify-between">
                <p>Saturday</p>
                <p>9.00-18.30</p>
              </div>
              <div className="flex justify-between">
                <p>Monday - Thusday</p>
                <p>9.00-15.00</p>
              </div>
            </div>
          </div>
          <div className="lg:pl-4">
            <h3 className="text-white text-xl font-semibold pb-5 mb-10 relative">
              Newsletter
              <span className="bg-white h-1 w-12 absolute left-0 bottom-0"></span>
            </h3>
            <p className="text-[#eee]">
              Stay informed with our newsletter, health tips, and special offers
              into our latest medical advancements and services.
            </p>
            <div className="mt-6 relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-md h-[42px] bg-white bg-opacity-0 border border-white px-4 placeholder-white text-white focus:outline-none"
              />
              <button className="px-4 h-[42px] flex justify-center items-center bg-white rounded-r-md absolute right-0 top-1/2 transform -translate-y-1/2 group">
                <FaTelegramPlane className="text-2xl text-[#01A0A4] group-hover:text-dark transition duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary text-white text-center px-4 lg:px-12: lg:px-0 py-7">
        <p className="">{`© Copyright ${new Date().getFullYear()} | All Rights Reserved by DocHub`}</p>
      </div>
    </footer>
  );
};

export default Footer;
