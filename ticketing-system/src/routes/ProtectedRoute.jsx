import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRoute=({children})=>{
    const {token}=useAuth()
    if(!token){
        return <Navigate to={'/'} replace />
     }
    return children;
    // register
}

export default ProtectedRoute