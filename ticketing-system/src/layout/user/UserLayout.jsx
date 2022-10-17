import { Outlet } from "react-router-dom"
import UserNavigation from "./UserNavigation"

const UserLayout=()=>{
    return(
        <div>
            <UserNavigation/>
        
            <Outlet/>
        </div>

    )
}

export default UserLayout