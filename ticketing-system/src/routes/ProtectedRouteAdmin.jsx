import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRouteAdmin=({children})=>{
    const {token,role}=useAuth()
    if(!token || !role==='admin'){
        return <Navigate to={'/'} replace />
     }
    return children;
    // register
}

export default ProtectedRouteAdmin