import React from "react";
import styled from "styled-components";
import CheckIcon from "../assets/check_icon.svg?react";
import PlusIcon from "../assets/plus_icon.svg?react";

// eslint-disable-next-line react/prop-types
const BucketBox = ({ imageUrl, title, checked, handleAdd }) => {
  return (
    <BoxWrapper>
      <img
        src={
          imageUrl ||
          "https://cotatos3.s3.ap-northeast-2.amazonaws.com/session/256f22ce-ab12-46a2-ad7c-a15502bff026"
        }
      />
      <Description>
        <span className="title">{title || "제목"}</span>
        <Icons>
          {checked && <CheckIcon />}
          <PlusIcon onClick={handleAdd} />
        </Icons>
      </Description>
    </BoxWrapper>
  );
};

const BoxWrapper = styled.div`
  width: 10rem;
  height: 9.6rem;
  border-radius: 1rem;
  background-color: #f0f0f0;

  img {
    width: 100%;
    height: 7rem;
    border-radius: 1rem;
  }
`;

const Description = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.2rem;
  margin: 0.2rem 0.6rem;

  .title {
    font-family: "Pretendard";
    font-size: 1rem;
    font-weight: 500;
  }
`;

const Icons = styled.span`
  display: flex;
  gap: 0.2rem;
`;

export default BucketBox;
