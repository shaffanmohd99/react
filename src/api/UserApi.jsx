import { get } from "."


export const GetUser= async()=>{
    const res=await get('https://ticker-heroku.herokuapp.com/api/lookup/user');
    return res
}