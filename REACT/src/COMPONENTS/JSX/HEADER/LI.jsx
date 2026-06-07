import React from 'react'
import LI from './LI'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

//El img sólo aplica para el li de logo en el nav y para las imágenes del footer. Es o img o FontAwesomeIcon

function LI(i, href, titlePage, src, alt, imgClass, target) {
  return (
    <div>

      <li>

       <img src={src} alt={alt} className={imgClass} />

        <FontAwesomeIcon icon={i}/>

        <a href={href} title={titlePage} className='domine-bold' target={target}>{titlePage}</a>

      </li>

    </div>
  );
};

export default LI;