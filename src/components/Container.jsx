import styled from "styled-components";
import Form from "./Form/Form";
import Todo from "./Todo/Todo";

const ContainerStyle = styled.div`
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
  margin: 0 auto;
  width: 500px;
  display: flex;
  background: #fff;
  border-radius: 10px;
  padding: 45px;
  flex-direction: column;
`;
export default function Container() {
  return (
    <>
      <ContainerStyle>
        <Form />
      </ContainerStyle>
    </>
  );
}
