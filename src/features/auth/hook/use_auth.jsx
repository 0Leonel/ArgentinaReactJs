import { useContext } from "react";
import { AuthContext } from "../context/auth_context";

export const useAuth = () => {
  const { usuario } = useContext(AuthContext);

  return {
    usuario,
  };
};