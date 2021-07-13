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
  color: #01091a;
  margin-left: 1rem;
`;

const List = styled.div<ListDragProps>`
  flex: 1;
  padding: 2rem;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 5px 5px 8px #67799d;
  background: ${({ isOver }) => (isOver ? "#0A1E46" : "#C2CCD6")};
`;

export { Container, List, Title };
