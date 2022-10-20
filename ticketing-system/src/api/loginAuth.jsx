import { get ,post} from "."


export const LoginUser= async(data)=>{
    const res=await post('https://ticker-heroku.herokuapp.com/api/auth/login',data);
    return res
}

