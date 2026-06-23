
function Button({type, id, buttonText, className}) {
  //Revisar el onClick del button

  return (
    <>
    
    <button type={type} id={id} className={className}>{buttonText}</button>

    </>
  )
}

export default Button