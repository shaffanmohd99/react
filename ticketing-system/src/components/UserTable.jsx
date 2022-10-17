const UserTable=({name,email,role, width})=>{
    return (
        <div style={{
            width: width,
            height: "10px",
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
            <div style={{display:"flex",gap:"30px" }}>
                <tr style={{width:"250px"}}>
                    <th style={{color:"#1DA1F2"}} >Name:</th>
                    <th>{name}</th>
                </tr>
                <tr style={{width:"450px"}}>
                    <th style={{color:"#1DA1F2"}}>Email:</th>
                    <th>{email}</th>
                </tr>
                <tr style={{width:"250px"}}>
                    <th style={{color:"#1DA1F2"}}>Role:</th>
                    <th>{role}</th>
                </tr>
            </div>
            <div style={{display:"flex",gap:"30px"}}>
                <tr>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </div>
            </table>
        </div>
    )
}
export default UserTable