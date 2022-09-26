function Section3Text({number,title,desc}){
    return(
        <div style={{
            display: "flex"   ,
            justifyContent: "space-between",
            gap: "100px",
            padding: "50px",
        }}>
                    <div>
                        <h3 style={{color: "black",fontSize: "30px"}}>{number}</h3>
                    </div>
                    <div style={{textAlign:"left"}}>
                        <h2 style={{color: "black",fontSize: "30px"}}>{title}</h2>
                        <p style={{fontSize: "20px",color: "black"}}>{desc}</p>
                    </div>

        </div>
    );
};

export default Section3Text