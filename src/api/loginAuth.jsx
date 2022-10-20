import { get ,post} from "."


export const LoginUser= async(data)=>{
    const res=await post(' https://925e-14-192-212-236.ap.ngrok.io/api/auth/login',data);
    return res
}

