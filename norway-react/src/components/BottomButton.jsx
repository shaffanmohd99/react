function BottomButton({place,desc}){
    return(
            <div style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "5px",
                padding: "5px",
                width: "200px",
                height: "80px",
                borderRadius: "20px",
                background: "rgba(255, 255, 255, 0.1)",
            }}>
                <i class="fa-solid fa-location-dot"></i>
                <div >
                    <h2>{place}</h2>
                    <p>{desc}</p>
                </div>
            </div>
    
    );
}
export default BottomButton;