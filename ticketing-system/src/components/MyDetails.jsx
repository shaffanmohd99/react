import useAuth from "../hooks/useAuth"
import { fetchUserRole } from "../api/UserRoleAuth"
import UserTable from "./UserTable"
import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const MyDetails=()=>{
    const {token}=useAuth()
    
      const config={
        headers:{Authorization:`Bearer ${token}`}
      }
    const FetchDetails=()=>{
        return axios.get('https://ticker-heroku.herokuapp.com/api/user',config)
    }
    const {data,isLoading,isError,error,refetch,...rest}=useQuery(["detail"],FetchDetails,
    { 
        // cacheTime:3000,
        // staleTime:0
        enabled:true,
        // onSuccess:()=>{console.log(data)},
        // onError:()=>{console.log("errror",error)}   
    })
    

      
    return (
        <div style={{display:"flex",justifyContent:"center"}}>
            <UserTable ID={data?.data.id} name={data?.data.name} roles={data?.data.role} email={data?.data.email} />
        </div>
    )
}

export default MyDetails
