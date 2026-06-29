
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function RouteNavList({icon, navText, route, iconColor}) {
  return (
    <li>

       <NavLink to={route} 
       className='domine-bold'>
        
       <FontAwesomeIcon icon={icon} style={{color: iconColor}}/>
        
        {navText}
        
        </NavLink>

    </li>

  );
};

export default RouteNavList;