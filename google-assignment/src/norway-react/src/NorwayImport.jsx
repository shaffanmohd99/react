import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import TopNavBar from './components/TopNavBar'
import TitleSec1 from './components/TitleSec1'
import BottomNavBar from './components/BottomNavBar'
import TitleForAll from './components/TitleForAll'
import ButtonSec2 from './components/ButtonSec2'
import ButtonSec2Container from './components/ButtonSec2Container'
import Section3Buttom from './components/Section3Buttom'
import Section4BottomContainer from './components/Section4BottomContainer'
import Section5Middle from './components/Section5Middle'
import Section5Bottom from './components/Section5Bottom'
import Section6Top from './components/Section6Top'
import Section6Middle from './components/Section6Middle'
import Section6Bottom from './components/Section6Bottom'



function NorwayImport() {


  return (
    <div>
      {/* first section */}
       <div style={{
        backgroundImage: "url(/Rectangle1.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: "0",
       }} class="container">
      {/* <TopNavBar/> */}
       <TitleSec1/>
      <BottomNavBar/>
    </div>

    {/*second section  */}
    <div  class="container">
       <TitleForAll title={"HUNDREDS OF"} desc={"Activities for Everyone"}/>
       <ButtonSec2Container/>  
    </div>

    {/* third section */}
    <div  class="container">
    <TitleForAll title={"ABOUT US"} desc={"Our Philosophy"}/>
    <Section3Buttom/>
    </div>

    {/* Fourth Section */}
    <div  class="container">
    <TitleForAll title={"BEAUTIES"} desc={"Hotels & Apartments"}/>

       <Section4BottomContainer/>
    </div>

    {/* Fifth Section */}
    <div  class="container">
    <TitleForAll title={"NETWORK"} desc={"Our Partners"}/>
    <Section5Middle/>
    <Section5Bottom pic={"GwT7fA1zjwY.png"}/>
    
    
    </div>

  {/*6th section  */}
  <div class="container">
        <div style={{
          width: "100%",
          height: "60%",
          backgroundColor: "#0C2F3A",
         
        }}>
            <Section6Top pic={"footer-logo_white-xs1.png"}/>
          <Section6Middle/>
          <Section6Bottom/>
        </div>
    </div>
    
   
    </div>
  )
}

export default NorwayImport
