import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {

    const style = ({ isActive }) => ({
        fontWeight: isActive ? 'bold' : 'normal',
        all:"unset",
        cursor:"pointer",
        fontSize:"20px"
      });

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
              </nav>
              <nav
                style={{
                display:"flex",
                gap:"10px",
          
                }}
              >
            <NavLink style={style} to="/home">Google</NavLink>
              </nav>
          </div>
      </div>
    );
  };
  export default Navigation