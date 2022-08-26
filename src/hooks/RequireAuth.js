import { useLocation, Navigate } from "react-router-dom"

export const RequireAuth = ({child}) => {
    const location = useLocation();
    const auth = false;

    if (!auth) {
        return <Navigate to='/sign-in' state={{from: location}} />
    }
    return child
}
