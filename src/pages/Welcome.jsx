import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import '../Welcome.css'

const WelcomeScreen = () => {
    const navigate = useNavigate()
  return (
   

    <div className="page-container">
      <div className="content-wrapper">
        <h1 className="title">Welcome to PopX</h1>
        <p className="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <button
          onClick={() => navigate('/Signup')}
          className="btn-primary"
        >
          Create Account
        </button>
        <button
          onClick={() => navigate('/Signin')}
          className="btn-secondary"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
