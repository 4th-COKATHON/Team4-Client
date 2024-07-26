import React from "react";
import styled from "styled-components";
import BlinkStarIcon from "../../assets/star_blink_icon.svg?react";
import StarIcon from "../../assets/start_icon.svg?react";
import calulateDueDate from "../../utils/calculateDueDate";
import dayjs from "dayjs";

const myBucketList = [
  { title: "여행 가기", dueDate: "2024-07-31" },
  { title: "책 읽기", dueDate: "2024-08-31" },
  { title: "운동하기", dueDate: "2024-09-30" },
];

const HomeSection2 = () => {
  const getDuaDateString = (dueDate) => {
    return dayjs(dueDate).format("YYYY.MM.DD");
  };

  return (
    <Wrapper>
      <Header>
        <HeaderTitle>
          <BlinkStarIcon />
          <span>나의 버킷리스트</span>
        </HeaderTitle>
        <ViewAll>
          <span>전체 보기</span>
          <span className="arrow">&gt;</span>
        </ViewAll>
      </Header>
      <BucketWrapper>
        {myBucketList.map((bucket, index) => (
          <BucketBox key={index}>
            <DueDateIcon>
              <span>D-{calulateDueDate(bucket.dueDate)}</span>
            </DueDateIcon>
            <BucketTitle>{bucket.title}</BucketTitle>
            <BucketDay>
              <StarIcon />
              <span>{getDuaDateString(bucket.dueDate)}</span>
            </BucketDay>
          </BucketBox>
        ))}
      </BucketWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 1.8rem 1rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  > span {
    display: flex;
    align-items: center;
    height: 100%;
    color: #2d2d2d;
    font-family: "Pretendard";
    font-size: 1.375rem;
    font-weight: 700;
  }
`;

const ViewAll = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  > span {
    color: #b4b4b4;
    font-family: "Pretendard";
    font-size: 0.75rem;
    font-weight: 600;
  }

  .arrow {
    font-size: 1.125rem;
  }
`;

const BucketWrapper = styled.div`
  width: 100%;
  gap: 1.5rem;
  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
`;

const BucketBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 8rem;
  height: 4rem;
  padding: 1rem;
  gap: 0.4rem;
  border-radius: 1.125rem;
  border: 0.5px solid #f0f0f0;
  background: #fff;
  box-shadow: 4px 4px 12.5px 0px rgba(0, 0, 0, 0.05);
`;

const DueDateIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.4rem;
  height: 1.2rem;
  border-radius: 0.6rem;
  background: #10c27b;

  > span {
    color: #fffbfb;
    font-family: "Pretendard";
    font-size: 0.75rem;
    font-weight: 600;
  }
`;

const BucketTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  color: #2d2d2d;
  font-family: "Pretendard";
  font-size: 1rem;
  font-weight: 700;
`;

const BucketDay = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  > svg {
    > path {
      fill: #fba603;
    }
  }

  span {
    color: #2d2d2d;
    font-family: "Pretendard";
    font-size: 0.75rem;
    font-weight: 600;
  }
`;

export default HomeSection2;
