import Images from "./Images"

function GeneralLoading() {
  return (
    <>
    <h2 className="faculty-glyphic-regular loadingElements ">CARGANDO, POR FAVOR ESPERE</h2>

    <Images
    src="./loadingImage.gif"
    className="loadingElements"
    alt="CARGANDO, POR FAVOR ESPERE"
    />

    </>

  )

}

export default GeneralLoading