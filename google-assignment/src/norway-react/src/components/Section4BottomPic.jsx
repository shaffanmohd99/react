function Section4BottomPic({pic,place}){
    return(
        <div style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
        }}>
            <div style={{
             height: "50%",
             width: "300px",
             backgroundImage: "url(/"+pic+")"
            }}>  
            </div>
            <h2 style={{  fontSize: "30px",color: "black",textAlign:"left"}}>{place}</h2>
        </div>
    );
};

export default Section4BottomPic