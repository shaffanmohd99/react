import { useState } from 'react'
import reactLogo from './assets/react.svg'
import DropDownList from './components/DropDownList'
import List from './components/List'
// import './App.css'

function App() {

  const [display,setDisplay]=useState("none")
  

  const changeDisplay=()=>{
    if(display==="none"){
      setDisplay("flex")
    }
    else if(display==="flex"){
      setDisplay("none")
    }
  }

  return (
    <div>
     <button onClick={()=>changeDisplay()}>Click me</button>
     <div >
     <DropDownList test={display}/>

     </div> 
    </div>
  )
}

export default App
