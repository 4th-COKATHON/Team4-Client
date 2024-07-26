import React from "react";
import styled from "styled-components";
import ProfileIcon from "../assets/profile_icon.svg?react";

const Header = () => {
  return (
    <TitleHeader>
      <h1>Twingle</h1>
      <ProfileIcon />
    </TitleHeader>
  );
};

const TitleHeader = styled.div`
  padding: 1rem;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > h1 {
    color: #10c27b;
    font-family: Pretendard;
    font-size: 2rem;
    font-weight: 800;
  }
`;

export default Header;
