import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Shared/Loader/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (user?.email) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
