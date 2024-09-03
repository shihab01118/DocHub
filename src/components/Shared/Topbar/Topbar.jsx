import { Link } from "react-router-dom";
import logo from "/logo.svg";
import messageIcon from "../../../assets/icons/note-icon-02.svg";
import bellIcon from "../../../assets/icons/note-icon-01.svg";
import settingIcon from "../../../assets/icons/setting-icon-01.svg";
import useCurrentUser from "../../../hooks/useCurrentUser";

const Topbar = () => {
  const currentUser = useCurrentUser();

  return (
    <>
      <div className="bg-white px-5 shadow-sm py-4 lg:flex justify-between items-center fixed w-full z-50 hidden">
        {/* logo */}
        <div>
          <Link to="/">
            <div className="flex items-center gap-2 lg:gap-3">
              <img src={logo} alt="logo-img" className="xs:w-8 sm:w-10" />
              <h2 className="xs:text-2xl sm:text-3xl font-bold text-dark">
                <span className="text-primary">Doc</span>Hub
              </h2>
            </div>
          </Link>
        </div>

        {/* icons and avatar */}
        <div className="flex items-center gap-7">
          <div>
            <img src={messageIcon} alt="message-icon" />
          </div>
          <div>
            <img src={bellIcon} alt="bell-icon" />
          </div>

          {/* avatar */}
          <div className="flex gap-2.5">
            {/* avatar name and title */}
            <div className="text-right">
              <h5 className="font-semibold text-dashboard-dark capitalize">
                {currentUser?.name}
              </h5>
              <p className="text-xs font-medium text-dashboard-light capitalize">
                {currentUser?.role}
              </p>
            </div>

            {/* avatar image */}
            <div className="cursor-pointer">
              {currentUser?.photo ? (
                <img
                  className="rounded-xl w-10 h-10 hover:border-2 hover:border-primary"
                  src={`${currentUser?.photo}`}
                  alt="user-img"
                />
              ) : (
                <div className="flex justify-center items-center w-10 h-10 rounded-xl bg-dashboard-bg">
                  <span className="text-2xl text-dashboard-dark uppercase">
                    {currentUser?.email.slice(0, 1)}
                  </span>
                </div>
              )}
            </div>
          </div>
          <div>
            <img src={settingIcon} alt="setting-icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
