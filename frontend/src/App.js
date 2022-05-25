import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Posts from "./components/Posts";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Posts />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
