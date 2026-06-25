import Button from "./Button"

function Card({cardTitle, src, alt, cardText, href}) {
  return (
    <>
      <div className="card">
        <h3 className="domine-bold cardTitle">{cardTitle} </h3>

        <img src={src} alt={cardTitle} className="cardImage" />

        <p className="cardText">{cardText}</p>

        <a href={href} target="_blank">
          
          <Button
          type="#"
          id="infoTuristicalCard"
          className="faculty-glyphic-regular"
          buttonText="Más Información"
          />
          
        </a>
      </div>
    </>
  );
}

export default Card;
