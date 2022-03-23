import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);

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

        <CustomMenu onClick={() => setBurgerOpen(!burgerOpen)} />
      </RightMenu>

      <BurgerNav show={burgerOpen}>
        <CustomCloseIcon onClick={() => setBurgerOpen(!burgerOpen)} />

        <li>
          <a href="#">Existing Inventory</a>
        </li>

        <li>
          <a href="#">Used Inventory</a>
        </li>

        <li>
          <a href="#">Trade-in</a>
        </li>

        <li>
          <a href="#">Cypertruck</a>
        </li>

        <li>
          <a href="#">Roadaster</a>
        </li>
      </BurgerNav>
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
  z-index: 1;
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

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  width: 300px;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  transform: ${({ show }) => (show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;

const CustomCloseIcon = styled(CloseIcon)`
  align-self: flex-end;
  cursor: pointer;
`;
