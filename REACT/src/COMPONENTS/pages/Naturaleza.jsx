//Sería el equivalente a un Product.jsx

import { useNavigate } from "react-router-dom";
import useGetNature from "../../hooks/nature/useGetNature";
import Button from "../generalComponents/Button";
import GeneralError from "../generalComponents/GeneralError";
import GeneralLoading from "../generalComponents/GeneralLoading";
import NatureCard from "../generalComponents/NatureCard";

function Naturaleza() {
  const { error, loading, bioelements } = useGetNature();

  const navigate = useNavigate()

  const handleCreateNature = () => {

    navigate(`/naturaleza/indice`)

  }

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

      <div className="cardContainer">

        {bioelements.map((bioelement) => (

          <div className="cardNature" key={bioelement.id}>

            <NatureCard
            cardTitleNature={bioelement.name} 
            cardSecondTitle={bioelement.binomialName}
            natureDescription={bioelement.description}
            src={bioelement.image}
            href={bioelement.info}
            />

          </div>
          
        ))}


      </div>

        <div className="buttonContainer">

          {/* Componetizar */}

          <button onClick={handleCreateNature} id="send" className="faculty-glyphic-regular">Indexar nuevo elemento</button>

        </div>
    </>
  );
}

export default Naturaleza;
