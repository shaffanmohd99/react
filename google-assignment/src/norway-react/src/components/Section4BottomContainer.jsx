import Section4BottomPic from "./Section4BottomPic";

const arr=[
    {pic:"Rectangle9.png", place:"Reine"},
    {pic:"Rectangle10.png", place:"Norway"},
    {pic:"Rectangle11.png", place:"Bergen"},
];

function Section4BottomContainer(){
    return(
        <div style={{
            width: "100%",
            height: "80%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "100px",
        }}>
            
            {arr.map((item)=>
                <Section4BottomPic pic={item.pic} place={item.place}/>
            )}

        </div>
    );
};
export default Section4BottomContainer