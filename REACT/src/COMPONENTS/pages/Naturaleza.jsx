//Sería el equivalente a un Product.jsx

import { useNavigate } from "react-router-dom";
import useGetNature from "../../hooks/nature/useGetNature";
import Button from "../generalComponents/Button";
import GeneralError from "../generalComponents/GeneralError";
import GeneralLoading from "../generalComponents/GeneralLoading";
import NatureCard from "../generalComponents/NatureCard";
import useDeleteNature from "../../hooks/nature/useDeleteNature";

function Naturaleza() {
  const { error, loading, bioelements } = useGetNature();
  const { error: deleteError, deleteNature } = useDeleteNature();

  const navigate = useNavigate();

  //Los handle se escriben aquí debido a que NatureCard.jsx y Button.jsx son componentes, la acción se dispara aquí

  const handleCreateNature = () => {
    navigate(`/naturaleza/indice`);
  };

  const handleEditNature = (event, bioelementId) => {
    event.stopPropagation();

    navigate(`/naturaleza/editor/${bioelementId}`);
  };

  const handleDeleteNature = async (event, bioelementId) => {

    event.stopPropagation();

    if (
      window.confirm("¿Desea eliminar el producto?, el borrado será permanente")
    ) {
      const response = await deleteNature(bioelementId);

      console.log(response);

      if (response) {
        window.location.reload();

      }
      return;
    }
    if (deleteError) {
      return (
        <>
        
        <GeneralError />
        
        </>
      )
    }
  };

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
      <div className="buttonContainer">
        <Button
          type="#"
          id="send"
          className="faculty-glyphic-regular"
          onClick={handleCreateNature}
          buttonText="Indexar nuevo elemento"
        />
      </div>

      <div className="cardContainer">
        {bioelements.map((bioelement) => (
          <div className="cardNature" key={bioelement.id}>
            <NatureCard
              cardTitleNature={bioelement.name}
              cardSecondTitle={bioelement.binomialName}
              natureDescription={bioelement.description}
              src={bioelement.image}
              href={bioelement.info}
              onClickEdit={(event) => handleEditNature(event, bioelement.id)}
              onClickDelete={(event) => handleDeleteNature(event, bioelement.id)
              }
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Naturaleza;
