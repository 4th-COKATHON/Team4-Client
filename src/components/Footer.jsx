import React from "react";
import { styled } from "styled-components"
import { NavLink } from "react-router-dom";

import HomeIcon from "../assets/HomeIcon.svg?react";
import RegisterIcon from "../assets/RegisterIcon.svg?react";
import PostIcon from "../assets/PostIcon.svg?react";
import HistoryIcon from "../assets/HistoryIcon.svg?react";

const Footer = () => {

    return (
        <NavigationBar>
            <StyledNavLink to="/">
                <HomeIcon />
                홈
            </StyledNavLink>
            <StyledNavLink to="/register">
                <RegisterIcon />
                등록
            </StyledNavLink>
            <StyledNavLink to="/post">
                <PostIcon />
                달성
            </StyledNavLink>
            <StyledNavLink to="/history" value="history">
                <HistoryIcon />
                기록
            </StyledNavLink>
        </NavigationBar>
    );
};

const NavigationBar = styled.nav`
    display: flex;
    width: 100%;
    height: 80px;
    background-color: white;
    position: fixed;
    bottom: 0;
`

const StyledNavLink = styled(NavLink)`
    display: flex;
    width: 25%;
    align-items: center;
    justify-content: center;
    text-align: justify;
    flex-direction: column;
    text-decoration: none;
    text-align: center;
    font-size: 10px;
    color: #000000;
    svg {
        padding: 4.57px;
    }
    &.active {
        color: #10C27B;
        svg {
            fill: #10C27B;
        }
    }
`


export default Footer;
