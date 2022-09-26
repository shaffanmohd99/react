import { useState } from "react";

const arr=["meow","woof","bekk","mooo","rawr",'auuuuuuuuu'];



const DropDownList=(props)=>{
    const [name,setName]=useState("kamal")
    return(
        
        <div>
            <div style={{
            display:props.test,
            flexDirection:"column",
            width:"150px",
            }}>
            { arr.map((item)=>
            <div  style={{
                backgroundColor:"green",
                cursor:"pointer",
                border: "solid 1px black",
                color:"white",
        }} 
            onClick={(e)=>setName(e.target.innerHTML)}
            >{item}</div>
            
            )}
            <h1> You just click {name}</h1>
            </div>
        </div>
    )
}

export default DropDownList