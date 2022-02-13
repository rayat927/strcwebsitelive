// import Logout from '@mui/icons-material/Logout';
import React, { useEffect, useState } from 'react';
import Notification from '../Containers/Notifications/Notification';
import { auth } from '../firebase/firebase';
import Donate from './Donate';
import Login from './Login';
import Logout from './Logout';
import SignUp from './SignUp';

function LoginNav({ currentUser }) {
    if (currentUser) {
        console.log(currentUser);
        return (
            <div className='LoginNav'>
                <h3 style={{color: 'white', marginRight: '34px'}}>{ currentUser.name }</h3>
                <Notification />
                <Donate />
                <Logout />
            </div>
        )
    }
    return (
        <div className='LoginNav'>
            <Login />
            <SignUp />
            <Donate />
      </div>
  )
}

export default LoginNav;
