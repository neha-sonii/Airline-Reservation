import React from 'react'
import './Styles.css'

function Register({registerUser, inputValue, handleChange}) {
  return (
    <div className='flights-page'>
          <div className="login-page">
            <p className='login-header'>Welcome</p>
            <form className='login-form' onSubmit={(e) => registerUser(e, {username: inputValue.username, password: inputValue.password})}>
                <div>
                    <label htmlFor="Username">Email</label>
                    <br />
                    <input type="text" name='username' placeholder='Email' value={inputValue.username} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <br />
                    <input type="password" name='password' placeholder='Password' value={inputValue.password} onChange={handleChange} required autoComplete="true" />
                </div>
              <button className='register-submit' type='submit'>Register</button>
            </form>
          </div>
        </div>
  )
}

export default Register
