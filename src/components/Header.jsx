import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <Container>
      <a href="index.html">
        <img src="images/logo.svg" alt="Tesla logo" />
      </a>

      <Menu>
        <a href="#">Model S</a>

        <a href="#">Model X</a>

        <a href="#">Model Y</a>

        <a href="#">Model 3</a>
      </Menu>

      <RightMenu>
        <a href="#">Shop</a>

        <a href="#">Tesla Account</a>

        <CustomMenu />
      </RightMenu>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
