import { useState } from "react";
import AuthContext from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { loginAPI } from "../api/Auth";
import { useEffect } from "react";

const AuthProvider=({children})=>{

    const[token,setToken]=useState(null);
    const [user,setUser]=useState(null);
    const [email,setEmail]=useState(null);
    const [password,setPassword]=useState(null);
    useEffect(()=>console.log(email),[email])
    useEffect(()=>console.log(password),[password])
   
    
    const navigate=useNavigate()
    
    const login = async () => {
        const { token, user } = await loginAPI();
        if(token && user) {
          setToken(token);
          setUser(user);
          console.log("login",token)
          navigate('/home');
        }
      }

  const logout = () => {
        setToken(null);
        navigate('/logout')
        setTimeout(()=>navigate('/'),2000)
      }

  const signup=(e)=>{
    
    setEmail(e.email),
    setPassword(e.password)
    navigate('/login');

  }

    return(
     <AuthContext.Provider
     value={{
        login,
        logout,
        signup,
        token,
        user,
        email,
        password
      }}
     >
        {children}
     </AuthContext.Provider>
    );
};

export default AuthProvider