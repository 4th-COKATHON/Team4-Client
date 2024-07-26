import React from "react";
import HomeSection1 from "./HomeSection1";
import styled from "styled-components";
import HomeSection2 from "./HomeSection2";

const Home = () => {
  return (
    <>
      <HomeSection1 />
      <SplitBar />
      <HomeSection2 />
    </>
  );
};

const SplitBar = styled.div`
  width: 100%;
  height: 0.8rem;
  background: #f4f4f4;
`;

export default Home;
