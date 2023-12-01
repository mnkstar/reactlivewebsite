import React from 'react'
import '../../App.css';

function SignUp() {
  return (
    <div>
       <h1 className='headline'>SIGN-UP</h1>
      <form className='form'>
        <input placeholder='Username' id="username"></input>
        <input placeholder='email' id="email"></input>
        <input placeholder='password' id="password"></input>
        <button className='small-button'>
          SIGN-UP
        </button>
      </form>

    </div>
  );
}

export default SignUp;
