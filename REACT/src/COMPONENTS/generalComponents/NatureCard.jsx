import { useNavigate } from "react-router-dom"
import Button from "./Button"
import Images from "./Images"

function NatureCard({key, cardTitleNature, cardSecondTitle, natureDescription, src, href, onClickEdit, onClickDelete}) {

  return (
          <>

            <h3 class="domine-bold cardTitleNature">{cardTitleNature}</h3>

            <h4 className="domine-bold cardSecondTitle">{cardSecondTitle}</h4>

            <p className="cardTextNature">{natureDescription} </p>

            <Images
              src={src}
              alt={cardTitleNature}
              className="cardImageNature" />

            <div className="buttonNatureContainer">

            <Button
            type="#"
            id="edit"
            buttonText="Editar"
            className="faculty-glyphic-regular"
            onClick={onClickEdit}
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
            onClick={onClickDelete}
            />

            </div>

          </>
  )
}

export default NatureCard