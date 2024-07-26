import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import History from "./pages/History/History";
import Post from "./pages/Post/Post";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Footer from "./components/Footer";
import BucketBox from "./componets/BucketBox";
import styled from "styled-components";
import Header from "./components/Header";

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history/*" element={<History />} />
        <Route path="/post/*" element={<Post />} />
        <Route path="/register/*" element={<Register />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="signup/*" element={<Signup />} />
      </Routes>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 100vw;
`;

export default App;
