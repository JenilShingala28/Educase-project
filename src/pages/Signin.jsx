import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { toast,ToastContainer } from 'react-toastify';
import '../Singin.css'

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate=useNavigate();
    const handleSubmit = () => {
        
        toast.success('Registration successful! Please login.')
        navigate('/Account');
    }


    const isFormValid = email.trim() !== '' && password.trim() !== '';
    return (
       
        <div className="page-container">
      <ToastContainer className="toast-container" />
      <div className="form-wrapper">
        <h1 className="form-title">Signin to your PopX account</h1>
        <p className="form-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <div className="input-group">
          <label className="input-label">Email Address</label>
          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
        </div>

        <div className="input-group">
          <label className="input-label">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
        </div>

        <button
          onClick={handleSubmit}
          className={`submit-button ${isFormValid ? "enabled" : "disabled"}`}
          disabled={!isFormValid}
        >
          Login
        </button>
      </div>
    </div>
    )
}

export default Signin
