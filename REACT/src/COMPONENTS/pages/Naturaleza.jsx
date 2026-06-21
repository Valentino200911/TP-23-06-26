//Sería el equivalente a un Product.jsx

import useGetNature from "../../hooks/nature/useGetNature";
import GeneralError from "../generalComponents/GeneralError";
import GeneralLoading from "../generalComponents/GeneralLoading";
import NatureCard from "../generalComponents/NatureCard";

function Naturaleza() {
  const { error, loading, bioelements } = useGetNature();

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

      <div className="cardContainer">

        {bioelements.map((bioelement) => (

          <div className="cardNature" key={bioelement.id}>

            <NatureCard

            cardTitleNature={bioelement.name} 
            cardSecondTitle={bioelement.binomialName}
            natureDescription={bioelement.description}
            src={bioelement.image}
            />

          </div>

          
        ))}

      </div>
    </>
  );
}

export default Naturaleza;
