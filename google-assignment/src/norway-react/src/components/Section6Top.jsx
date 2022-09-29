function Section6Top({pic}){
    return(
        <div style={{
            width: "100%",
            height: "30%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "30px",
            padding: "15px",
        }}>
            <div style={{
            width: "70px",
            height: "70px",
            backgroundImage: "url(./"+pic+")",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            // flexDirection:"column"
            }}></div>
            <h2>TRAVELx</h2>
        </div>

    )
}
export default Section6Top