
function Button({type, id, buttonText, className, onClick}) {
  //Revisar el onClick del button

  return (
    <>
    
    <button type={type} id={id} className={className} onClick={onClick}>{buttonText}</button>

    </>
  )
}

export default Button