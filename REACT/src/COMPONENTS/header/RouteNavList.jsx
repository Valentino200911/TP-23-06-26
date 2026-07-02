
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Icon from '../generalComponents/fontawesome/Icon'

function RouteNavList({icon, iconColor, navText, route}) {
  return (
    <li>

      <Icon
      icon={icon}
      iconColor={iconColor} />

       <NavLink to={route} 
       className='domine-bold'>
      
        {navText}
        
        </NavLink>

    </li>

  );
};

export default RouteNavList;