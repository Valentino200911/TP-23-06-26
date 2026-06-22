import Input from "../generalComponents/form/Input";
import usePostNature from "../../hooks/nature/usePostNature";
import Textarea from "../generalComponents/form/Textarea";
import Button from "../generalComponents/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Images from "../generalComponents/Images";

//Sería el equivalente a un EditProductPage.jsx
//Consideré que sería mejor tener el formulario controlado con inputs componetizados aquí en vez de en generalComponents/form

function Editor() {
  const [error, setError] = useState(null)

  const [form, setForm] = useState({
    name: "",
    binomialName: "",
    description: "",
    image: "",
    info: "",
  });



  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { id, value, type } = event.target;

    setForm({
      ...form,

      [id]: type === "number" ? parseInt(value) || 0 : value,
    });

    console.log(form);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const sucess = true;

    if (sucess) {
      setForm({
        name: "",
        binomialName: "",
        description: "",
        image: "",
        info: "",
      });

      navigate("/naturaleza");
    }
  };

  return (
    <>
      <h2 className="faculty-glyphic-regular">
        Editar los registros de Naturaleza
      </h2>

      <form onSubmit={handleFormSubmit}>
        <Input
          type="text"
          name="Nombre del Elemento"
          id="name"
          value={form.name}
          placeholder="Escriba aquí el nombre del elemento"
          onChange={handleInputChange}
        />

        <Input
          type="text"
          name="Nombre Binomial del elemento"
          id="binomialName"
          value={form.binomialName}
          placeholder="Escriba aquí el nombre binomial del elemento"
          onChange={handleInputChange}
        />

        <Textarea
          id="description"
          label="Descripción del elemento"
          placeholder="Escriba aquí la descripción del elemento"
          value={form.description}
          onChange={handleInputChange}
        />

        <Input
          type="text"
          name="URL e Imagen del elemento"
          id="image"
          value={form.image}
          placeholder="Escriba aquí la URL de la imagen del elemento"
          onChange={handleInputChange}
        />

        <div>

        <h4 className="faculty-glyphic-regular">Previsualización de la imagen (Insterte la URL)</h4>

        <div className="previewImageContainer">

        <Images
        src={form.image}
        alt={form.name}
        className="previewImage"
        />

        </div>
          
        </div>

        <Input
          type="text"
          name="URL y Más información sobre el elemento"
          id="info"
          value={form.info}
          placeholder="Escriba aquí la URL de la información del elemento"
          onChange={handleInputChange}
        />

        <div className="buttonContainer">
          <Button
            type="submit"
            id="send"
            buttonText="Editar elemento"
            className="faculty-glyphic-regular"
          />

          {error && (
            <h3 className="faculty-glyphic-regular warning">
              {error.message || error}
            </h3>
          )}

        </div>
      </form>
    </>
  );
}

export default Editor;
