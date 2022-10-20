import { get ,post} from "."

export const RegisterUser=async(data)=>{
    const res=await post('https://ticker-heroku.herokuapp.com/api/auth/register',data);
    return res;
}