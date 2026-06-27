import React from 'react'

function Option({value, isDisabled, optionText, isSelected}) {
  return (
    <>

    <option 
    value={value} 
    disabled={isDisabled ? true : false}
    selected={isSelected ? true : false}
    className='faculty-glyphic-regular'
    >{optionText}</option>
    
    </>
  )
}

export default Option