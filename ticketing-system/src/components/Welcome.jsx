import { Button } from "@mui/material"

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
                       <h1 style={{color:"white",fontSize:"30px"}}> {title}</h1>
                       <h2 style={{color:"white"}}>
                           <Button
                           onClick={()=>click()} 
                           sx={{
                            backgroundColor:"#ecf0f3"
                            ,color:"black",
                            fontWeight:"700",
                            '&:hover': {
                                backgroundColor: '#A5A8AA',
                                borderColor: '#0062cc',
                                boxShadow: 'none',
                                    },
                                               }}  variant="contained">{button}</Button> {desc2}
                       </h2>    
                   </div>
                </div>
    )
}

export default Welcome