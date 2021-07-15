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
  color: #056360;
  margin-left: 1rem;
`;

const List = styled.div<ListDragProps>`
  flex: 1 1 600px;
  overflow-y: auto;
  padding: 2rem;
  flex-direction: column;
  border-radius: 5px;
  background: ${({ isOver }) =>
    isOver ? "rgb(160, 231, 229)" : "rgb(160, 231, 229, 0.7)"};
`;

export { Container, List, Title };
