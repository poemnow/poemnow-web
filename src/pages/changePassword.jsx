import styled from "styled-components";
import Input from "../components/Atoms/Input";
import Button from "../components/Atoms/Button";
import { useForm } from "react-hook-form";
import Header from "../components/Organisms/Header";
import H3 from "../components/Atoms/H3";
import Error from "../components/Atoms/Error";
import FitContentButton from "../components/Atoms/FitContentButton";
import H5 from "../components/Atoms/H5";
import Label from "../components/Atoms/Label";

const LoginContainer = styled.div`
  padding: 0px 16px;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-grow: 1;
  justify-content: space-between;
  padding-bottom: 16px;
`;

const InputSet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const LoginTitle = styled.div`
  margin-top: 64px;
  margin-bottom: 32px;
`;

const EmailStyle = styled.div`
  display: flex;
  gap: 4px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const FindPassword = () => {
  // react-hook-form에서 사용할 함수들을 가져온다.
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  //

  // 비밀번호 찾기 버튼을 눌렀을 때, 실행되는 함수
  const onSubmit = (data) => {
    alert(data);
  };

  const getCertification = (event) => {
    event.preventDefault();
    alert("인증번호 받기");
  };

  return (
    <LoginContainer>
      <Header isBack={true} title={""} />
      <LoginTitle>
        <H3 weight={"bold"}>비밀번호 변경하기</H3>
      </LoginTitle>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <InputSet>
            <Label htmlFor="password">
              <H5>새로운 비밀번호</H5>
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="사용하실 비밀번호를 입력하세요"
              placeholderColor={"var(--gray-400)"}
              border={"1px solid var(--gray-300)"}
              register={register("password", {
                required: "비밀번호는 필수 입력 사항입니다",
                minLength: {
                  value: 8,
                  message: "비밀번호는 8자 이상이어야 합니다.",
                },
                maxLength: {
                  value: 20,
                  message: "비밀번호는 20자 이하여야 합니다.",
                },
              })}
            />
            <Error>{errors?.password?.message}</Error>
          </InputSet>
          <InputSet>
            <Label htmlFor="passwordValidate">
              <H5>비밀번호 재확인</H5>
            </Label>
            <Input
              id="passwordValidate"
              type="password"
              placeholder="비밀번호를 다시 입력해주세요"
              placeholderColor={"var(--gray-400)"}
              border={"1px solid var(--gray-300)"}
              register={register("passwordValidate", {
                required: "비밀번호는 필수 입력 사항입니다",
                minLength: {
                  value: 8,
                  message: "비밀번호는 8자 이상이어야 합니다.",
                },
                maxLength: {
                  value: 20,
                  message: "비밀번호는 20자 이하여야 합니다.",
                },
                validate: {
                  check: (val) => {
                    if (getValues("password") !== val) {
                      console.log("password" + getValues("password"));
                      return "비밀번호가 일치하지 않습니다";
                    }
                  },
                },
              })}
            />
            <Error>{errors?.passwordValidate?.message}</Error>
          </InputSet>
        </InputContainer>
        <Button
          backgroundColor={"var(--primary2)"}
          color={"var(--gray-100)"}
          radius={"16px"}
          padding={"16px 0px"}
          margin={"28px 0px 12px 0px"}
        >
          비밀번호 변경하기
        </Button>
      </FormStyled>
    </LoginContainer>
  );
};

export default FindPassword;
