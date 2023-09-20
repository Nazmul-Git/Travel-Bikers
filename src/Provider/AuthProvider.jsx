/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext=createContext(null);
const provider= new GoogleAuthProvider();

const auth=getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null);
    const [loading, setLoading]= useState(true);

    const createUser=(email, pass)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, pass);
    }
    const userLogIn=(email,pass)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,pass);
    }
    const googleSignIn=()=>{
        setLoading(true);
        return signInWithPopup(auth,provider);
    }
    const userLogOut=()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])


    const authInfo={
        user,
        loading,
        createUser,
        userLogIn,
        googleSignIn,
        userLogOut,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;