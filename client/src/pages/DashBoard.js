import React from "react";
import NavbarContainer from "../components/NavBar";
import Content from "../components/Content";
import { styled } from "styled-components";
import { list } from "../data/navbarItems";

const Dashboard = styled.div`
  display: flex;
  width: 100%;
`;

const DashBoard = () => {
  return (
    <Dashboard>
      <NavbarContainer navbarItems={list} />
      <Content />
    </Dashboard>
  );
};

export default DashBoard;
