import { useEffect, useRef, useState } from "react";

// import style
import "./Avatar.css";
import { Link } from "react-router-dom";
import { FiBarChart, FiLogOut, FiUser } from "react-icons/fi";

const Avatar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const avatarRef = useRef(null);

  // todo: user will be confirmed from db
  const user = {
    img: true,
    email: "shahed.shihab.0@gmail.com",
  };

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Function to close dropdown when clicked outside of the avatar
  const handleClickOutside = (event) => {
    if (avatarRef.current && !avatarRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  // Close dropdown when component unmounts
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      {/* avatar */}
      <div
        className="hover:blur-[1px] duration-300 cursor-pointer"
        onClick={toggleDropdown}
        onMouseEnter={() => setIsDropdownOpen(true)}
        ref={avatarRef}
      >
        {user?.img ? (
          <img
            className="rounded-full w-10 h-10 sm:w-12 sm:h-12 hover:border-2 hover:border-primary"
            src="https://source.unsplash.com/300x300/?profile"
            alt="user-img"
          />
        ) : (
          <div className="flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-light hover:border-2 hover:border-primary">
            <span className="text-2xl text-primary uppercase">
              {user?.email.slice(0, 1)}
            </span>
          </div>
        )}
      </div>

      {/* dropdown content */}
      {isDropdownOpen && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute right-0 mt-2 w-48 border-2 border-primary bg-white rounded-md shadow-lg animate-dropdown z-40"
        >
          <ul className="w-full p-4">
            <li>
              <Link to="/profile">
                <div className="flex items-center px-3 py-2 w-full rounded-md text-dark hover:text-[#666] transition duration-300 hover:bg-primary hover:bg-opacity-30">
                  <FiUser className="text-2xl mr-3" />
                  <span className="font-medium">Profile</span>
                </div>
              </Link>
            </li>

            <li>
              <Link to="/dashboard">
                <div className="flex items-center px-3 py-2 w-full rounded-md text-dark hover:text-[#666] transition duration-300 hover:bg-primary hover:bg-opacity-30">
                  <FiBarChart className="text-2xl mr-3" />
                  <span className="font-medium">Dashboard</span>
                </div>
              </Link>
            </li>

            {/* todo: logout function will come from auth context */}
            <li className="flex items-center px-3 py-2 w-full rounded-md text-dark hover:text-[#666] transition duration-300 hover:bg-primary hover:bg-opacity-30 cursor-pointer">
              <FiLogOut className="text-2xl mr-3" />
              <span className="font-medium">Logout</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Avatar;
