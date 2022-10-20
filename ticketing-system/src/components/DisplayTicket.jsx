import { Box } from "@mui/system"
import { useEffect } from "react"
import useAuth from "../hooks/useAuth"
import DeleteTicket from "./DeletetTicket"
import EditTicket from "./EditTicket"

const DisplayTicket=({title,category,priorityLevel,status,description,assign,ID})=>{
    
    const {deleteTicket,token,role}=useAuth()
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
                   marginTop:"30px",
                    
            }}>
                <div>
                <div style={{fontFamily:"poppins",display:"flex",justifyContent:"flex-end",fontSize:"15px",gap:"5px"}}>
                       {role==="admin"? <EditTicket 
                        title={title} 
                        status={status} 
                        description={description} 
                        priorityLevel={priorityLevel}
                        category={category}
                        ID={ID}
                        assign={assign}
                        />:null}
                        {role==="admin"?<DeleteTicket ID={ID}/>:null}
                    </div>
                <div style={{display:"flex"}}>
                        <h3 style={{color:"#1DA1F2"}} >Ticket ID: </h3>
                        <h3 className="font-normal"> {ID} </h3>
                    </div>
                    <div style={{display:"flex"}}>
                        <h3 style={{color:"#1DA1F2"}} >Title: </h3>
                        <h3  className="font-normal"> {title} </h3>
                    </div>
                    <div style={{display:"flex"}}>
                        <h3 style={{color:"#1DA1F2"}} >Assigned to: </h3>
                        <h3  className="font-normal"> {assign} </h3>
                    </div>
                    <div style={{display:"flex"}}>
                        <h3 style={{color:"#1DA1F2"}} >Category: </h3>
                        <h3 className="font-normal">{category} </h3>
                    </div>
                    <div style={{display:"flex"}}>
                        <h3 style={{color:"#1DA1F2"}} >Priority level: </h3>
                        <h3 className="font-normal">{priorityLevel} </h3>
                    </div>
                    <div style={{display:"flex"}}>
                        <h3 style={{color:"#1DA1F2"}} >Status: </h3>
                        <h3 className="font-normal">{status} </h3>
                    </div>
                    <div style={{textAlign:"left"}}>
                        <h3 style={{color:"#1DA1F2"}} >Description: </h3>
                        <h3 className="font-normal">{description}</h3>
                    </div>
                
                </div>

            </div>
        </div>

    )
}
export default DisplayTicket