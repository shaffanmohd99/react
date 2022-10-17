import { get ,post} from "."

export const RegisterUser=async(data)=>{
    const res=await post('http://127.0.0.1:8000/api/auth/register',data);
    return res;
}