import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = ({ children, isAllowed=true, redirectPath='/home' }) => {
  const { token } = useAuth();

  if(!token) {
    return <Navigate to={'/home'} replace/>;
  }

  if(!isAllowed) {
    return <Navigate to={redirectPath} replace/>;
  }

  return children;
}

export default ProtectedRoute;