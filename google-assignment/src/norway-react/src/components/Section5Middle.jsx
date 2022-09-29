import Section5MiddlePic from "./Section5MiddlePic";

const Section5MiddlePics=["Lakehouse-logo_grey_01.png","magento-grey-logo1.png","Microsoft-Logo-Grey1.png","Midea-Logo-grey1.png"];

function Section5Middle(){
    return (
        <div style={{
            width: "100%",
            height: "30%",
            display: "flex",
            justifyContent:" space-between",
        }}>
             { Section5MiddlePics.map((pic)=>
        <Section5MiddlePic pic={pic}/>
      )}
                 
        </div>
    )
}

export default Section5Middle