import React from 'react'
import General from '../../../../CSS'

function Card(cardTitle, src, alt, cardText, href, buttonText) {
  return (
    <div>

        <div className='card'>

          <h3 className='domine-bold card_title'>{cardTitle}</h3>

          <img src= {src} alt={alt} class="card_image"/>

          <p className='cardtext'>{cardText}</p>

          <a href={href} target='blank' title={cardTitle}>

          <button id='info'>{buttonText}</button>

          </a>

        </div>

    </div>
  )
}

export default Card