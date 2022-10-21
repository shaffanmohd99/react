import DisplayTicket from "../../components/DisplayTicket"
import CreateTicket from "../../components/CreateTicket"
import UserTable from "../../components/UserTable"
import UserNavigation from "../../layout/user/UserNavigation"
import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import { useEffect } from "react"
import MySnackbar from "../../components/MySnackbar"

const Ticket=()=>{

    const FetchAllTicket=()=>{
        return axios.get('https://ticker-heroku.herokuapp.com/api/lookup/ticket')
    }
    const {data,isLoading,isError,error,refetch,...rest}=useQuery(["ticket"],FetchAllTicket,
    { 
        // cacheTime:3000,
        // staleTime:0
        enabled:true,
        // onSuccess:()=>{console.log(data)},
        // onError:()=>{console.log("errror",error)}   
    })

    // useEffect(()=>{console.log("meow")},[data])
    
    
    return(
        <div style={{width:"100vw"}} >
             <div style={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center",
            marginTop:"70px",
            fontFamily:"poppins"
            // justifyContent:"sp"
        }}>
            <div style={{ display:"flex",flexDirection:"column",gap:"30px"}}>
            <div ><CreateTicket/></div>
            </div>
        </div>
        <h1 style={{marginTop:"20px"}}>List of Tickets</h1>
            <div style={{
                width:"100%",
                padding:"20px",
                marginTop:"px",
                display:"flex",
                flexWrap:"wrap",
                justifyContent:"center",
                gap:"30px"
                }}
                >
                    
                    {data?.data.map((item)=>
                    
                        <DisplayTicket ID={item.ticket_id} title={item.title} assign={item.assigned_to} category={item.category} status={item.status_type
                        } priorityLevel={item.priority_level
                        } description={item.description}/>
                    )}
            
               
            </div>
        </div>
    )
}
export default Ticket