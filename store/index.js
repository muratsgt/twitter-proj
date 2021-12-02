import { createContext, useState } from "react";

export const ThemeContext = createContext({});

export const AuthContext = createContext({});

export function AuthContextProvider({ children }) {
    const [currentUser, setcurrentUser] = useState({});
    const setUser = (val) => {
        setcurrentUser(val);
    }
    return (
        <AuthContext.Provider value={{currentUser, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}