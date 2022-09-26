const List=(props)=>{
    return(
       
            <p onClick={(e)=>console.log(e.target.innerHTML)} style={{
                display:props.test,
                flexDirection:"column"
            }} >{props.title}</p>
             
    
    )
}

export default List