import Button from "../Button";
import Input from "./Input";
import Select from "./Select";
import Textarea from "./Textarea";

function ContactForm() {
  return (
    <>
      <form action="#" method="get">

        <Input
          name="Nombre y Apellido"
          id="Nombre y Apellido"
          type="text"
          placeholder="Escriba aquí"
        />

        <Input
          name="E-mail"
          id="E-mail"
          type="email"
          placeholder="Escriba aquí"
        />

        <Input
          name="Número Telefónico"
          id="Número Telefónico"
          type="number"
          placeholder="+54 9 123 4567890"
        />

        <Select />

        <Textarea
        id="Comentario"
        label="Comentario"
        placeholder="Escriba aquí"
        />

        <div className="buttonContainer">

        <Button
        type="submit"
        id="send"
        buttonText="Enviar"
        className="faculty-glyphic-regular"/>

        <Button
        type="reset"
        id="reset"
        buttonText="Limpiar"
        className="faculty-glyphic-regular"/>

        </div>        
      </form>
    </>
  );
}

export default ContactForm