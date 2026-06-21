import Button from "./Button"

function NatureCard({key, cardTitleNature, cardSecondTitle, natureDescription, src, href}) {
  return (
          <>

            <h3 class="domine-bold cardTitleNature">{cardTitleNature}</h3>

            <h4 className="domine-bold cardSecondTitle">{cardSecondTitle}</h4>

            <p className="cardTextNature">{natureDescription} </p>

            <img src={src} alt={cardTitleNature} className="cardImageNature " />

            <a href={href} target="_blank">

            <Button
            type="#"
            id="infoNature"
            buttonText="Más Información"
            />

            </a>

            {/* <button id="">Editar</button>

            <button id="">Eliminar</button> */}

          </>
  )
}

export default NatureCard