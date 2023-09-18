/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext=createContext(null);

const auth=getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null);
    const [loading, setLoading]=useState(false);

    const createUser=(email, pass)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, pass);
    }
    const userLogIn=(email,pass)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,pass);
    }


    const authInfo={
        user,
        loading,
        createUser,
        userLogIn,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;