function WhiteBoxIdv({word}){
    return (
        <div style={{
            width: "240px",
            height: "180px",
            borderRadius: "30px",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
            color:"black"
        }}>
            <h2 style={{
              color: "black",
              textAlign: "center",
              padding: "20px",
            }}>{word}</h2>
        </div>
    )
}
export default WhiteBoxIdv