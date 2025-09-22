import { Navigate } from "react-router-dom";
import { getUser } from "../services/authService";

const PrivateRoute = ({ children }) => {
  const user = getUser();
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;