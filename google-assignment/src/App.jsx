import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import Navigation from './components/Navigation'
import Layout from './layouts/layouts'
import About from './views/About'
import Home from './views/Home'
import NoMatch from './views/NoMatch'
import Norway from './views/Norway'
import Timer from './views/Timer'
import Users from './views/Timer'
// import './App.css'

function App() {

  return (
    <div >
      <div>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home/>}></Route>
            <Route path="timer" element={<Timer />} />
            <Route path="about" element={<About />} />
            <Route path="norway" element={<Norway />} />
          </Route>
            <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>


    </div>
  )
}

export default App
