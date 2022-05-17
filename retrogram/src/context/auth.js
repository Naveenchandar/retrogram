import { createContext, useContext, useReducer } from "react";
import { authReducer, initialState } from "../reducer/auth";

const AuthContext = createContext(initialState);

const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);
    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };