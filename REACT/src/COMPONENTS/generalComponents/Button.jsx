
function Button({type, id, buttonText, className}) {
  return (
    <>
    
    <button type={type} id={id} className={className}>{buttonText}</button>

    </>
  )
}

export default Button