function CTA() {
  return (
    <div className="container text-center py-4 py-md-6">
      <div
        className="lc-block card border-0 bg-dark text-center rounded p-4 p-lg-6"
        style={{
          background:
            "url (http://cdn.livecanvas.com/media/backgrounds/fffuelco/ssscribble.svg)",
          backgroundPosition: "center / cover no-repeat",
        }}
      >
        <div className="row card-body mb-3 mb-lg-4">
          <div className="col-xl-11 col-xxl-9 mx-auto text-white">
            <div className="lc-block mb-4">
              <div editable="rich">
                <p className="">JOIN OUR COMMUNITY</p>
              </div>
            </div>
            <div className="lc-block">
              <h3 editable="inline" className="fw-bold display-6">
                We are{" "}
                <span className="lc-block position-relative">
                  a community{" "}
                  <img
                    className="position-absolute top-100 start-0 mt-n1"
                    src="https://cdn.livecanvas.com/media/underline/white_underline5.svg"
                  />
                </span>{" "}
                of over 5000+ clients. Join us now and share your art with the
                world!
              </h3>
            </div>
          </div>
        </div>
        <div className="lc-block">
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}

export default CTA;
