import NameCard from "./NameCard"
import Section5WhiteBox from "./Section5WhiteBox"

const arr=[
    {title:"Lorem, ipsum.",desc:"Lorem, ipsum dolor."},
    {title:"Lorem, ipsum.",desc:"Lorem, ipsum dolor."},
    {title:"Lorem, ipsum.",desc:"Lorem, ipsum dolor."},
];
    
    function Section5Bottom({pic}){
    return(
        <div style={{
            width: "100%",
            height: "50%",
        }}>
            <div style={{
               backgroundImage: "url(./"+pic+")",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height:" 100%",
            }}>
                <Section5WhiteBox/>
            <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px",
            }}>

                {arr.map((item)=>
                <NameCard title={item.title} desc={item.desc}/>
                )}
            </div>
            </div>

        </div>
    )
}

export default Section5Bottom