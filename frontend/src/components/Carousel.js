function Carousel() {
  return (
    <div
      id="carouselDark"
      className="carousel carousel-dark slide w-50 my-5 mx-auto"
      data-bs-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-bs-target="#carouselDark"
          data-bs-slide-to="0"
          className="active"
        ></li>
        <li data-bs-target="#carouselDark" data-bs-slide-to="1"></li>
        <li data-bs-target="#carouselDark" data-bs-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="/images/joshua-coleman-LboV5Qpqm1E-unsplash.jpg"
            className="d-block w-100 h-50"
            alt="Slide 1"
          />
          <div className="carousel-caption d-none d-sm-block">
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="/images/siora-photography-fz_aFtsHOWQ-unsplash.jpg"
            className="d-block w-100 h-50"
            alt="Slide 2"
          />
          <div className="carousel-caption d-none d-sm-block">
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="/images/tim-mossholder-L7LF88Dzhus-unsplash.jpg"
            className="d-block w-100 h-50"
            alt="Slide 3"
          />
          <div className="carousel-caption d-none d-sm-block">
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselDark"
        role="button"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselDark"
        role="button"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  );
}

export default Carousel;
