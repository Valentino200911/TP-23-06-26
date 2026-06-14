import React from 'react'

function MediaList(href, target, src, alt) {
  return (
    <div>

    <li>

    <a href={href} target={target}>

    <img src={src} alt={alt} className='media'/>

    </a>

    </li>

    </div>
  )
}

export default MediaList