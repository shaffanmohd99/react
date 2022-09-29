import ButtonSec2 from "./ButtonSec2";

const arr=[
    {pic:"Rectangle2.png",title:"Hiking",desc:"230 Activities"},
    {pic:"Rectangle3.png",title:"Sailing",desc:"230 Activities"},
    {pic:"Rectangle4.png",title:"Skiing",desc:"230 Activities"},
    {pic:"Rectangle5.png",title:"Kayaking",desc:"230 Activities"},
]
function ButtonSec2Container(){
    return(
        <div style={{
            width: "100%",
            height: "80%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft : "120px",
            paddingRight : "120px",
        }}>

                {arr.map((item)=>
                <ButtonSec2 pic={item.pic} title={item.title} desc={item.desc}/>
                )}
        </div>
    );
};

export default ButtonSec2Container