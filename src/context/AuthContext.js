import {createContext, useEffect, useState} from "react";
import {auth} from "../firebase";
import {onAuthStateChange} from "firebase/auth"

export const AuthContext = createContext();
export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState({});
    useEffect(() => {
        onAuthStateChange(auth, (user) => {
            setCurrentUser(user);
            console.log(user)
        })
    }, []);
    <AuthContext.Provider value={currentUser}>
        {children}
    </AuthContext.Provider>
};