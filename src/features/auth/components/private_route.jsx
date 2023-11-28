import { Navigate } from "react-router-dom";
import { useAuth } from "../hook/use_auth";

const PrivateRoute = ({ children }) => {
  const { usuario } = useAuth();
  if (usuario) return children;

  return <Navigate to={"/login"} />;
};

export default PrivateRoute;