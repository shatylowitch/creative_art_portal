import axios from "axios";
import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((state) => {
    return state.auth.user;
  });

  axios.get(`http://localhost:3000/users/${user.id}`);
  return <div>Email: {user.email}</div>;
}

export default Profile;
