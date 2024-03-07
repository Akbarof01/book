import { Link } from "react-router-dom"
import  { useState, useEffect } from 'react';

const register = () => {
  const [name, setName] = useState('');
  const [lsname, setLsname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

    localStorage.setItem('userName', name);
    localStorage.setItem('userLastName', lsname);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);


    window.location.href = '/'; 
  };
  
  return (
    <div>
      <h1 className="p-5 fs-1 fw-bold">Register Page</h1>
      <form>
      <div>
          <label className="fs-4 d-flex justify-content-start" htmlFor="username">Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control "></input>
        </div>
        <div>
          <label className="fs-4 d-flex justify-content-start" htmlFor="username">Last Name</label>
          <input type="text" value={lsname} onChange={(e) => setLsname(e.target.value)} className="form-control "></input>
        </div>
      <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label fs-4 d-flex justify-content-start">Email address</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control "  id="exampleInputEmail1" aria-describedby="emailHelp"></input>
      <div id="emailHelp" value={password} onChange={(e) => setPassword(e.target.value)} className="form-text d-flex justify-content-start">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label fs-4 d-flex justify-content-start">Password</label>
    <input type="password" className="form-control" />
  </div>
  <Link className="d-flex justify-content-stary fs-5" to="/login">Login</Link>
  <button type="submit" className="btn btn-primary w-100 fs-4">Saqlash</button>
      </form>
    </div>
  )
}

export default register