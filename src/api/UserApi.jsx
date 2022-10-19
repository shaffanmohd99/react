import { get } from "."


export const GetUser= async()=>{
    const res=await get('http://127.0.0.1:8000/api/lookup/user');
    return res
}