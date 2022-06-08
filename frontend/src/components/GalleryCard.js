function GalleryCard({ id, caption, description, img, user, category }) {
  return (
    <>
      {/* <div className="container py-6 mt-5 mb-5">
        <div className="grid-wrapper col"> */}

      <div className="card text-center">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{caption}</h5>
          <p className="card-text">{description}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>

      {/* <div className="lc-block">
        <h2>{caption}</h2>
        <img
          // className="img-fluid rounded rounded"
          className="gallery-card-img"
          src={img}
          alt=""
          loading="lazy"
        />
        <p>{description}</p>
      </div> */}
      {/* </div>
      </div> */}
    </>
  );
}

export default GalleryCard;
