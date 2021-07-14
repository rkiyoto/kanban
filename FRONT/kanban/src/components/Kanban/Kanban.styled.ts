import styled from "styled-components";

const Container = styled.div`
  display: block;
  height: 100vh;
  background-color: #fffde5;
`;

const Header = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  background-color: green;
  padding: 4px;
`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 400;
`;

const HeaderButton = styled.button`
  padding: 4px;
  width: 64px;
  color: red;
`;

export { HeaderButton, Container, Header, Title };
