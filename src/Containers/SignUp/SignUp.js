import React, { useState } from 'react';
// import { useAuth } from '../../contexts/AuthContext';
import { auth, db } from '../../firebase/firebase';
import './SignUp.css'
import signup from './signup.svg'

function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    // const {signup} = useAuth()

    const onSubmit = e => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password).then(userCredential => {
            console.log(userCredential.user);
            db.collection('Users').add({
                name,
                email,
                username,
                dateOfBirth
            })
        })
    }

    return (
        <div className='SignUp'>
            <img src={signup} />
            <form onSubmit={onSubmit} action='' className='signup-form'>
                <h2>Sign Up</h2>
                <div className='signup-fields'>
                    <h4>Full Name</h4>
                    <div className='input-field'>
                        <input type="text" placeholder="Full Name" value={name} onChange={(e) => { setName(e.target.value)}} />
                    </div>
                    
                </div>
                <div className='signup-field'>
                    <h4>Email</h4>
                    <div className='input-field'>
                        <input type="email" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value)}} />
                    </div>
                </div>
                <div className='signup-field'>
                    <h4>Password</h4>
                    <div className='input-field'>
                        <input type="passord" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value)}} />
                    </div>
                </div>
                <div className='signup-field'>
                    <h4>Username</h4>
                    <div className='input-field'>
                        <input type="text" placeholder="Username" value={username} onChange={(e) => { setUsername(e.target.value)}} />
                    </div>
                </div>
                <div className='signup-field'>
                    <h4>Date of Birth</h4>
                    <div className='input-field'>
                        <input type="date" placeholder="Date of Birth" value={dateOfBirth} onChange={(e) => { setDateOfBirth(e.target.value)}} />
                    </div>
                </div>
                <input type='submit' className='signup-btn' value="Sign Up" />
            </form>
      </div>
  )
}

export default SignUp;
