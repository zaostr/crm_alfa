import { useLocation, Navigate } from "react-router-dom"
import { useAuth } from "./useAuth";

export const RequireAuth = ({child}) => {
    const location = useLocation();
    const { user } = useAuth();

    if (!user) {
        return <Navigate to='/sign-in' state={{from: location}} />
    }
    return child
}
