import { useEffect, useState } from "react"

function Timer({hour,minute,second}){
 

    const [hours,setHours]=useState(hour)
    const [minutes,setMinutes]=useState(minute)
    const [seconds,setSeconds]=useState(second)

    const tick = () => {
   
        if (hours === 0 && minutes === 0 && seconds === 0) {
            setHours(0);
            setMinutes(0);
            setSeconds(0);
        }
        else if (minutes === 0 && seconds === 0) {
            setHours(hours-1);
            setMinutes(59);
            setSeconds(59);

        } else if (seconds === 0) {
            setHours(hours);
            setMinutes(minutes-1);
            setSeconds(59);
        } else {
            
            setHours(hours);
            setMinutes(minutes);
            setSeconds(seconds-1)
        }
    };
    
    useEffect(()=>{
      const timer=setInterval(()=>tick(),1000);
      return()=>clearInterval(timer);
    })

    return(
        <div>
            <h1>{hours} : {minutes} : {seconds}</h1>
        </div>
    )
}
export default Timer