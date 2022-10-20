import MyTickets from "../../components/MyTickets"
import MyDetails from "../../components/MyDetails"

const UserRole=()=>{
    return(
        <div style={{
            display:"flex",
            alignItems:"center",
            marginTop:"70px"
            // justifyContent:"sp"
        }}
        >
            <div style={{ display:"flex",flexDirection:"column",gap:"30px"}}>
                <h1 style={{marginBottom:"20px"}}>My Details</h1>
                <MyDetails/>
                <h1 style={{marginBottom:"20px", marginTop:"20px"}}>My Tickets</h1>
                <MyTickets/>
            </div>
        </div>
    )
}

export default UserRole