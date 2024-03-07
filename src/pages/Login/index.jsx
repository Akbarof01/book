import { Link } from "react-router-dom"
import  { useState, useEffect } from 'react';

function login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const handleLogin = () => {
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);


    window.location.href = '/';
  };
  return (
    <div >
      <h1 className="p-5 fs-1 fw-bold">Login Page</h1>
      <form className="mx-5">
      <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label d-flex justify-content-start fs-4">Email address:</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)}></input>
      <div id="emailHelp" className="form-text d-flex justify-content-start fs-5">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label d-flex justify-content-start fs-4">Password:</label>
    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)}></input>
  </div>
  <Link className="d-flex justify-content-start fs-5" to="/register">Register</Link>
  <button type="submit" className="btn btn-primary w-100 fs-4" onClick={handleLogin}>Saqlash</button>
      </form>
    </div>
  )
}

export default login