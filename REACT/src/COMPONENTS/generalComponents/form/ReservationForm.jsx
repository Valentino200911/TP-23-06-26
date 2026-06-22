import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import Input from "./Input";
import SelectorInput from "./SelectorInput";
import Textarea from "./Textarea";
import Button from "../Button";

function ReservationForm() {
  return (
    <>
      <form action="#" method="get" >

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

        <h4 className="faculty-glyphic-regular">Cabaña:</h4>

        <div className="selectorContainer textSelector">

          <SelectorInput nameId="Cabaña" name="Cabaña 1" value="1" />

          <SelectorInput nameId="Cabaña"name="Cabaña 2" value="2" />
          
        </div>

        <Input name="Fecha de Ingreso" id="Fecha de Ingreso" type="date" />

        <Input name="Fecha de Egreso" id="Fecha de Egreso" type="date" />

        <h4 className="faculty-glyphic-regular">Número de Pasajeros:</h4>

        <p class="warning">
          
          <FontAwesomeIcon
            class="fa-solid faTriangleExclamation warning"
            style="color: #b70d0d; background-color: rgb(21, 116, 209) ;"/>
          

          Verifique la Capacidad Máxima de cada Cabaña en el Apartado "Cabañas"
        </p>

        <div className="selectorContainer textSelector">

          <SelectorInput nameId="passangerNumber" name="0" value="0" />

          <SelectorInput nameId="passangerNumber" name="1" value="1" />

          <SelectorInput nameId="passangerNumber" name="2" value="2" />

          <SelectorInput nameId="passangerNumber" name="3" value="3" />

          <SelectorInput nameId="passangerNumber" name="4" value="4" />

          <SelectorInput nameId="passangerNumber" name="5" value="5" />

          <SelectorInput nameId="passangerNumber" name="6" value="6" />

        </div>

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

export default ReservationForm;
