import { AuthProvider } from "./context/auth";

export const Provider = ({ children }) => {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}