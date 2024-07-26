import React from "react";
import styled from "styled-components";
import useSWR from "swr";
import fetcher from "../../utils/fetcher";

const History = () => {
  const { data } = useSWR("/goals/finished", fetcher);

  const getRandomColor = () => {
    const getPastelValue = () => Math.floor(Math.random() * 127 + 128);
    const r = getPastelValue();
    const g = getPastelValue();
    const b = getPastelValue();
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  };

  return (
    <Wrapper>
      <Header>
        <span>달성 기록</span>
      </Header>
      <BoxWrapper>
        {data?.result?.goals.map((goal, index) => (
          <Box key={index} $color={getRandomColor()}>
            <img src={goal.image_url} />
            <span className="content">{goal.content}</span>
            <span className="date">{goal.dueDate}</span>
          </Box>
        ))}
      </BoxWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 1.8rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BoxWrapper = styled.div`
  gap: 1.5rem;
  margin: 1.8rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  > span {
    color: #2d2d2d;
    font-family: Pretendard;
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

const Box = styled.div`
  width: 8rem;
  height: 11rem;
  background-color: ${({ $color }) => $color};
  border-radius: 0.4rem;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  > img {
    width: 8rem;
    height: 9rem;
    flex-shrink: 0;
    border-radius: 0.25rem;
  }

  .content {
    color: #1d1d1d;
    font-family: "Pretendard";
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .date {
    color: #747474;
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

export default History;
