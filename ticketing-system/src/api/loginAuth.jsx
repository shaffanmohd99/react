import { get ,post} from "."


export const LoginUser= async(data)=>{
    const res=await post('http://127.0.0.1:8000/api/auth/login',data);
    return res
}

