function TitleForAll({title,desc}){
    return(
        <div style={{
            width: "100%",
            height: "20%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <p style={{color:"black",fontSize:"50px"}}>{title}</p>
            <h2 style={{color:"black",fontSize:"20px"}}>{desc}</h2>

        </div>
    )
}
export default TitleForAll

