import Section3Text from "./Section3Text";

const arr=[
    {number:"01",title:"Sustainable",desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, impedit quia aspernatur laudantium consequatur libero."},
    {number:"02",title:"Fair & Share",desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, impedit quia aspernatur laudantium consequatur libero."},
    {number:"03",title:"Experience",desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, impedit quia aspernatur laudantium consequatur libero."},
]

function Section3TextContainer(){
    return(
        <div style={{
            width: "40%",
            height: "100%",
        }}>
            {arr.map((item)=>
                <Section3Text number={item.number} title={item.title} desc={item.desc}/>
            )}

        </div>
    );
};

export default Section3TextContainer