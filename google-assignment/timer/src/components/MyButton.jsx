function MyButton({children,...restProps}){
    return(
        <button 
        style={{
       backgroundColor:"aqua",
       borderRadius:"10px",
       padding:"5px 20px",
      
   }}
   
   {...restProps}>
       {/* {props.children || "hello"} */}
       {children}
   </button>
    )
}
export default MyButton