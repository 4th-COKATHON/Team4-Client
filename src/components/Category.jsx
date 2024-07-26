import React from "react";
import { styled } from "styled-components";

const Category = (props) => {

    return (
        <StyledDiv
            id={props.id}
            $selected={props.selected}
            onClick={props.onClick}
        >
            {props.children}
        </StyledDiv>
    );
};

const StyledDiv = styled.div`
    display: flex;
    width: 78px;
    height: 28px;
    margin: 0 1%;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 12px;
    color: ${({ $selected }) => ($selected ? "white" : "#A8A8A8")};
    background-color: ${({ $selected }) => ($selected ? "#10C27B" : "#ECECEC")};
    border-radius: 18px;
`

export default Category;
