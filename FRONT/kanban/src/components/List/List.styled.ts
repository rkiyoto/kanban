import styled from "styled-components";

interface ListDragProps {
  readonly isOver: boolean;
}

const Container = styled.div`
  display: flex;
  flex: 1;
  margin: 1rem;
  min-width: 200px;
  flex-direction: column;
`;

const Title = styled.h2`
  color: #054a91;
  margin-left: 1rem;
`;

const List = styled.div<ListDragProps>`
  flex: 1;
  padding: 2rem;
  flex-direction: column;
  border-radius: 5px;
  background: #81a4cd;
  box-shadow: 5px 5px 8px #6f8db0, -5px -5px 8px #93bbea;
  background: ${({ isOver }) => (isOver ? "#4f647d" : "#81a4cd")};
`;

export { Container, List, Title };
