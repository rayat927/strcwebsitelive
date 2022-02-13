import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import Home from './Containers/Home/Home';
import Footer from './Components/Footer';
import Router from './Components/Router';
import LoginNav from './Components/LoginNav';
import { useEffect, useState } from 'react';
import { auth, db } from './firebase/firebase';
// import AuthProvider from './contexts/AuthContext';

function App() {
  const [currentUser, setCurrentUser] = useState()

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        db.collection('Users').where('email', '==', user.email).get().then(qs => {
          qs.forEach(credential => {
            setCurrentUser(credential.data())
          })
          
        })
        
    })

    return unsubscribe
    }, [])
  
  return (
    // <AuthProvider>
      <div className="App">
        <Router />
        <LoginNav currentUser={currentUser} />
        <Sidebar />
        <Footer />
      </div>
    // </AuthProvider>
  );
}

export default App;
