import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: calc(100% - 80px);
  padding: 3rem;
  padding-bottom: 0;
  justify-content: space-between;
  flex-flow: row wrap;
`;

const FloatingButtonContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 50px;
  height: 50px;
  right: 32px;
  bottom: 32px;
  background-color: ${({ theme }) => theme.board.floatingButton};
  border-radius: 50%;
  box-shadow: 1px 1px 4px ${({ theme }) => theme.board.floatingButton};

  i {
    display: flex;
    color: white;
  }
`;

export { Container, FloatingButtonContainer };
