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
    <div>
      {posts.map((element) => {
        return <p key={element._id}> {element._id}</p>;
      })}
      <h1>This is our App</h1>
    </div>
  );
}

export default Posts;
