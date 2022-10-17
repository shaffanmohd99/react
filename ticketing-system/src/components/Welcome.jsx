const Welcome=({title,desc1,desc2,button,margin,click})=>{


    return(
        <div style={{
            width: "400px",
            height: "300px",
            borderRadius: "20px",
            padding: "40px",
            boxShadow: "14px 14px 20px #cbced1, -14px -14px 20px",
            background: "#1DA1F2",
            marginTop:margin
       
        }}>
                   <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"30px"}}>
                       <h1 style={{color:"white"}}> {title}</h1>
                       <h2 style={{color:"white"}}>{desc1} <button style=
                       {{
                        background: "#ecf0f3",
                        color:"black",
                        boxShadow:"none",
                        borderRadius: "10px",
                        // boxShadow: "6px 6px 6px #cbced1"
                       }} onClick={()=>click()} >{button}</button> {desc2}</h2>
                   </div>
                </div>
    )
}

export default Welcome