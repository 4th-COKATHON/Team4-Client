import React from "react";
import styled from "styled-components";
import StarCharacter from "../../assets/start_character.svg?react";
import StartIcon from "../../assets/start_icon.svg?react";
import ProfileIcon from "../../assets/profile_icon.svg?react";
import { LinearProgress } from "@mui/material";

const rate = 0.7;

const HomeSection1 = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === rate * 100) {
          return oldProgress;
        }
        return oldProgress + 10;
      });
    }, 300);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Wrapper>
      <TitleHeader>
        <h1>Twingle</h1>
        <ProfileIcon />
      </TitleHeader>
      <Main>
        <h2>도전에 대한 두려움이 없을 때 그것은 청춘</h2>
        <Progress>
          <ProgressDescription>
            <StartIcon />
            <span>LV. 03 청린이</span>
          </ProgressDescription>
          <StyledLinearProgress
            variant="determinate"
            value={progress}
            $color="#10C27B"
          />
        </Progress>
      </Main>
      <Character />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  padding: 0.6rem 1.2rem;
  margin-bottom: 1rem;
`;

const TitleHeader = styled.div`
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

const Main = styled.div`
  width: 14rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.3rem;

  > h2 {
    color: #1d1d1d;
    font-family: "Pretendard";
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2.4rem;
    word-break: keep-all;
  }
`;

const Progress = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

const ProgressDescription = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  > span {
    color: #10c27b;
    font-family: "Pretendard";
    font-size: 0.75rem;
    font-weight: 600;
    line-height: norma;
  }
`;

const StyledLinearProgress = styled(LinearProgress)`
  width: 10rem;
  background-color: #f4f4f4 !important;
  border-radius: 0.5rem;

  > span {
    background-color: ${({ $color }) => $color};
    border-radius: 0.5rem;
  }
`;

const Character = styled(StarCharacter)`
  position: absolute;
  top: 5rem;
  right: 1rem;
`;

export default HomeSection1;
