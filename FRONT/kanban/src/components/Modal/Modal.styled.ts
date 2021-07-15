import styled from "styled-components";

const ModalBackground = styled.div`
  display: black;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fefefe;
  margin: 15% auto;
  padding: 0 20px;
  border-radius: 4px;
  width: 400px;
  height: 300px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 8px;

  h2 {
    margin: 0;
    font-size: 24px;
    font-weight: 600;
  }
`;

export { ModalBackground, ModalContent, Header };
