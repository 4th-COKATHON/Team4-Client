import React, { useState } from "react";
import { styled } from "styled-components";
import Category from "../../components/Category";

const Register = () => {
  const [category, setCategory] = useState("growth");
  function handleClick(event) {
    setCategory(event.target.id);
  }
  return (
    <>
      <CategoryNav>
        <Category id="growth" selected={category === "growth"} onClick={handleClick}>개인성장</Category>
        <Category id="challenge" selected={category === "challenge"} onClick={handleClick}>탐험도전</Category>
        <Category id="relationship" selected={category === "relationship"} onClick={handleClick}>사회관계</Category>
        <Category id="leisure" selected={category === "leisure"} onClick={handleClick}>문화여가</Category>
      </CategoryNav>
      <BucketListCardList>
        <div style={{backgroundColor: "black", width: "164px", height: "173px"}}></div>
        <div style={{backgroundColor: "black", width: "164px", height: "173px"}}></div>
        <div style={{backgroundColor: "black", width: "164px", height: "173px"}}></div>
        <div style={{backgroundColor: "black", width: "164px", height: "173px"}}></div>
        <div style={{backgroundColor: "black", width: "164px", height: "173px"}}></div>
        <div style={{backgroundColor: "black", width: "164px", height: "173px"}}></div>
      </BucketListCardList>
    </>
  );
};

const CategoryNav = styled.div`
  display: flex;
  width: 100%;
  height: 48px;
  align-items: center;
  justify-content: center;
`

const BucketListCardList = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 164px 164px;
  grid-auto-rows: minmax(173px, auto);
  gap: 3%;
  grid-gap: 3%;
`;

export default Register;
