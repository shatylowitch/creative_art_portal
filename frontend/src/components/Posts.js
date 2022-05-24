import { useState, useEffect } from "react";
import axios from "axios";

function Posts() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/posts");
      setPosts(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    console.log(1);
    getPosts();
  }, []);
  return (
    <div>
      {posts.map((element) => {
        return <p key={element._id}> {element._id}</p>;
      })}
      <h1>Hi</h1>
    </div>
  );
}

export default Posts;
