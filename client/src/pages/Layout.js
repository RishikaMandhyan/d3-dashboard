import React from "react";
import NavbarContainer from "../components/NavBar";
import { Header } from "../components/Header";
import { styled } from "styled-components";
import { list } from "../data/navbarItems";

const Master = styled.div`
  display: flex;
  width: 100%;
`;

const RightContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #fafafa;
`;

const Layout = (props) => {
  return (
    <Master>
      <NavbarContainer navbarItems={list} />
      <RightContent>
        <Header />
        {props.children}
      </RightContent>
    </Master>
  );
};

export default Layout;
