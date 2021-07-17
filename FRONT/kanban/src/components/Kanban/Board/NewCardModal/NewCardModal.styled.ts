import styled from "styled-components";

const NewCardForm = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;

  input {
    color: ${({ theme }) => theme.font.primary};
    font-size: 18px;
    padding: 8px;
    margin: 0 8px;
  }

  textarea {
    flex: 1;
    width: 90%;
    color: ${({ theme }) => theme.font.primary};
    padding: 8px;
    margin: 8px;
    resize: none;
    outline: none;
  }

  button {
    align-self: flex-end;
    margin-bottom: 16px;
  }
`;

const MessageError = styled.p`
  padding-left: 8px;
  font-size: 10px;
  color: red;
`;

export { NewCardForm, MessageError };
