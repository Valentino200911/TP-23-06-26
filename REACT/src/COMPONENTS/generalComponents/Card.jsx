function Card(cardTitle, src, alt, cardText, href) {
  return (
    <>
      <div className="card">
        <h3 className="domine-bold card_title">
          
          {/* {cardTitle} */}
          
        </h3>

        <img src={src} alt={alt} className="card_image" />

        <p className="cardtext">{cardText}</p>

        <a href={href} target="_blank">
          <button id="info">Más Información</button>
        </a>
      </div>
    </>
  );
}

export default Card;
