
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import RouteNavList from './RouteNavList'
import Logo from './Logo'

function Nav() {

  return (
    <nav className='navbar navlist'>

      {/* El NavLink está para verificar el funcionamiento del ruteo general debido a que RouteNavList no permite escribir el NavText que llevaría a otras páginas (ver RouteNavList.jsx) */}

      {/* Esto debe borrarse */}

      <NavLink to="/">Home</NavLink>

      <br />

      <NavLink to="/cabañas">Cabañas</NavLink>

      <br />

      <NavLink to="/serviciosturisticos">Servicios Turísticos y Ubicación</NavLink>

      <br />

      <NavLink to="/contacto">Contacto</NavLink>

      <br />

      <NavLink to="/naturaleza">Naturaleza</NavLink>

      <br />

      <NavLink to="/indice">Indice</NavLink>

      <ul className='navlist'>

      <Logo/>

      <RouteNavList
      i="faHouse"
      navText="Home"
      route="/"/>

      <RouteNavList
      i=""
      navText="Cabañas"
      route="/cabañas"/>


      <RouteNavList
      i=""
      navText="Servicios Turísticos y Ubicación"
      route=""/>

      <RouteNavList
      i=""
      navText="Contacto"
      route=""/>

      <RouteNavList
      i=""
      navText="Naturaleza"
      route=""/>

      </ul>

    </nav>

  )
}

export default Nav