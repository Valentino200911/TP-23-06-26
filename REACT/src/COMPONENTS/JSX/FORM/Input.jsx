import React from 'react'

function Input(id, label, type, className) {
  return (
    <>
    
    <label htmlFor={id} class="faculty-glyphic-regular">{label}</label>

    <input type="type" id={id} className={className} required placeholder='Escriba aquí'/>
    
    </>
  )
}

export default Input