function Select() {
    //Componetizar option

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

          <option value="#" disabled selected className="faculty-glyphic-regular">
            Seleccione una de estas opciones
          </option>

          <option value="buisness" className="faculty-glyphic-regular">
            Razones Comerciales
          </option>

          <option value="prom" className="faculty-glyphic-regular">
            Promoción
          </option>

          <option value="problem" className="faculty-glyphic-regular">
            Problemáticas
          </option>

          <option value="suggest" className="faculty-glyphic-regular">
            Sugerencias
          </option>
        </select>
      </div>
    </>
  );
}

export default Select;
