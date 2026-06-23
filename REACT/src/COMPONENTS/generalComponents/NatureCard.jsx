import { useNavigate } from "react-router-dom"
import Button from "./Button"

function NatureCard({key, cardTitleNature, cardSecondTitle, natureDescription, src, href}) {

  const navigate = useNavigate()

  const handleEditProduct = (event, bioelementId) => {
    event.stopPropagation()

    navigate(`/naturaleza/editor/${bioelementId}`)
  }

  return (
          <>

            <h3 class="domine-bold cardTitleNature">{cardTitleNature}</h3>

            <h4 className="domine-bold cardSecondTitle">{cardSecondTitle}</h4>

            <p className="cardTextNature">{natureDescription} </p>

            <img src={src} alt={cardTitleNature} className="cardImageNature" />


            <div className="buttonNatureContainer">


            <Button
            type="#"
            id="edit"
            buttonText="Editar"
            // onClick={(event)=>handleEditProduct(event, bioelement.id)}
            />

            <a href={href} target="_blank">

            <Button
            type="#"
            id="infoNature"
            buttonText="Más Información"
            className="faculty-glyphic-regular"
            />

            </a>

            <Button
            type="#"
            id="delete"
            buttonText="Borrar"
            className="faculty-glyphic-regular"
            // onClick={(event)=>handleEditProduct(event, bioelement.id)}
            />

            </div>

          </>
  )
}

export default NatureCard