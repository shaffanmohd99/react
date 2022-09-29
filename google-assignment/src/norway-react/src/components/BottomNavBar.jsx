import BottomButton from "./BottomButton";

const buttomArr=[
    {place:"Trandheim", desc:"Plan a Trip"},
    {place:"Geirangerfjord", desc:"Plan a Trip"},
    {place:"Lofoten", desc:"Plan a Trip"},
];

function BottomNavBar(){
    return(
        <div style={{
            width:"100%" ,
            height:"30%" ,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "100px",
        }}>

            {buttomArr.map((item)=>
                <BottomButton place={item.place} desc={item.desc}/>
                )}

        </div>
    )
};

export default BottomNavBar;