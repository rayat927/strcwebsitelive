import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase/firebase';
import './Login.css'
import login from './login.svg'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = e => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password).then(user => {
            console.log(user);
        })
    }

    return (
        <div className='Login'>
            <img src={login}/>
            <form onSubmit={onSubmit} action='' className='login-form'>
                <h2>Login</h2>
                <div className='login-field'>
                    <h4>Email</h4>
                    <div className='input-field'>
                        <input type="email" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value)}} />
                    </div>
                </div>
                <div className='login-field'>
                    <h4>Password</h4>
                    <div className='input-field'>
                        <input type="passord" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value)}} />
                    </div>
                </div>
                <input type='submit' className='login-btn' value="Login" />
            </form>
      </div>
  )
}

export default Login;
