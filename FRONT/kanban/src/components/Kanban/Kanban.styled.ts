import styled from "styled-components";
import Button from "../Button";

const Container = styled.div`
  display: block;
  height: 100vh;
  background-color: ${({ theme }) => theme.background};
`;

const Header = styled.div`
  position: fixed;
  z-index: 1000;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.background};
  padding: 8px 0;
`;

const Title = styled.h1`
  margin-left: 24px;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.kanban.logo};
`;

const HeaderButton = styled(Button)`
  margin-right: 24px;
  padding: 4px;
  width: 64px;
  background-color: ${({ theme }) => theme.font.primaryWeakest};
  color: ${({ theme }) => theme.font.primary};

  :hover {
    opacity: 1;
    background-color: ${({ theme }) => theme.font.primaryWeak};
  }
`;

const LoginWarning = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => theme.font.primary};

  h1: {
    font-size: 32px;
  }

  h2: {
    font-size: 24px;
  }
`;

export { HeaderButton, Container, Header, Title, LoginWarning };
