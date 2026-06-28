import React from 'react'

function Option({id, value, isDisabled, optionText, isSelected, onChange}) {
  return (
    <>

    <option
    id={id} 
    value={value} 
    disabled={isDisabled ? true : false}
    selected={isSelected ? true : false}
    onChange={onChange}
    className='faculty-glyphic-regular'
    >{optionText}</option>
    
    </>
  )
}

export default Option