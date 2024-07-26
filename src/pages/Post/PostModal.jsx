/* eslint-disable react/prop-types */
import { Modal } from "@mui/material";
import React from "react";
import styled from "styled-components";
import api from "../../api";

const PostModal = ({ open, bucket }) => {
  const [date, setDate] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const [imageFile, setImageFile] = React.useState(null);
  const [record, setRecord] = React.useState("");

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("upload", imageFile);

    api
      .patch(`/goals/${bucket.id}/achievements`, formData)
      .then((res) => {
        console.log(res);
        location.reload();
      })
      .catch((err) => console.error(err));
  };

  return (
    <Modal open={open}>
      <ModalConatiner>
        <ModalHeader>나만의 버킷리스트를 완성해보세요!</ModalHeader>
        <CategoryIconWrapper>
          <CategoryIcon $active={bucket?.category === "DEVELOPMENT"}>
            성장
          </CategoryIcon>
          <CategoryIcon $active={bucket?.category === "CHALLENGE"}>
            탐험
          </CategoryIcon>
          <CategoryIcon $active={bucket?.category === "SOCIAL"}>
            관계
          </CategoryIcon>
          <CategoryIcon $active={bucket?.category === "CULTURE"}>
            문화
          </CategoryIcon>
        </CategoryIconWrapper>
        <FormWrapper>
          <Form>
            <span>버킷리스트 제목</span>
            <input value={bucket?.content} readOnly={true} />
          </Form>
          <Form>
            <span>날짜</span>
            <input
              placeholder="날짜를 입력하세요."
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Form>
        </FormWrapper>
        <ImageWrapper>
          <ImageForm>
            <span>목표 사진</span>
            {imageUrl && <img src={imageUrl} />}
            {!imageUrl && <label htmlFor="upload">업로드</label>}
            <input
              type="file"
              id="upload"
              onChange={(e) => {
                const file = e.target.files[0];
                setImageUrl(URL.createObjectURL(file));
                setImageFile(file);
              }}
            />
          </ImageForm>
          <FormGoal>
            <span>활동 기록</span>
            <input
              placeholder="활동 기록을 적어주세요."
              value={record}
              onChange={(e) => setRecord(e.target.value)}
            />
          </FormGoal>
        </ImageWrapper>
        <Upload onClick={handleUpload}>
          <span>저장</span>
        </Upload>
      </ModalConatiner>
    </Modal>
  );
};

const ModalConatiner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 18rem;
  height: 28em;
  border-radius: 1.125rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2rem 1.5rem;
`;

const ModalHeader = styled.div`
  color: #000;
  text-align: center;
  font-family: "Pretendard";
  font-size: 1.3rem;
  font-weight: 600;
`;

const CategoryIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.4rem;
  margin-top: 1rem;
`;

const CategoryIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.6875rem;
  height: 1.75rem;
  flex-shrink: 0;
  border-radius: 1.125rem;
  background: ${({ $active }) => ($active ? "#10c27b" : "#e0e0e0")};
  color: #fff;
  font-family: "Pretendard";
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  > span {
    color: #464646;
    font-family: "Pretendard";
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  > input {
    width: 16.1875rem;
    height: 2.3125rem;
    flex-shrink: 0;
    border-radius: 0.625rem;
    background: #f6f6f6;
    border: none;
    padding: 0 0.8rem;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 1.5rem;
`;

const ImageForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  > span {
    color: #464646;
    font-family: "Pretendard";
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  > img {
    width: 4em;
    height: 4rem;
    border-radius: 0.6rem;
  }

  > input {
    display: none;
  }

  > label {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 4px solid #e0e0e0;
    border-radius: 0.6rem;
    width: 4rem;
    height: 4rem;
  }
`;

const FormGoal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-left: 1.5rem;

  > span {
    color: #464646;
    font-family: "Pretendard";
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  > input {
    width: 10rem;
    height: 6rem;
    flex-shrink: 0;
    border-radius: 0.625rem;
    background: #f6f6f6;
    border: none;
    padding: 0 0.8rem;
  }
`;

const Upload = styled.div`
  width: 4.375rem;
  height: 1.9375rem;
  flex-shrink: 0;
  border-radius: 1.125rem;
  background: #10c27b;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  > span {
    color: #fff;
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

export default PostModal;
