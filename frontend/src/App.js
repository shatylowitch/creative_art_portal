import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Posts from "./components/Posts";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";
import Protected from "./components/Protected";
import Gallery from "./components/Gallery";
import Artists from "./components/Artists";

function App() {
  return (
    <div className="mh-100">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Posts />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="protected" element={<Protected />}>
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="gallery" element={<Gallery />} />
          <Route path="artists" element={<Artists />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
