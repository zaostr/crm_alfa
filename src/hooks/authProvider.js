import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({child}) => {
    return <AuthContext.Provider>
        {child}
    </AuthContext.Provider>
}