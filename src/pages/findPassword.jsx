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

const findPassWord = () => {
  return (
    <div>
      <FormContainer>
        <Label>아이디</Label>
        <Input
          type="text"
          placeholder="아이디을 입력하세요."
          minlength="6"
          maxlength="12"
        />
      </FormContainer>

      <FormContainer>
        <Label>인증 이메일</Label>
        <Input type="email" placeholder="이메일을 입력하세요." />
        <Button>인증번호 받기</Button>
        <Input type="text" placeholder="6자리 인증번호를 입력하세요." />
      </FormContainer>

      <Button>비밀번호 찾기</Button>
    </div>
  );
};

export default findPassWord;
