import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import History from "./pages/History/History";
import Post from "./pages/Post/Post";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history/*" element={<History />} />
        <Route path="/post/*" element={<Post />} />
        <Route path="/register/*" element={<Register />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="signup/*" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
