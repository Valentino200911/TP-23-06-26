
import { NavLink, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import RouteNavList from './RouteNavList'
import Logo from './Logo'
import Button from '../../generalComponents/cards/Button'
import useAuth from '../../../hooks/user/useAuth'

//Por cuestiones de estilo, preferí no dejar un mensaje de "Bienvenidos tras el login"

function Nav() {

  const {user, logout, isAuthenticated} = useAuth()

  const navigate = useNavigate()

  const handleRegisterUser = () => {
    navigate("/user/register")
  }

  const handleLoginUser = () => {
    navigate("/user/login")
  }

  const handleLogoutUser = () => {
    alert("Sesión cerrada")
    logout()
    navigate("/")
    window.location.reload()
  }

  return (
    <nav className="navBar navList">

        <div className='buttonContainer'>

          { !isAuthenticated && (
            <Button
              type="#"
              id="register"
              buttonText="Registrarse"
              className="faculty-glyphic-regular"
              onClick={handleRegisterUser}
            />)
          }

          { !isAuthenticated && (
            
            <Button
              type="#"
              id="login"
              buttonText="Iniciar sesión"
              className="faculty-glyphic-regular"
              onClick={handleLoginUser}
            />

          )
          }
          
          { isAuthenticated && (

          <Button
            type="#"
            id="logout"
            buttonText="Cerrar sesión"
            className="faculty-glyphic-regular"
            onClick={handleLogoutUser}
          />

          )
          }

        </div>

      <ul className="navList">
        <Logo />

        <RouteNavList i="faHouse" navText="Página Principal" route="/" />

        <RouteNavList i="" navText="Cabañas" route="/cabañas" />

        <RouteNavList
          i=""
          navText="Servicios Turísticos y Ubicación"
          route="/serviciosturisticos"
        />

        <RouteNavList i="" navText="Contacto" route="/contacto" />

        <RouteNavList i="" navText="Naturaleza" route="/naturaleza" />

      </ul>

    </nav>
  );
}

export default Nav