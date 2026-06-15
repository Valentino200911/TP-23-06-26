//Sería el equivalente a un Product.jsx

import useIndexNature from "../../hooks/nature/useIndexNature";
import GeneralError from "../generalComponents/GeneralError";
import GeneralLoading from "../generalComponents/GeneralLoading";

//Debido a errores de componetización de la Card, la maquetación se realizará temporalmente aquí

function Naturaleza() {
  const { error, loading, products } = useIndexNature();

  if (error) {
    return (
      <>
        <GeneralError />
      </>
    );
  }

  if (loading) {
    return (
      <>
        <GeneralLoading />
      </>
    );
  }

  return (
    <>
      <h2 className="faculty-glyphic-regular">Naturaleza</h2>

      <div className="card_container">
        {products.map((product) => (

          <div className="cardNature" key={product.id}>

            <h3 class="domine-bold card_title">{product.name}</h3>

            <h4 className="domine-bold cardSecondTitle">{product.binomialName}</h4>

            <p className="cardtext">{product.description} </p>

            <img src={product.image} alt={product.name} className="card_image " />

            <a href={product.info} target="_blank">

            <button id="info">Más Información</button>

            </a>






          </div>
        ))}

      </div>
    </>
  );
}

export default Naturaleza;
