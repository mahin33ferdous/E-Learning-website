import React, {createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../Firebase/FirebaseConfig';

export const AuthContext=createContext()
const  auth=getAuth(app)

const AuthProvider = ({children}) => {
  const [user,setUser]=useState(null)

  const providerGoogleLogin=(provider)=>{
       return signInWithPopup(auth, provider);
  }
  const createUser=(email,password)=>{
   
     return createUserWithEmailAndPassword(auth,email,password)
  }
  const LogIn=(email,password)=>{
   
     return signInWithEmailAndPassword(auth,email,password)
  }
  const LogOut=()=>{
   
       return signOut(auth)
       
  }

  useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
    })
    return ()=>{
        unsubscribe();
    }
  },[])

  
  const authInfo={user,providerGoogleLogin,LogOut,LogIn,createUser}

    return (
        <AuthContext.Provider value={authInfo}
        
        >
            {children}
        </AuthContext.Provider>
        );
};

export default AuthProvider;