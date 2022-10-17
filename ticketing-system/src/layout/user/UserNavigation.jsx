const UserNavigation=()=>{
    return (
        <div style={{
            width: "200px",
            height: "550px",
            borderRadius: "20px",
            padding: "40px",
            boxShadow: "14px 14px 20px #cbced1, -14px -14px 20px",
            background: "#1DA1F2",
            flexDirection:"column",
            alignContent:"center",
            justifyContent:"center",
            display:"flex",
        
        
        }}>
            <div style={{
                display:"flex",
                flexDirection:"column",
                gap:"30px",
                alignContent:"center",
                justifyContent:"center"
            }}
            >
                <button style=
                       {{
                        background: "#ecf0f3",
                        color:"black",
                        boxShadow:"none",
                        borderRadius: "10px",
                        // boxShadow: "6px 6px 6px #cbced1"
                       }}  >Get All User</button>

                <button style=
                       {{
                        background: "#ecf0f3",
                        color:"black",
                        boxShadow:"none",
                        borderRadius: "10px",
                        // boxShadow: "6px 6px 6px #cbced1"
                       }}  >Create New User</button>

                <button style=
                       {{
                        background: "#ecf0f3",
                        color:"black",
                        boxShadow:"none",
                        borderRadius: "10px",
                        // boxShadow: "6px 6px 6px #cbced1"
                       }}  >Edit User </button>

                <button style=
                       {{
                        background: "#ecf0f3",
                        color:"black",
                        boxShadow:"none",
                        borderRadius: "10px",
                        // boxShadow: "6px 6px 6px #cbced1"
                       }}  >Delete User</button>
            
            </div>
                </div>
    )
}
export default UserNavigation