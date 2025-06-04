import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import '../Singup.css'


const Signup = () => {
    const [form, setForm] = useState({
        fullName: '',
        phone: '',
        email: '',
        password: '',
        company: '',
        isAgency: '',
    });
    const navigate=useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };
    const handleSubmit=()=>{
        //we can write our custom code here to fetch an APIand register user. By the time we are just using Toast
        toast.success('Registration successful! Please login.')
        navigate('/Signin');
    }

    const isFormValid = form.fullName && form.phone && form.email && form.password && form.isAgency;

    return (
        <>
           

            <ToastContainer className="toast-container" />
      <div className="page-container">
        <div className="form-wrapper">
          <h1 className="form-title">Create your PopX account</h1>

        
          <div className="input-group">
            <label className="input-label">
              Full Name<span className="required">*</span>
            </label>
            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Enter your name"
              className="input-field"
            />
          </div>

          
          <div className="input-group">
            <label className="input-label">
              Phone number<span className="required">*</span>
            </label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="input-field"
            />
          </div>

          
          <div className="input-group">
            <label className="input-label">
              Email address<span className="required">*</span>
            </label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="input-field"
            />
          </div>

          <div className="input-group">
            <label className="input-label">
              Password<span className="required">*</span>
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="input-field"
            />
          </div>

          <div className="input-group">
            <label className="input-label">Company name</label>
            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Enter company name"
              className="input-field"
            />
          </div>

      
          <div className="radio-group">
            <p className="radio-label">
              Are you an Agency?<span className="required">*</span>
            </p>
            <div className="radio-options">
              <label className="radio-option">
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={form.isAgency === 'yes'}
                  onChange={handleChange}
                  className="radio-input"
                />
                <span>Yes</span>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={form.isAgency === 'no'}
                  onChange={handleChange}
                  className="radio-input"
                />
                <span>No</span>
              </label>
            </div>
          </div>

       
          <button
            onClick={handleSubmit}
            disabled={!isFormValid}
            className={`submit-button ${isFormValid ? 'enabled' : 'disabled'}`}
          >
            Create Account
          </button>
        </div>
      </div>
        </>
    );
}

export default Signup
