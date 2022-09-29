import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
// import MyButton from '../../day-2-vite/src/components/MyButton'
import MyButton from './components/MyButton'
import Timer from './components/Timer'
import DisplayTimer from './components/DisplayTimer'

function TimerImport() {
  const [hour,setHour]=useState(0)
  const [minute,setMinute]=useState(0)
  const [second,setSecond]=useState(0)
  
  const handleSubmit=(event)=>{
    event.preventDefault();
    const value= parseInt(event.target[0].value) ;
    const value2= parseInt(event.target[1].value) ;
    const value3= parseInt(event.target[2].value) ;
    setHour(value);
    setMinute(value2);
    setSecond(value3);
  }

  const reset=()=>{
    setHour(0);
    setMinute(0);
    setSecond(0);
  }

  // const getTime=()=>{
  //   setHour(Math.floor((time / (1000 * 60 * 60)) % 24));
  //   setMinute(Math.floor((time / 1000 / 60) % 60));
  //   setSecond(Math.floor((time / 1000) % 60))
  // }
  const getTimeRemaining = (e) => {
    const total = Date.now();
    console.log(total)
  }
  
  const tick = () => {
    
    if (hour === 0 && minute === 0 && second === 0) {
      setHour(0);
        setMinute(0);
        setSecond(0);
    }
    else if (minute === 0 && second === 0) {
        setHour(hour-1);
        setMinute(59);
        setSecond(59);

    } else if (second === 0) {
        setHour(hour);
        setMinute(minute-1);
        setSecond(59);
    } else {
        
      setHour(hour);
      setMinute(minute);
      setSecond(second-1)
    }
  };
  useEffect(()=>{
        const timer=setInterval(()=>tick(),1000);
        return()=>clearInterval(timer);
      })
  // const startTimer = () => {

  //   const current = setInterval(() => {
  //       setSecond(seconds => seconds - 1)
  //   }, 1000)
  //   tick()
  // }
  
  
  // const [paused,setPaused]=useState(true)
  // let paused=true;
  // const starter=()=>{
    //   setPaused(false)
// }
// if(paused===false){
//   useEffect(()=>{
//     const timer=setInterval(()=>tick(),1000);
//     return()=>clearInterval(timer);
//   })
// }

// console.log(paused)

  

  

  return (        
    <div
                style={{
                display:"flex",
                flexDirection:"column",
                alignItems:"center"
                }}
            >
      {/* <Timer hour={hour} minute={minute} second={second}/> */}
      <DisplayTimer hour={hour} mins={minute} secs={second}/>
      <div style={{display:"flex",gap:"30px", justifyContent:"center",marginBottom:"50px"}}>
        {/* <MyButton  >Start</MyButton> */}
        <MyButton onClick={()=>reset()} >Reset</MyButton>
        {/* <MyButton  >testing</MyButton> */}

      </div>
    
      
      <form style={{display:"flex", justifyContent:"center"}} onSubmit={(event)=>handleSubmit(event)}>
        <input type="number" placeholder="Hour"/>
        <input max={"59"} min={"0"} type="number" placeholder="Minute"/>
        <input max={"59"} min={"0"} type="number" placeholder="Second"/>
        <MyButton type="submit">Start</MyButton>
      </form>

    </div>
  )
}

export default TimerImport
