import { NavLink } from "react-router-dom";
import useCurrentUser from "../../../hooks/useCurrentUser";

// icons
import { BiSolidDashboard } from "react-icons/bi";
// import { BsCalendar2Plus, BsCalendarWeekFill } from "react-icons/bs";

// styles
import "./Sidebar.css";

const Sidebar = () => {
  const currentUser = useCurrentUser();

  //  navlinks for patient
  const patientNavlinks = (
    <>
      <li className="py-3 text-dashboard-light text-[15px] font-medium hover:text-dashboard-dark transition duration-200">
        <NavLink to="/dashboard/patient" className="flex items-center gap-2.5">
          <div>
            <BiSolidDashboard className="text-xl" />
          </div>{" "}
          <span>Dashboard</span>
        </NavLink>
      </li>
      <li className="py-3 text-dashboard-light text-[15px] font-medium hover:text-dashboard-dark transition duration-200">
        <NavLink
          to="/dashboard/patient/book-appointment"
          className="flex items-center gap-2.5"
        >
          <div>
            <BiSolidDashboard className="text-xl" />
          </div>{" "}
          <span>Book Appointment</span>
        </NavLink>
      </li>
      <li className="py-3 text-dashboard-light text-[15px] font-medium hover:text-dashboard-dark transition duration-200">
        <NavLink
          to="/dashboard/patient/my-appointments"
          className="flex items-center gap-2.5"
        >
          <div>
            <BiSolidDashboard className="text-xl" />
          </div>{" "}
          <span>My Appointments</span>
        </NavLink>
      </li>
      <li className="py-3 text-dashboard-light text-[15px] font-medium hover:text-dashboard-dark transition duration-200">
        <NavLink
          to="/dashboard/patient/my-prescriptions"
          className="flex items-center gap-2.5"
        >
          <div>
            <BiSolidDashboard className="text-xl" />
          </div>{" "}
          <span>My Prescriptions</span>
        </NavLink>
      </li>
      <li className="py-3 text-dashboard-light text-[15px] font-medium hover:text-dashboard-dark transition duration-200">
        <NavLink
          to="/dashboard/patient/profile"
          className="flex items-center gap-2.5"
        >
          <div>
            <BiSolidDashboard className="text-xl" />
          </div>{" "}
          <span>Profile</span>
        </NavLink>
      </li>
    </>
  );
  // navlinks for doctor
  const doctorNavlinks = (
    <>
      <li className="py-3 text-dashboard-light text-[15px] font-medium hover:text-dashboard-dark transition duration-200">
        <NavLink to="/dashboard/doctor" className="flex items-center gap-2.5">
          <div>
            <BiSolidDashboard className="text-xl" />
          </div>{" "}
          <span>Dashboard</span>
        </NavLink>
      </li>
      <li className="py-3 text-dashboard-light text-[15px] font-medium hover:text-dashboard-dark transition duration-200">
        <NavLink
          to="/dashboard/doctor/my-appointments"
          className="flex items-center gap-2.5"
        >
          <div>
            <BiSolidDashboard className="text-xl" />
          </div>{" "}
          <span>My Appointments</span>
        </NavLink>
      </li>
      <li className="py-3 text-dashboard-light text-[15px] font-medium hover:text-dashboard-dark transition duration-200">
        <NavLink
          to="/dashboard/doctor/patients"
          className="flex items-center gap-2.5"
        >
          <div>
            <BiSolidDashboard className="text-xl" />
          </div>{" "}
          <span>Patients</span>
        </NavLink>
      </li>
      <li className="py-3 text-dashboard-light text-[15px] font-medium hover:text-dashboard-dark transition duration-200">
        <NavLink
          to="/dashboard/doctor/profile"
          className="flex items-center gap-2.5"
        >
          <div>
            <BiSolidDashboard className="text-xl" />
          </div>{" "}
          <span>Profile</span>
        </NavLink>
      </li>
    </>
  );
  // navlinks for admin
  const adminNavlinks = (
    <>
      <li className="py-3 text-dashboard-light text-[15px] font-medium hover:text-dashboard-dark transition duration-200">
        <NavLink to="/dashboard/admin" className="flex items-center gap-2.5">
          <div>
            <BiSolidDashboard className="text-xl" />
          </div>{" "}
          <span>Dashboard</span>
        </NavLink>
      </li>
      <li className="py-3 text-dashboard-light text-[15px] font-medium hover:text-dashboard-dark transition duration-200">
        <NavLink
          to="/dashboard/admin/appointments"
          className="flex items-center gap-2.5"
        >
          <div>
            <BiSolidDashboard className="text-xl" />
          </div>{" "}
          <span>Appointments</span>
        </NavLink>
      </li>
      <li className="py-3 text-dashboard-light text-[15px] font-medium hover:text-dashboard-dark transition duration-200">
        <NavLink
          to="/dashboard/admin/doctors"
          className="flex items-center gap-2.5"
        >
          <div>
            <BiSolidDashboard className="text-xl" />
          </div>{" "}
          <span>Doctors</span>
        </NavLink>
      </li>
      <li className="py-3 text-dashboard-light text-[15px] font-medium hover:text-dashboard-dark transition duration-200">
        <NavLink
          to="/dashboard/admin/patients"
          className="flex items-center gap-2.5"
        >
          <div>
            <BiSolidDashboard className="text-xl" />
          </div>{" "}
          <span>Patients</span>
        </NavLink>
      </li>
      <li className="py-3 text-dashboard-light text-[15px] font-medium hover:text-dashboard-dark transition duration-200">
        <NavLink
          to="/dashboard/admin/reports"
          className="flex items-center gap-2.5"
        >
          <div>
            <BiSolidDashboard className="text-xl" />
          </div>{" "}
          <span>Reports</span>
        </NavLink>
      </li>
      <li className="py-3 text-dashboard-light text-[15px] font-medium hover:text-dashboard-dark transition duration-200">
        <NavLink
          to="/dashboard/admin/settings"
          className="flex items-center gap-2.5"
        >
          <div>
            <BiSolidDashboard className="text-xl" />
          </div>{" "}
          <span>Settings</span>
        </NavLink>
      </li>
    </>
  );

  const navlinks =
    currentUser?.role === "admin"
      ? adminNavlinks
      : currentUser?.role === "doctor"
      ? doctorNavlinks
      : patientNavlinks;

  return (
    <nav className="w-[250px] bg-white h-[calc(100vh-88px)] shadow-sm rounded-tr-[40px] px-5 pt-2.5">
      <ul className="flex flex-col navlinks">{navlinks}</ul>
    </nav>
  );
};

export default Sidebar;
