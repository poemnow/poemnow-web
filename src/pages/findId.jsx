import styled from "styled-components";
import Input from "../components/Atoms/Input";
import Button from "../components/Atoms/Button";
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const findId = () => {
  return (
    <div>
      <FormContainer>
        <Label>이름</Label>
        <Input type="text" placeholder="이름을 입력하세요." />
      </FormContainer>

      <FormContainer>
        <Label>인증 이메일</Label>
        <Input type="email" placeholder="이메일을 입력하세요." />
        <Button>인증번호 받기</Button>
        <Input type="text" placeholder="6자리 인증번호를 입력하세요." />
      </FormContainer>

      <Button>아이디 찾기</Button>
    </div>
  );
};

export default findId;
