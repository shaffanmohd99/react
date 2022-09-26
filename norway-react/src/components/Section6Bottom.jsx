const arr=["fa-brands fa-instagram","fa-brands fa-youtube","fa-brands fa-square-twitter","fa-brands fa-facebook"];

function Section6Bottom(){
    return(
        <div style={{
            width: "80%",
            height: "35%",
            display: "flex",
            justifyContent: "space-between"
        }}>
        <div >
            <p style={{fontSize: "15px", color:"white"}}>© 2020 Bikart Design. All rights reserved</p>
        </div>
        <div style={{
         display: "flex",
         height: "100%",
         width: "0%",
         justifyContent: "space-between"
        }}>

            {arr.map((item)=>
                <div style={{
                    width: "50px",  
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "#FFFFFF",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                            }}>
                            <i style={{fontSize:"40px"}} class={item}></i>
                </div>
            )}
        </div>
    </div>
    )
}

export default Section6Bottom