// SignUp.jsx
import React from 'react';
import '../../App.css';

function SignUp() {
  return (
    <div className='signUp'>
      <h1 className='headline'>SIGN-UP</h1>
      <div className='formDiv'>
        <form className='form'>
          <input placeholder='Username' id="username"></input>
          <input placeholder='Email' id="email"></input>
          <input placeholder='Password' id="password" type="password"></input>
          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" /> Remember me
            </label>
            <a href="#forgot" className="forgot-password">Forgot Password?</a>
          </div>
          <button className='small-button'>
            SIGN-UP
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
