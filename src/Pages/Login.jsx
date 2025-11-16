import React from 'react'
import './Styles.css'



function Login({inputValue, handleChange, loginUser}) {
  return (
    <div className='flights-page'>
      <div className="login-page">
        <p className='login-header'>Welcome</p>
        <form className='login-form' onSubmit={(e) => loginUser(e, {username: inputValue.username, password: inputValue.password})}>
            <div>
                <label htmlFor="Username">Email</label>
                <br />
                <input name='username' type="text" value={inputValue.username} placeholder='Email' required onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <br />
                <input name='password' type="password" value={inputValue.password} placeholder='Password' onChange={handleChange}  required autoComplete="true" />
            </div>
          <button className='login-submit' type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
