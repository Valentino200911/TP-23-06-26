import Option from "./Option";

function Select() {

  return (
    <>
      <div className="formGroup">

        <h4 className="faculty-glyphic-regular">Motivo de Contacto</h4>
        
        <select
          name="reason"
          id="reason"
          required
          className="faculty-glyphic-regular">

          <label for="reason">Motivo de Contacto</label>

          <Option 
          value="#"
          optionText="Seleccione una de las siguientes opciones"
          isDisabled={true}
          isSelected={true}
          />

          <Option 
          value="buisness"
          optionText="Razones comerciales"
          isDisabled={false}
          isSelected={false}
          />

          <Option 
          value="prom"
          optionText="Promoción"
          isDisabled={false}
          isSelected={false}
          />

          <Option 
          value="problem"
          optionText="Problemáticas"
          isDisabled={false}
          isSelected={false}
          />

          <Option 
          value="suggest"
          optionText="Sugerencia"
          isDisabled={false}
          isSelected={false}
          />

        </select>
      </div>
    </>
  );
}

export default Select;
