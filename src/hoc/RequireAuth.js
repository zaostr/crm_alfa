import { useLocation, Navigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth";

export const RequireAuth = ({children}) => {
    const location = useLocation();
    const { user } = useAuth();

    if (!user) {
        return <Navigate to='/sign-in' state={{from: location}} />
    }
    return children
}
