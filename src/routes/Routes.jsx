import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import ErrorPage from "../pages/Error/ErrorPage";
import Doctors from "../pages/Doctors/Doctors";
import Faq from "../pages/Faq/Faq";
import Pricing from "../pages/Pricing/Pricing";
import Appointment from "../pages/Appointment/Appointment";
import DoctorDetails from "../pages/Doctors/DoctorDetails";
import Profile from "../pages/Profile/Profile";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "doctors",
        element: <Doctors />,
      },
      {
        path: "doctors/:name",
        element: <DoctorDetails />,
      },
      {
        path: "faq",
        element: <Faq />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "appointment",
        element: (
          <PrivateRoute>
            <Appointment />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  // dashboard routes
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default router;
