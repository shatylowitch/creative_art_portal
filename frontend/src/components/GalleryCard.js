function GalleryCard({ id, caption, description, img, user, category }) {
  return (
    <>
      {/* <div className="container py-6 mt-5 mb-5">
        <div className="grid-wrapper col"> */}
      <div className="lc-block">
        <h2></h2>
        <img
          // className="img-fluid rounded rounded"
          className="gallery-card-img"
          src={img}
          alt=""
          loading="lazy"
        />
      </div>
      {/* </div>
      </div> */}
    </>
  );
}

export default GalleryCard;
