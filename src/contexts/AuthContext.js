// import React, { Children, useContext, useEffect, useState } from 'react';
// import { auth } from '../firebase/firebase';

// const AuthContext = React.createContext()

// export function useAuth() {
//     return useContext(AuthContext)
// }

// function AuthProvider() {
//     const [currentUser, setCurrentUser] = useState()

//     function signup(email, password) {
//         return auth.createUserWithEmailAndPassword(email, password)
//     }

//     useEffect(() => {
//         const unsubscribe = auth.onAuthStateChanged(user => {
//             setCurrentUser(user)
//         })

//         return unsubscribe
//     }, [])

//     return (
//         <AuthContext.Provider value={{ currentUser, signup }}>
//             {children}
//         </AuthContext.Provider>
//     )
// }

// export default AuthProvider;
