import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Register from './Views/Register'
import Login from './views/Login'
import { Route, Routes } from 'react-router-dom'
import NoMatch from './views/NoMatch'
import Ticket from './views/ticket/Ticket'
import User from './views/user/user'
import Layout from './layout/layouts'
import RegisterPart2 from './views/RegisterPart2'
import LoginPart2 from './views/LoginPart2'
function App() {
  

  return (
    <div >
     <Routes>
            <Route index element={<RegisterPart2 />} />
            <Route path="login" element={<LoginPart2/>}></Route>
            <Route path="register" element={<RegisterPart2 />} />
          <Route element={<Layout />}>
            <Route path="ticket" element={<Ticket/>}></Route>
            <Route path="user" element={<User />} />
            {/* <Route path="about" element={<ProtectedRoute><About /></ProtectedRoute>} />
            <Route path="norway" element={<ProtectedRoute><Norway /></ProtectedRoute>} />
            <Route path="randomuser" element={<ProtectedRoute><RandomUser/></ProtectedRoute>} /> */}
          </Route>
          {/* <Route path="logout" element={<SuccessfullLogout/>}></Route> */}
            <Route path="*" element={<NoMatch />} />
        </Routes>
    </div>
  )
}

export default App
