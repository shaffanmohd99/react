import WhiteBoxIdv from "./WhiteBoxIdv"

const arr=[
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, rem!","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, rem!","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, rem!"
]
function Section5WhiteBox(){
    return(
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "30px"
        }}>
        {arr.map((item)=>
            <WhiteBoxIdv word={item}/>
        )}
    </div>
    )
}
export default Section5WhiteBox