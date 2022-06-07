import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Profile() {
  const user = useSelector((state) => {
    return state.auth.user;
  });

  const [profile, setProfile] = useState();
  console.log(user);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/auth/profile/${user.id}`)

      .then((res) => setProfile(res.data))
      .catch((err) => console.log(err));
    console.log(profile);
  }, []);

  return (
    <div>
      <h1>Welcome back to your Profile!</h1>
    </div>
  );
}

export default Profile;
