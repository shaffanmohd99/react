import { Link, NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Navigation = () => {

    const style = ({ isActive }) => ({
        fontWeight: isActive ? 'bold' : 'normal',
        all:"unset",
        cursor:"pointer",
        fontSize:"20px"
      });

      const { logout, token } = useAuth();

    return (
      <div style={{
        height:"30px",
        // width:"100vw",
        // borderLeft:"10px",
    
        marginTop:"30px"

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
                gap:"10px",
          
                }}
              >
          
                <NavLink style={style} to="/home">Home</NavLink>
                <NavLink style={style} to="/timer">Timer</NavLink>
                <NavLink style={style} to="/about">About</NavLink>
                <NavLink  style={style} to="/norway">Norway</NavLink>
                <NavLink  style={style} to="/randomuser">Random User</NavLink>
              </nav>
              {/* {token ? <button onClick={() => logout()}>Logout</button> : null} */}
              <div
               style={{
                display:"flex",
                gap:"30px",
                alignItems:"center"
          
                }}
              >
                <nav
                  style={{
                  display:"flex",
                  gap:"20px",
                  }}
                >
                            <NavLink style={style} to="/home">Google</NavLink>
                </nav>
                             { token? <button onClick={() => logout()}
                             style={{
                              all:"unset",
                              cursor:"pointer",
                              fontSize:"20px",
                              border:"1px solid black",
                              padding:"0px 10px 0px 10px",
                              borderRadius:"5px"

                             }}
                             >
                              Logout</button> : null}
                            
              </div>
          </div>
      </div>
    );
  };
  export default Navigation