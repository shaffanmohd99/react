import { RegisterUser } from "../api/registerAuth";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginUser } from "../api/loginAuth";
import AuthContext from "../contexts/AuthContext";
import { CreateTicket, destroyTicket, editTicket } from "../api/TicketAuth";

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [errorLogin,setErrorLogin]=useState("")

  const navigate = useNavigate();

  const login = async (userLogin) => {
    const { data} = await LoginUser(userLogin);
    if(data.message==='Success login' && data.data.token) {
      console.log("yeay")
      navigate('/user')
      setToken(data.data.token)
      setErrorLogin("")
    }
    else{
      console.log("wrong")
      setErrorLogin("Email and password does not match")
    }
  }

  const register=async(userRegister)=>{
    const{data}=await RegisterUser(userRegister);
    console.log(data.data.token)
    setToken(data.data.token)
    navigate('/user')
  }

  

  const CreateNewTicket=async(ticket,config)=>{
    const {data}=await CreateTicket(ticket,config)
    console.log(data)
  }

const deleteTicket=async(id,config)=>{
  const {data}=await destroyTicket(id,config)
  console.log(data)
}

const updateTicket=async (id,config)=>{
  const {data}=await editTicket(id,config)
  console.log(data)
}

  const logout = () => {
    setToken(null);
  }

  return (
    <AuthContext.Provider 
      value={{
        token,
        user,
        errorLogin,
        login,
        register,
        logout,
        CreateNewTicket,
        deleteTicket,
        updateTicket
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;