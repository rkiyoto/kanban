import styled from "styled-components";

const Container = styled.div`
  display: block;
  height: 100vh;
  background-color: #fffde5;
`;

const Header = styled.div`
  position: fixed;
  z-index: 1000;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: green;
  box-shadow: 5px 5px 8px #67799d;
  padding: 8px 0;
`;

const Title = styled.h1`
  margin-left: 16px;
  font-size: 16px;
  font-weight: 400;
`;

const HeaderButton = styled.button`
  margin-right: 16px;
  padding: 4px;
  width: 64px;
  color: red;
`;

export { HeaderButton, Container, Header, Title };
