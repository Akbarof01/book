import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'



function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const navigate = useNavigate();
  function ProtectedRoute({ children, redirect = '/login', isAuthentication }) {
    if (!isAuthentication) {
navigate('/login');
    }
    return children;
  }
useEffect(() => {
  if(!localStorage.getItem('token')){
    navigate('/login')
  }
},[])


  return (
    <>
      <Routes>
        {/* public routes*/}
        {
          !token && <>
            <Route path='/register' element={<Register></Register>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
          </>
        }
        {/* protected routes */}
        <Route path='/' element={<ProtectedRoute isAuthentication = {token ? true : false} />}></Route>
        <Route index element = {<Home></Home>}></Route>
      </Routes>
    </>
  )
}

export default App
