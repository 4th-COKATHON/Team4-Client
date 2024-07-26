import React from "react";
import styled from "styled-components";
import { Tabs, Tab } from "@mui/material";
import BucketBox from "../../componets/BucketBox";
import useSWR from "swr";
import fetcher from "../../utils/fetcher";
import PostModal from "./PostModal";
import getCategory from "../../utils/getCategory";
import api from "../../api";

const myBucketList = [
  { title: "한달동안 책 읽기", category: "개인성장", dueDate: "2024-07-30" },
  { title: "한달동안 책 읽기", category: "개인성장", dueDate: "2024-07-30" },
];

const Post = () => {
  const { data: unfinish } = useSWR("/goals", fetcher);
  const { data: finished } = useSWR("/goals/finished", fetcher);
  const [activeTab, setActiveTab] = React.useState(0);
  const [selectedBucket, setSelectedBucket] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [imageUrlList, setImageUrlList] = React.useState([]);

  const handleBucketClick = (bucket) => {
    setSelectedBucket(bucket);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Wrapper>
      <TabsWrapper>
        <StyledTabs
          value={activeTab}
          textColor="464646"
          onChange={() => setActiveTab((activeTab + 1) % 2)}
        >
          <Tab label="달성 중" />
          <Tab label="달성 완료" />
        </StyledTabs>
      </TabsWrapper>
      <BucketListWrapper>
        {activeTab === 0
          ? unfinish?.result.goals.map((bucket, index) => {
              return (
                <div key={index} onClick={() => handleBucketClick(bucket)}>
                  <BucketBox
                    title={bucket.content}
                    dueDate={bucket.dueDate}
                    category={getCategory(bucket.category)}
                  />
                </div>
              );
            })
          : finished?.result.goals.map((bucket, index) => {
              return (
                <div key={index} onClick={() => handleBucketClick(bucket)}>
                  <BucketBox
                    title={bucket.content}
                    dueDate={bucket.dueDate}
                    category={getCategory(bucket.category)}
                  />
                </div>
              );
            })}
      </BucketListWrapper>
      <PostModal open={isModalOpen} bucket={selectedBucket} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const TabsWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 4rem;
`;

const StyledTabs = styled(Tabs)`
  width: 100%;
  height: 100%;

  .MuiTabs-indicator {
    background-color: #10c27b;
  }

  > div {
    display: flex;
    justify-content: center;
    width: 100%;

    button {
      margin: 0.4rem;
      font-family: "Pretendard";
      color: #464646;
      font-size: 0.875rem;
      font-weight: 600;
    }
  }
`;

const BucketListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.6rem;
  padding: 1.6rem 1rem;
`;

export default Post;
