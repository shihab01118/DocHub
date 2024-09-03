import { NavLink } from "react-router-dom";
import useCurrentUser from "../../../hooks/useCurrentUser";

// styles
import "./Sidebar.css";

const Sidebar = () => {
  const currentUser = useCurrentUser();

  //  navlinks for patient
  const patientNavlinks = (
    <>
      <li className="py-3 text-dashboard-light text-[15px] font-medium hover:text-dashboard-dark">
        <NavLink to="/dashboard/patient">
          <span>Dashboard</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/patient/book-appointment">
          <span>Book Appointment</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/patient/my-appointments">
          <span>My Appointments</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/patient/my-prescriptions">
          <span>My Prescriptions</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/patient/profile">
          <span>Profile</span>
        </NavLink>
      </li>
    </>
  );
  // navlinks for doctor
  const doctorNavlinks = (
    <>
      <li>
        <NavLink to="/dashboard/doctor">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/doctor/my-appointments">
          My Appointments
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/doctor/patients">Patients</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/doctor/profile">Profile</NavLink>
      </li>
    </>
  );
  // navlinks for admin
  const adminNavlinks = (
    <>
      <li>
        <NavLink to="/dashboard/admin">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/admin/appointments">Appointments</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/admin/doctors">Doctors</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/admin/patients">Patients</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/admin/reports">Reports</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/admin/settings">Settings</NavLink>
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
      <ul className="flex flex-col">{navlinks}</ul>
    </nav>
  );
};

export default Sidebar;
