import styled from "styled-components";
import Button from "../Button";

const Container = styled.div`
  display: block;
  height: 100vh;
  background-color: white;
`;

const Header = styled.div`
  position: fixed;
  z-index: 1000;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 8px 0;
`;

const Title = styled.h1`
  margin-left: 24px;
  font-size: 16px;
  font-weight: 600;
  color: #ff3b9d;
`;

const HeaderButton = styled(Button)`
  margin-right: 24px;
  padding: 4px;
  width: 64px;
  background-color: rgba(64, 87, 109, 0.07);
  color: #0e1318;

  :hover {
    opacity: 1;
    background-color: rgba(57, 76, 96, 0.15);
  }
`;

const LoginWarning = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: rgba(17, 23, 29, 0.8);

  h1: {
    font-size: 32px;
  }

  h2: {
    font-size: 24px;
  }
`;

export { HeaderButton, Container, Header, Title, LoginWarning };
