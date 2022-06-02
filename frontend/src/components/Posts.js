import { useState, useEffect } from "react";
import axios from "axios";

function Posts() {
  const [posts, setPosts] = useState([]);

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
      <div className="Hero-Section">
        <div className=" gap-4">
          <h2 className="">Welcome To The Art Portal</h2>
          <h3>Share Your Art with the World!</h3>
        </div>
        <div>
          <h4 className="about-us-description">
            We are a community of artists from all around the world who are here
            to create, share, admire, and participate in the beauty of art. For
            Art is just an infinite amounts of expressions of ourselves. It
            holds the peaceful power to shape the minds of nations & change in
            time... the entire world!
          </h4>
        </div>
      </div>

      <div className="Gallery-Section">

      </div>

      <div className="Gallery-Section"></div>
    </div>
  );
}

export default Posts;
