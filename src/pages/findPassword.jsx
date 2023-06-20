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
        <H3 weight={"bold"}>비밀번호 찾기</H3>
      </LoginTitle>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <InputSet>
            <Label htmlFor="userName">
              <H5>이름</H5>
            </Label>
            <Input
              id="userName"
              type="text"
              placeholder="가입할 때 입력하신 이름을 입력해주세요"
              placeholderColor={"var(--gray-400)"}
              border={"1px solid var(--gray-300)"}
              register={register("userName", {
                required: "이름은 필수 입력 사항입니다",
                // minLength: {
                //   value: 4,
                //   message: "아이디는 4자 이상이어야 합니다.",
                // },
                // maxLength: {
                //   value: 20,
                //   message: "아이디는 20자 이하여야 합니다.",
                // },
              })}
            />
            <Error>{errors?.userName?.message}</Error>
          </InputSet>
          <InputSet>
            <Label htmlFor="userId">
              <H5>아이디</H5>
            </Label>
            <Input
              id="userId"
              type="text"
              placeholder="비밀번호를 찾을 아이디를 입력하세요"
              placeholderColor={"var(--gray-400)"}
              border={"1px solid var(--gray-300)"}
              register={register("userId", {
                required: "아이디는 필수 입력 사항입니다",
                minLength: {
                  value: 4,
                  message: "아이디는 4자 이상이어야 합니다.",
                },
                maxLength: {
                  value: 20,
                  message: "아이디는 20자 이하여야 합니다.",
                },
              })}
            />
            <Error>{errors?.userId?.message}</Error>
          </InputSet>
          <InputSet>
            <Label htmlFor="email">
              <H5>이메일</H5>
            </Label>
            <EmailStyle>
              <Input
                id="email"
                type="email"
                placeholder="이메일을 입력하세요"
                placeholderColor={"var(--gray-400)"}
                border={"1px solid var(--gray-300)"}
                register={register("email", {
                  required: "이메일은 필수 입력 사항입니다",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "이메일 형식이 맞지 않습니다.",
                  },
                })}
              />
              <FitContentButton
                backgroundColor={"var(--primary2)"}
                color={"var(--gray-100)"}
                type="button"
                onClick={getCertification}
              >
                인증번호 발송
              </FitContentButton>
            </EmailStyle>
            <Input
              id="authNumber"
              type="text"
              placeholder="인증번호 6자리 숫자를 입력해주세요"
              placeholderColor={"var(--gray-400)"}
              border={"1px solid var(--gray-300)"}
              register={register("authNumber", {
                required: "인증번호를 입력해주세요",
              })}
            />
            <Error>{errors?.authNumber?.message}</Error>
          </InputSet>
        </InputContainer>
        <Button
          backgroundColor={"var(--primary2)"}
          color={"var(--gray-100)"}
          radius={"16px"}
          padding={"16px 0px"}
          margin={"28px 0px 12px 0px"}
        >
          비밀번호 찾기
        </Button>
      </FormStyled>
    </LoginContainer>
  );
};

export default FindPassword;
