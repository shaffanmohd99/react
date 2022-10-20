import useAuth from '../hooks/useAuth';
import { Link, NavLink } from 'react-router-dom';
// import useAuth from '../hooks/useAuth';

const Navigation = () => {

    const style = ({ isActive }) => ({
        fontWeight: isActive ? 'bold' : 'normal',
        all:"unset",
        cursor:"pointer",
        fontSize:"20px"
      });


const{role,logout}=useAuth()

    return (
      <div style={{
        height:"50px",
        width:"100%",
        backgroundColor:"#1DA1F2",
        // borderLeft:"10px",
        position:"fixed",
        top:"0px",
        left:"0px",
        padding:"10px 50px 0px 50px",
        zIndex:"0"
        // display:'flex',
        // alignItems:"center",
        // justifyContent:"center",
        
        

      }}
      >
          <div
          style={{
            // width:"100%",
            display:"flex",
            justifyContent:"space-between",
            // backgroundColor:"red",
            }}
          >
              <nav
                style={{
                display:"flex",
                gap:"30px",
          
                }}
              >
          
               {role==="admin"? <NavLink style={style} to="/user">User</NavLink>:null}
               {role==="admin"?  <NavLink style={style} to="/ticket">Ticket</NavLink>:null}
            
              </nav>
              {/* {token ? <button onClick={() => logout()}>Logout</button> : null} */}
              <div
               style={{
                display:"flex",
                gap:"30px",
                alignItems:"center"
          
                }}
              >
                {/* <nav
                  style={{
                  display:"flex",
                  gap:"20px",
                  }}
                >
                            <NavLink style={style} to="/home">Google</NavLink>
                </nav> */}
                <NavLink style={style} to="/my-detail">My Details</NavLink>
                              <button onClick={() => logout()}
                             style={{
                              all:"unset",
                              cursor:"pointer",
                              fontSize:"20px",
                              border:"1px solid black",
                              padding:"0px 10px 0px 10px",
                              borderRadius:"5px"

                             }}
                             >
                              Logout</button> 
                            
              </div>
          </div>
      </div>
    );
  };
  export default Navigation