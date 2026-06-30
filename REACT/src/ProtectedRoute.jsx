
import { Navigate } from 'react-router-dom'
import useAuth from './hooks/user/useAuth'


function ProtectedRoute({children}) {

    const {user, isAuthenticated } = useAuth()

        if (!isAuthenticated) {

        return <Navigate to="/user/register" replace/>
        }

    return children
}

export default ProtectedRoute