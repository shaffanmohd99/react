function NameCard(props){
    return(
        <div style={{
            display: "flex",
            gap: "20px",
            alignitems: "center",
        }} >
                        <div style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          backgroundColor: "white",
                        }}>
                        </div>
                        <div class="name-card-text">
                            <h3 style={{ color: "white"}}> {props.title}</h3>
                            <p style={{color: "white"}}>{props.desc}</p>
                        </div>
        </div>
    )
}
export default NameCard