import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({child}) => {
    const [user, setUser] = useState(null);

    const signIn = (newUser, cb) => {
        setUser(newUser);
        cb();
    }

    const signOut = (cb) => {
        setUser(null);
        cb();
    }

    const value = {user, signIn, signOut};

    return <AuthContext.Provider value={value} >
        {child}
    </AuthContext.Provider>
}