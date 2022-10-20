import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Login from './views/Login'
import { Route, Routes } from 'react-router-dom'
import NoMatch from './views/NoMatch'
import Ticket from './views/ticket/Ticket'
import User from './views/user/user'
import Layout from './layout/layouts'
import RegisterPart2 from './views/RegisterPart2'
import LoginPart2 from './views/LoginPart2'
import UserRole from './views/userRole/UserRole'
import ProtectedRoute from './routes/ProtectedRoute'
import useAuth from './hooks/useAuth'
import ProtectedRouteAdmin from './routes/ProtectedRouteAdmin'
function App() {
  
const {role}=useAuth()
  return (
    <div >
     <Routes>
            <Route index element={<RegisterPart2 />} />
            <Route path="login" element={<LoginPart2/>}></Route>
            <Route path="register" element={<ProtectedRoute><RegisterPart2 /> </ProtectedRoute>} />
          <Route element={<Layout />}>
            
            <Route path="my-detail" element={<ProtectedRoute><UserRole/></ProtectedRoute>}></Route>

            <Route path="ticket" element={<ProtectedRouteAdmin><Ticket/></ProtectedRouteAdmin>}></Route>

            <Route path="user" element={<ProtectedRouteAdmin><User/></ProtectedRouteAdmin>} />
           
          </Route>
         
            <Route path="*" element={<NoMatch />} />
        </Routes>
    </div>
  )
}

export default App
