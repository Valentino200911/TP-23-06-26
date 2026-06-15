import useIndexNature from "../../hooks/nature/useIndexNature"

function GeneralError() {

  const {error, loading, product} = useIndexNature()

  return (
    <>
    <h2 className="faculty-glyphic-regular warning loadingElements">ERROR AL TRAER LOS ELEMENTOS</h2>

    <p className="loadingElements warning">{error?.message || String(error)}</p>
    </>
  )
}

export default GeneralError