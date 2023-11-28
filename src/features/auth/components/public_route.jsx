import { Navigate } from "react-router-dom";
import { useAuth } from "../hook/use_auth";

const PublicRoute = ({ children }) => {
  const { usuario } = useAuth();

  if (usuario) return <Navigate to={"/"} />;

  return children;
};

export default PublicRoute;