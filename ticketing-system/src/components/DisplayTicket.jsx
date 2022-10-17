import { Box } from "@mui/system"
import { useEffect } from "react"
import useAuth from "../hooks/useAuth"
import EditTicket from "./EditTicket"

const DisplayTicket=({title,category,priorityLevel,status,description,assign,ID})=>{
    
    const {deleteTicket,token}=useAuth()
    const config={
        headers:{Authorization:`Bearer ${token}`}
      }
     
   
    
    return (
        <div >
            <div style={{
                 width: "450px",
                 height: "300px",
                   borderRadius: "20px",
                   padding: "40px",
                   boxShadow: "14px 14px 20px #cbced1, -14px -14px 20px",
                   background: "#aqua",
                   flexDirection:"column",
                   alignContent:"center",
                   justifyContent:"center",
                   display:"flex",
                   marginTop:"30px"
            }}>
                <div>
                <div style={{display:"flex",justifyContent:"flex-end",fontSize:"15px",gap:"5px"}}>
                        <h3 onClick={()=>deleteTicket(ID,config)}>Delete</h3>
                        <EditTicket 
                        title={title} 
                        status={status} 
                        description={description} 
                        priorityLevel={priorityLevel}
                        category={category}
                        ID={ID}
                        assign={assign}
                        />
                    </div>
                <div style={{display:"flex"}}>
                        <h3 style={{color:"#1DA1F2"}} >Ticket ID: </h3>
                        <h3> {ID} </h3>
                    </div>
                    <div style={{display:"flex"}}>
                        <h3 style={{color:"#1DA1F2"}} >Title: </h3>
                        <h3> {title} </h3>
                    </div>
                    <div style={{display:"flex"}}>
                        <h3 style={{color:"#1DA1F2"}} >Assigned to: </h3>
                        <h3> {assign} </h3>
                    </div>
                    <div style={{display:"flex"}}>
                        <h3 style={{color:"#1DA1F2"}} >Category: </h3>
                        <h3>{category} </h3>
                    </div>
                    <div style={{display:"flex"}}>
                        <h3 style={{color:"#1DA1F2"}} >Priority level: </h3>
                        <h3>{priorityLevel} </h3>
                    </div>
                    <div style={{display:"flex"}}>
                        <h3 style={{color:"#1DA1F2"}} >Status: </h3>
                        <h3>{status} </h3>
                    </div>
                    <div style={{textAlign:"left"}}>
                        <h3 style={{color:"#1DA1F2"}} >Description: </h3>
                        <h3>{description}</h3>
                    </div>
                
                </div>

            </div>
        </div>

    )
}
export default DisplayTicket