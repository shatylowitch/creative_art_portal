import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Form from "./Form";
import AboutYou from "./AboutYou";
import DownloadAppBtns from "./DownloadAppBtns";

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
    <>
      <div className="Greeting m-5">
        <AboutYou profile={profile} />
      </div>
      <div className="container-fluid mh-100 d-flex justify-content-center my-5 user-profile mw-100">
        <div>
          <h1 className="text-center mt-3 my-3 Upload">Upload Some Art.</h1>
          <Form />
        </div>
      </div>
      <div>
        <DownloadAppBtns />
      </div>
    </>
  );
}

export default Profile;
