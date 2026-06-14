
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import RouteNavList from './RouteNavList'

function Nav() {
  return (
    <nav>

      <RouteNavList
      src=""
      alt=""
      route=""
      />

      <RouteNavList
      i=""
      navText="Home"
      route="/"/>

      <RouteNavList
      i=""
      navText=""
      route=""/>


      <RouteNavList
      i=""
      navText=""
      route=""/>

      <RouteNavList
      i=""
      navText=""
      route=""/>


    </nav>
  )
}

export default Nav