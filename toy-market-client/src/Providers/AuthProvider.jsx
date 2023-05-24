import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleSignInProvider = new GoogleAuthProvider();

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password); 
    }
    const signInUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleSinInUser = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleSignInProvider);
    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    const updateUser = (name, photo) =>{
        return updateProfile(auth.currentUser,
            {displayName: name,
            photoURL: photo})
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false);

        });
        return()=>{
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        googleSinInUser,
        updateUser,
        logOut
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;