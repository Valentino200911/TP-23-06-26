import useGetNature from "../../../hooks/nature/useGetNature"

function GeneralError() {

  const {error, loading, product} = useGetNature()

  return (
    <>
    <h1 className="faculty-glyphic-regular warning loadingElements">ERROR AL TRAER LOS ELEMENTOS</h1>

    <p className="loadingElements faculty-glyphic-regular warning">{error?.message || String(error)}</p>
    </>
  )
}

export default GeneralError