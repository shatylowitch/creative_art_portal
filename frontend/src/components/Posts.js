import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Carousel from "./Carousel";

function Posts() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const getPosts = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/posts`
      );
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="container-fluid mh-100">
      <div className="Hero-Section row-5 justify-content-center">
        <div className="gap-4 text-center col-12">
          <div className="col"></div>
          <Carousel />
          <div className="col"></div>
        </div>
        <div className="text-center mg-5 p-5">
          <h2 className="">Welcome To The Art Portal</h2>
          <h3>Share Your Art with the World!</h3>
          <h4 className="about-us-description">
            We are a community of artists from all around the world who are here
            to create, share, admire, and participate in the beauty of art. For
            Art is just an infinite amounts of expressions of ourselves. It
            holds the peaceful power to shape the minds of nations & change in
            time... the entire world!
          </h4>
        </div>
      </div>

      <div className="d-flex gap-2 mg-5 p-5 gap-5 justify-content-evenly">
        <div className="card">
          <img
            src="/images/dippyaman-nath-WTjoXtFZ2fw-unsplash.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body text-center">
            <h5 className="card-title">Photoshop</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button
              onClick={() => {
                navigate("/gallery/photoshop");
              }}
              className="btn btn-primary"
            >
              View More
            </button>
          </div>
        </div>

        <div className="card">
          <img
            src="/images/gradienta-el5ZXkPvd0o-unsplash.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body text-center">
            <h5 className="card-title">Illustrator</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button
              onClick={() => {
                navigate("/gallery/illustrator");
              }}
              className="btn btn-primary"
            >
              View More
            </button>
          </div>
        </div>

        <div className="card">
          <img
            src="/images/tim-mossholder-YMtLdvIQtu0-unsplash.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body text-center">
            <h5 className="card-title">Photography</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button
              onClick={() => {
                navigate("/gallery/photography");
              }}
              className="btn btn-primary"
            >
              View More
            </button>
          </div>
        </div>

        <div className="card">
          <img
            src="/images/elena-mozhvilo-girJ8wuVrCA-unsplash.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body text-center">
            <h5 className="card-title">Painting</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button
              onClick={() => {
                navigate("/gallery/painting");
              }}
              className="btn btn-primary"
            >
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
