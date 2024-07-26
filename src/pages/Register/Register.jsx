import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import Category from "../../components/Category";
import BucketBox from "../../componets/BucketBox";

import bucketlistApi from "../../utils/bucketlistApi";
import getCategory from "../../utils/getCategory";

const Register = () => {
  const [category, setCategory] = useState("DEVELOPMENT");
  const [data, setData] = useState();
  const [checked, setChecked] = useState([]);

  function handleClick(event) {
    setCategory(event.target.id);
    fetchBucketList(event.target.id);
  }

  function handleAdd(index) {
    const newChecked = [...checked];
    let indexPosition = newChecked.indexOf(index);
    if (indexPosition !== -1) {
      newChecked.splice(indexPosition, 1);
    } else {
      newChecked.push(index);
    }
    setChecked(newChecked);
  }

  async function fetchBucketList(category) {
    await bucketlistApi(category)
      .then((data) => {
        setData(data.result.bucketLists);
      })
      .catch((error) => {
        console.error("Failed to fetch bucketlist: ", error);
      });
  }

  useEffect(() => {
    fetchBucketList(category);
  }, [category]);

  return (
    <RegisterWrapper>
      <CategoryNav>
        <Category
          id="DEVELOPMENT"
          selected={category === "DEVELOPMENT"}
          onClick={handleClick}
        >
          개인성장
        </Category>
        <Category
          id="CHALLENGE"
          selected={category === "CHALLENGE"}
          onClick={handleClick}
        >
          탐험도전
        </Category>
        <Category
          id="SOCIAL"
          selected={category === "SOCIAL"}
          onClick={handleClick}
        >
          사회관계
        </Category>
        <Category
          id="CULTURE"
          selected={category === "CULTURE"}
          onClick={handleClick}
        >
          문화여가
        </Category>
      </CategoryNav>
      <BucketListCardList>
        {data &&
          data.map((bucketListItem, index) => (
            <BucketBox
              key={index}
              imageUrl={bucketListItem.image_url}
              title={bucketListItem.content}
              checked={checked.includes(index)}
              handleAdd={() => handleAdd(index)}
              category={getCategory(bucketListItem.category)}
            />
          ))}
      </BucketListCardList>
    </RegisterWrapper>
  );
};

const RegisterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CategoryNav = styled.div`
  display: flex;
  width: 100%;
  height: 48px;
  align-items: center;
  justify-content: center;
`;

const BucketListCardList = styled.div`
  display: grid;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
  grid-template-columns: 164px 164px;
  grid-auto-rows: minmax(173px, auto);
  gap: 3%;
  grid-gap: 3%;
`;

export default Register;
