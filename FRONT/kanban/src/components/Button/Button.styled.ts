import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  border-radius: 4px;
  margin: 0 8px;
  border-width: 0;
  padding: 4px;
  background-color: transparent;
  font-size: 16px;
  :hover {
    opacity: 0.5;
  }
  :disabled {
    opacity: 0.5;
  }
`;

export { Button };
