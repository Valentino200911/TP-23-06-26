
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
    <nav className='navBar navList'>

      <ul className='navList'>

      <Logo/>

      <RouteNavList
      i="faHouse"
      navText="Página Principal"
      route="/"/>

      <RouteNavList
      i=""
      navText="Cabañas"
      route="/cabañas"/>


      <RouteNavList
      i=""
      navText="Servicios Turísticos y Ubicación"
      route="/serviciosturisticos"/>

      <RouteNavList
      i=""
      navText="Contacto"
      route="/contacto"/>

      <RouteNavList
      i=""
      navText="Naturaleza"
      route="/naturaleza"/>

      </ul>

    </nav>

  )
}

export default Nav