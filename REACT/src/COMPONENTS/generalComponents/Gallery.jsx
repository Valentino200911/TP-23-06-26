import Images from "./Images"

function Gallery({title, description}) {
  return (
    <>
    <h3 className="faculty-glyphic-regular">{title}</h3>

    <div className="divstyle">

        <Images
        src=""
        alt=""
        className="picture"
        />

        <Images
        src=""
        alt=""
        className="picture"
        />

        <Images
        src=""
        alt=""
        className="picture"
        />

        <Images
        src=""
        alt=""
        className="picture"
        />

    </div>

    <p className="faculty-glyphic-regular spec_title">{description}</p>
    
    </>
  )
}

export default Gallery