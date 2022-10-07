import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import Navigation from './components/Navigation'
import UseAuth from './hooks/useAuth'
import Layout from './layouts/Layouts'
import ProtectedRoute from './routes/ProtectedRoute'
import About from './views/About'
import Home from './views/Home'
import Login from './views/Login'
import NoMatch from './views/NoMatch'
import Norway from './views/Norway'
import RandomUser from './views/RandomUser'
import SignIn from './views/SignIn'
import SuccessfullLogout from './views/SuccessfullLogout'
import Timer from './views/Timer'
import Users from './views/Timer'
// import './App.css'

function App() {
// const {user}=UseAuth();
  return (
    <div >
      <Routes>
            <Route index element={<SignIn />} />
            <Route path="login" element={<Login/>}></Route>
          <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
            <Route path="home" element={<ProtectedRoute><Home/></ProtectedRoute>}></Route>
            <Route path="timer" element={<ProtectedRoute><Timer /></ProtectedRoute>} />
            <Route path="about" element={<ProtectedRoute><About /></ProtectedRoute>} />
            <Route path="norway" element={<ProtectedRoute><Norway /></ProtectedRoute>} />
            <Route path="randomuser" element={<ProtectedRoute><RandomUser/></ProtectedRoute>} />
          </Route>
          <Route path="logout" element={<SuccessfullLogout/>}></Route>
            <Route path="*" element={<NoMatch />} />
        </Routes>


    </div>
  )
}

export default App
