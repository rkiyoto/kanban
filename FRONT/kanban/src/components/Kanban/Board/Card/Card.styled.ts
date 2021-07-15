import styled from "styled-components";

interface CardStyleProps {
  readonly isDragging?: boolean;
}

interface FooterStyleProps {
  readonly isEditing?: boolean;
}

const Container = styled.div<CardStyleProps>`
  position: relative;
  flex: 1;
  height: 250px;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  background-color: #fbe7c6;
  opacity: ${({ isDragging }) => (isDragging ? 0.5 : 1)};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 12px;
  border-bottom: 1px solid #088e8b;
  ::first-child {
    justify-content: flex-start;
  }

  ::last-child {
    justify-content: flex-end;
  }
`;

const Title = styled.h3`
  margin: 0;
  font-size: 18px;
  color: #033736;

  input {
    font: inherit;
    font-size: 16px;
    background-color: white;
    color: #033736;
    border-width: 1px;
    border-radius: 4px;
    padding: 4px 8px;
    outline: none;
    border: none;
  }
`;

const Body = styled.div`
  display: block;
  height: 150px;
  padding: 1rem;
  padding-bottom: 0;
  white-space: pre-line;

  textarea {
    flex: 1;
    width: 90%;
    height: 110px;
    color: red;
    padding: 8px;
    margin: 8px;
    resize: none;
    outline: none;
    border: none;
  }
`;

const Description = styled.div`
  display: block;
  height: 100%;
  overflow-y: auto;
  color: #0e1318;
`;

const Footer = styled.div<FooterStyleProps>`
  position: absolute;
  right: 5px;
  bottom: 5px;
  justify-content: ${({ isEditing }) =>
    isEditing ? "flex-end" : "space-between"};
`;

export { Container, Header, Body, Footer, Title, Description };
