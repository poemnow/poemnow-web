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

const register = () => {
  return (
    <div>
      <FormContainer>
        <Label>아이디</Label>
        <Input type="text" placeholder="아이디를 입력하세요." />
      </FormContainer>
      <FormContainer>
        <Label>비밀번호</Label>
        <Input type="password" placeholder="비밀번호를 입력하세요." />
      </FormContainer>

      <FormContainer>
        <Label>비밀번호 재확인</Label>
        <Input type="password" placeholder="비밀번호를 다시 입력하세요." />
      </FormContainer>

      <FormContainer>
        <Label>인증 이메일</Label>
        <Input type="email" placeholder="이메일을 입력하세요." />
        <Button>인증번호 받기</Button>
        <Input type="text" placeholder="6자리 인증번호를 입력하세요." />
      </FormContainer>

      <FormContainer>
        <Label>닉네임</Label>
        <Input type="text" placeholder="닉네임을 입력하세요." />
      </FormContainer>

      <FormContainer>
        <Label>생년월일</Label>
        <Input type="date" />
      </FormContainer>

      <FormContainer>
        <Label>휴대폰번호</Label>
        <Input type="tel" placeholder="휴대폰번호를 입력하세요." />
      </FormContainer>

      <Button>회원가입</Button>
    </div>
  );
};

export default register;
