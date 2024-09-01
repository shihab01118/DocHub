import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

// icons
import { FiBarChart, FiLogOut, FiUser } from "react-icons/fi";

// hooks
import useCurrentUser from "../../hooks/useCurrentUser";
import useAuth from "../../hooks/useAuth";

// styles
import "./Avatar.css";

const Avatar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const currentUser = useCurrentUser();
  const { logOut } = useAuth();

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // logout function
  const handleLogOut = () => {
    const toastId = toast.loading("Logging Out...");
    logOut()
      .then(() => {
        toast.success("Logged Out!", { id: toastId });
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something went wrong!");
      });
  };

  return (
    <div className="relative">
      {/* avatar */}
      <div
        className="hover:blur-[1px] duration-300 cursor-pointer"
        onClick={toggleDropdown}
      >
        {currentUser?.photo ? (
          <img
            className="rounded-full w-10 h-10 sm:w-12 sm:h-12 hover:border-2 hover:border-primary"
            src={`${currentUser?.photo}`}
            alt="user-img"
          />
        ) : (
          <div className="flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-light hover:border-2 hover:border-primary">
            <span className="text-2xl text-primary uppercase">
              {currentUser?.email.slice(0, 1)}
            </span>
          </div>
        )}
      </div>

      {/* dropdown content */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 border-2 border-primary bg-white rounded-md shadow-lg animate-dropdown z-40">
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

            <li
              className="flex items-center px-3 py-2 w-full rounded-md text-dark hover:text-[#666] transition duration-300 hover:bg-primary hover:bg-opacity-30 cursor-pointer"
              onClick={handleLogOut}
            >
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
