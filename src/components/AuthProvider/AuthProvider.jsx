import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/Firebase.config';
import { GoogleAuthProvider,onAuthStateChanged, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext=createContext(null);

const auth=getAuth(app)

const googleProvider=new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const createNew=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleIn=()=>{
        return signInWithPopup(auth, googleProvider)
    }

    const logOut=()=>{
        return signOut(auth);
    }


    const [user,setUser]= useState(null);
    const [loading,setLoading]= useState(true);

    useEffect(()=>{
        const uns=onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false)
        })

        return ()=>{
            return uns();
        }

    },[])
    const authInfo={
        user,
        loading,
        createNew,
        googleIn,
        logIn,
        setUser,
        setLoading,
        logOut,

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;