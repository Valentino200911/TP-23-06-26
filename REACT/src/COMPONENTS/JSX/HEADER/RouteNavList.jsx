
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

//El img sólo aplica para el li de logo en el nav y para las imágenes del footer. Es o img o FontAwesomeIcon

function RouteNavList({i, navText, route}) {
  return (
    <li>


       <NavLink to={route} 
       className='domine-bold'>
        
       <FontAwesomeIcon icon={i}/>
        
        {navText}
        
        </NavLink>

    </li>

  );
};

export default RouteNavList;