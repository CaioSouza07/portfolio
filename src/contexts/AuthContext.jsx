import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }){
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    function login(nickname) {
        setLoading(true);
        try {
            setUser(nickname);
        } finally {
            setLoading(false);
        }
    }

    function logout() {
        setUser(null);
    }

    const isAuthenticated = !!user;

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated,
                loading,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("useAuth deve ser usado dentro de um AuthProvider")
    }
    return context;
}