import Card from "../generalComponents/Card";

function ServiciosTuristicos() {
  return (
    <>
      <h3 className="faculty-glyphic-regular">Ubicación</h3>

      <section>
        <p className="faculty-glyphic-regular">
          Valle del San Javier, Ruta Provincial 340, Kilómetro 16.
        </p>

        <div className="map_container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2847.9891692490146!2d-65.39125697974957!3d-26.73956627199294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94226bb4295448a9%3A0x287d041a047b8920!2sCaba%C3%B1as%20Aguaribay!5e1!3m2!1ses-419!2sar!4v1776812145365!5m2!1ses-419!2sar"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="embed_map"/>
        </div>
      </section>

      <section>
        <h3 className="faculty-glyphic-regular">Servicios Turísticos</h3>

        <div className="card_container">

          <Card cardTitle="A" src="A" alt="A" cardText="A" href="https://www.argentina.gob.ar/cultura/monumentos/cristo-redentor-tucuman"/>

          <Card cardTitle="A" src="A" alt="A" cardText="A" href="A"/>

          <Card cardTitle="A" src="A" alt="A" cardText="A" href="A"/>

          <Card cardTitle="A" src="A" alt="A" cardText="A" href="A"/>

        </div>

        <ul className="activities_list">
          
            <li className="faculty-glyphic-regular">Senderismo</li>

            <li className="faculty-glyphic-regular">Ciclismo</li>

            <li className="faculty-glyphic-regular">Equitación (Costo Adicional)</li>

        </ul>
      </section>
    </>
  );
}

export default ServiciosTuristicos