import TimerImport from "../../timer/src/TimerImport";
const Timer = () => {
    return (
      <div
                style={{
                // padding:"0px 30vw 0px 30vw",
                // height:"80vh",
                width:"80vw",
                display:"flex",
                // flexDirection:"column",
                alignItems:"center",
                  justifyContent:"center"
                
                }}
            >
            <TimerImport/>
        </div>
    );
  };
  
  export default Timer