import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Form from "./Form";

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
    <div className="container-fluid mh-100 d-flex justify-content-center my-5 user-profile mw-100">
    <div>
      <Form />
    </div>
      
    </div>
  );
}

export default Profile;
