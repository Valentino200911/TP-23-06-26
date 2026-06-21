
function Button({type, id, buttonText, className}) {
  return (
    <>
    
    <div>

    <button type={type} id={id} className={className}>{buttonText}</button>

    </div>

    </>
  )
}

export default Button