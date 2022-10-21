import AuthContext from "../contexts/AuthContext";
import { LoginUser } from "../api/loginAuth";
import { useState } from "react";
import { Alert } from "react-native";

const AuthProvider=(props)=>{
    const [token,setToken]=useState(null)
    const [sucessLogin,setSucessLogin]=useState(null)
    const login=async(userLogin,props)=>{
        const {data}=await LoginUser(userLogin)
        if(data.message==='Success login' && data.data.token){
            if(data.data.role==="admin"){
                console.log(data)
                // console.log(data)
                props.navigation.navigate('Ticketing System')
                setSucessLogin(true)

            }
            else{
                Alert.alert("Only Admin is allowed")
            }
            
            
        }
        else{
            setSucessLogin(false)
        }
    }

    return (
        <AuthContext.Provider value={{
            login,
            sucessLogin,
            setSucessLogin,
        }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthProvider