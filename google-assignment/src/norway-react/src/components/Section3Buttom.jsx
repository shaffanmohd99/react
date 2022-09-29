import Section3ButtomPic from "./Section3ButtomPic";
import Section3TextContainer from "./Section3TextContainer";

function Section3Buttom(){
    return(
        <div style={{
            width: "100%",
            height: "80%",
            display: "flex",
        }}>
            <Section3ButtomPic pic={"Rectangle6.png"}/>
            <Section3TextContainer/>

        </div>

    );
};
export default Section3Buttom