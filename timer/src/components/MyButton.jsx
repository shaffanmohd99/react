function MyButton({children,...restProps}){
    return(
        <button 
        style={{
       backgroundColor:"aqua",
       borderRadius:"10px",
       padding:"5px 20px",
       height:height,
       fontSize:fontSize
   }}
   
   {...restProps}>
       {/* {props.children || "hello"} */}
       {children}
   </button>
    )
}
export default MyButton