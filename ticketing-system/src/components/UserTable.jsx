import useAuth from "../hooks/useAuth"
import DeleteUser from "./DeleteUser"
import EditUser from "./EditUser"

const UserTable=({name,email,roles, width,ID})=>{
    const {deleteUser,token,role}=useAuth()
    const config={
        headers:{Authorization:`Bearer ${token}`}
      }

    return (
        <div  className="w-[90vw] sm:w-[auto]" style={{
            height: "auto",
            borderRadius: "20px",
            padding: "20px",
            boxShadow: "14px 14px 20px #cbced1",
            background: "#ecf0f3",
            flexDirection:"column",
            alignContent:"center",
            justifyContent:"center",
            display:"flex",
        }}
        >
            <table style={{textAlign:"left",display:"flex",justifyContent:"space-between"}}>
            <div style={{display:"flex",gap:"30px",flexWrap:"wrap" }}>
            <tr className="w-[auto] text-xs sm:text-lg">
                    <th style={{color:"#1DA1F2"}} >ID:</th>
                    <th className="font-normal">{ID}</th>
                </tr>
                <tr className="w-[100px] text-xs sm:text-lg sm:w-[250px]" >
                    <th  style={{color:"#1DA1F2"}} >Name:</th>
                    <th className="font-normal">{name}</th>
                </tr>
                <tr className="w-[180px] text-xs sm:text-lg sm:w-[450px]">
                    <th style={{color:"#1DA1F2"}}>Email:</th>
                    <th className="font-normal">{email}</th>
                </tr>
                <tr className="w-[250px] text-xs sm:text-lg">
                    <th style={{color:"#1DA1F2"}}>Role:</th>
                    <th className="font-normal">{roles}</th>
                </tr>
            </div>
            <div style={{display:"flex",gap:"30px"}}>
                <tr>
                    <th><EditUser ID={ID} roles={roles}/></th>
                   {role==="admin"?  <th><DeleteUser  ID={ID}/></th>:null}
                </tr>
            </div>
            </table>
        </div>
    )
}
export default UserTable