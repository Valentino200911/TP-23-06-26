import Option from "./Option";

function Select({onChange, value}) {

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
          id="buisness"
          value={value}
          optionText="Razones comerciales"
          isDisabled={false}
          isSelected={false}
          onChange={onChange}
          />

          <Option 
          id="prom"
          value={value}
          optionText="Promoción"
          isDisabled={false}
          isSelected={false}
          onChange={onChange}
          />

          <Option
          id="problem" 
          value={value}
          optionText="Problemáticas"
          isDisabled={false}
          isSelected={false}
          onChange={onChange}
          />

          <Option
          id="suggest" 
          value={value}
          optionText="Sugerencia"
          isDisabled={false}
          isSelected={false}
          onChange={onChange}
          />

        </select>
      </div>
    </>
  );
}

export default Select;
