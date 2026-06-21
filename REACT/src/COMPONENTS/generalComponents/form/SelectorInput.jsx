
function SelectorInput({name, value,nameId}) {
  return (
    <>

        <label htmlFor={name} className="faculty-glyphic-regular">{name}</label>

        <input
            type="radio"
            id={name}
            name={nameId}
            value={value}
            className="selector faculty-glyphic-regular"
            required
        />    
    
    </>
  )
}

export default SelectorInput