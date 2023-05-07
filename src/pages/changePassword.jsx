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

const changePassword = () => {
  return (
    <div>
      <FormContainer>
        <Label>비밀번호</Label>
        <Input type="password" placeholder="비밀번호를 입력하세요." />
      </FormContainer>

      <FormContainer>
        <Label>비밀번호 재확인</Label>
        <Input type="password" placeholder="비밀번호를 다시 입력하세요." />
      </FormContainer>

      <Button>비밀변호 변경</Button>
    </div>
  );
};

export default changePassword;
