import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import { auth } from '../firebase/firebase';

function Logout() {
  const logout = () => {
    auth.onAuthStateChanged(user => {
      if (user) {
        let confirm = window.confirm('Do you want to logout?')
        if (confirm) {
          auth.signOut()
        }
      }
    })
  }
  return (
      <div onClick={logout} className='Logout'>
        <LogoutIcon />
        <h3>Logout</h3>
      </div>
  )
}

export default Logout