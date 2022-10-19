import AuthContext from "../contexts/AuthContext";
import { LoginUser } from "../api/loginAuth";

const AuthProvider=({children})=>{

    const login=async(userLogin)=>{
        const {data}=await LoginUser(userLogin)
        if(data.message==='Success login' && data.data.token){
            console.log("yeay")
            console.log(data)
        }
    }

    return (
        <AuthContext.Provider value={{
            login,
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider