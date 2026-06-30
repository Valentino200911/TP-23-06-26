
import { Navigate } from 'react-router-dom'
import useAuth from './hooks/user/useAuth'

//La verificación debe hacerse de otra manera, ya que el ProtectedRoute impide que se pueda acceder a la edición de la NatureCard

function ProtectedRoute({children}) {

    const {user, isAuthenticated } = useAuth()

        isAuthenticated: user !== null

        if (!isAuthenticated) {

        return <Navigate to="/user/register" replace/>
        }

    return children
}

export default ProtectedRoute