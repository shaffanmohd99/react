import { RegisterUser } from "../api/registerAuth";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginUser } from "../api/loginAuth";
import AuthContext from "../contexts/AuthContext";
import { CreateTicket, destroyTicket, editTicket } from "../api/TicketAuth";
import { destroyUser, editUser } from "../api/userAuth";
import { fetchUserRole } from "../api/UserRoleAuth";

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [errorLogin,setErrorLogin]=useState("")
  const [role,setRole]=useState(null)
  const [detail,setDetails]=useState(null)

  const navigate = useNavigate();

  const login = async (userLogin) => {
    const { data} = await LoginUser(userLogin);
    if(data.message==='Success login' && data.data.token) {
      console.log("yeay")
     
      console.log(data.data.token)
      setToken(data.data.token)
      setErrorLogin("")
      setRole(data.data.role)
      if(data.data.role=="admin"){
        navigate('/user')
      }
      else{
        navigate('/my-detail')
      }
    }
    else{
      console.log("wrong")
      setErrorLogin("Email and password does not match")
    }
  }

  const register=async(userRegister)=>{
    const{data}=await RegisterUser(userRegister);
    console.log(data.data.token)
    setRole(data.data.role)
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

const updateTicket=async (id,values,config)=>{
  const {data}=await editTicket(id,values,config)
  console.log(data)
}

const deleteUser=async(id,config)=>{
  const {data}=await destroyUser(id,config)
  console.log(data)
}

const updateUser=async (id,values,config)=>{
  const {data}=await editUser(id,values,config)
  console.log(data)
}

const getUser=async(config)=>{
  const {data}=await fetchUserRole(config)
  setDetails(data)
  // return data
}
  const logout = () => {
    setToken(null);
    navigate("/")
  }

  return (
    <AuthContext.Provider 
      value={{
        token,
        user,
        errorLogin,
        role,
        detail,
        login,
        register,
        logout,
        CreateNewTicket,
        deleteTicket,
        updateTicket,
        deleteUser,
        updateUser,
        getUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;