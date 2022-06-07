import Profile from "./Profile";
import UserCard from "./UserCard";

function ProfileLayout() {
  return (
    <div className="container-fluid mh-100">
      <Profile />
      <UserCard />
    </div>
  );
}

export default ProfileLayout;
