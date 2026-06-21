
function Input({name, id, type, value, placeholder}) {
  return (
    <>

    <label htmlFor={name} className="faculty-glyphic-regular">{name}</label>
    
    <input  type={type} id={id} name={name} value={value} placeholder={placeholder} required className="faculty-glyphic-regular"/>
    
    </>
  )
}

export default Input