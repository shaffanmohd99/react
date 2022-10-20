import UserTable from '../../components/UserTable'
import UserNavigation from '../../layout/user/UserNavigation'
import axios from "axios"
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query"
import useAuth from '../../hooks/useAuth'
const User=()=>{
    const fetchAllUser=()=>{
        return axios.get('http://127.0.0.1:8000/api/lookup/user')
    }
    const {data,isLoading,isError,error,refetch,...rest}=useQuery(["user"],fetchAllUser,
    { 
        enabled:true,
    }
    
    )
    
    
    // data.data.map((item)=>
    // console.log(item.name)
    // )
    return(
        <div style={{
            display:"flex",
            alignItems:"center",
            marginTop:"70px"
            // justifyContent:"sp"
        }}>
            {/* <div style={{position:"fixed",left:"40px"}}><UserNavigation/></div> */}
            <div style={{ display:"flex",flexDirection:"column",gap:"30px"}}>
                <h1 style={{marginBottom:"20px"}}>User page</h1>
               
               {
                data?.data.map((item)=>
                    <UserTable ID={item.id} name={item.name} email={item.email} roles={item.role} />
                )
               }
            
                
            </div>
        </div>
    )
}
export default User