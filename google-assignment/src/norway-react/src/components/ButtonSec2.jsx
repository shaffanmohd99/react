function ButtonSec2({pic,title,desc}){
    return(
        <div style={{
            position: "relative",
            borderRadius: "20px",
            width: "200px",
            height: "90%",
            backgroundImage: "url(/"+pic+")",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            <div style={{
                position: "absolute",
                bottom: "40px",
                left: "30px",
            }}>
                <h2 style={{fontSize:"30px"}}>{title}</h2>
                <p style={{color:"white", fontSize:"15px"}}>{desc}</p>
            </div>
        </div>
    )
}

export default ButtonSec2