import styled from "styled-components";
import { useForm } from "react-hook-form";
import Input from "../components/Atoms/Input";
import Button from "../components/Atoms/Button";
import FitContentButton from "../components/Atoms/FitContentButton";
import Error from "../components/Atoms/Error";
import Label from "../components/Atoms/Label";
import { getValue } from "@testing-library/user-event/dist/utils";
import H5 from "../components/Atoms/H5";
import { Link } from "react-router-dom";
import Header from "../components/Organisms/Header";

const RegisterContainer = styled.div`
  padding: 0px 16px;
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const InputSet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const EmailStyle = styled.div`
  display: flex;
  gap: 4px;
`;

const LoginLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  color: var(--primary2);
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <RegisterContainer>
      <Header isBack={true} title={"회원가입"} />
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <InputSet>
          <Label htmlFor="id">
            <H5>아이디</H5>
          </Label>
          <Input
            id="id"
            type="text"
            placeholder="사용하실 아이디를 입력하세요"
            placeholderColor={"var(--gray-400)"}
            border={"1px solid var(--gray-300)"}
            register={register("id", {
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
          <Error>{errors?.id?.message}</Error>
        </InputSet>
        <InputSet>
          <Label htmlFor="password">
            <H5>비밀번호</H5>
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
                  if (getValue("password") !== val) {
                    return "비밀번호가 일치하지 않습니다";
                  }
                },
              },
            })}
          />
          <Error>{errors?.passwordValidate?.message}</Error>
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
          <Error>{errors?.email?.message}</Error>
        </InputSet>
        <InputSet>
          <Label htmlFor="nickname">
            <H5>이름</H5>
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="실명을 입력해주세요"
            placeholderColor={"var(--gray-400)"}
            border={"1px solid var(--gray-300)"}
            register={register("name", {
              required: "이름은 필수 입력 사항입니다",
              minLength: {
                value: 2,
                message: "이름은 2자 이상이어야 합니다.",
              },
              maxLength: {
                value: 20,
                message: "이름은 20자 이하여야 합니다.",
              },
            })}
          />
          <Error>{errors?.name?.message}</Error>
        </InputSet>
        <InputSet>
          <Label htmlFor="nickname">
            <H5>닉네임</H5>
          </Label>
          <Input
            id="nickname"
            type="text"
            placeholder="사용하실 작가 이름을 입력해주세요"
            placeholderColor={"var(--gray-400)"}
            border={"1px solid var(--gray-300)"}
            register={register("nickname", {
              required: "닉네임은 필수 입력 사항입니다",
              minLength: {
                value: 2,
                message: "닉네임은 2자 이상이어야 합니다.",
              },
              maxLength: {
                value: 20,
                message: "닉네임은 20자 이하여야 합니다.",
              },
            })}
          />
          <Error>{errors?.nickname?.message}</Error>
        </InputSet>
        <InputSet>
          <Label htmlFor="birthday">
            <H5>생년월일</H5>
            <H5 weight={"light"}>(선택)</H5>
          </Label>
          <Input
            id="birthday"
            type="date"
            register={register("birthday")}
            border={"1px solid var(--gray-300)"}
          />
          <Error>{errors?.birthday?.message}</Error>
        </InputSet>
        <InputSet>
          <Label htmlFor="phoneNumber">
            <H5>휴대전화</H5>
            <H5 weight={"light"}>(선택)</H5>
          </Label>
          <Input
            id="phoneNumber"
            type="text"
            register={register("phoneNumber")}
            border={"1px solid var(--gray-300)"}
            placeholder={"010-0000-0000 형식으로 입력해주세요"}
            placeholderColor={"var(--gray-400)"}
          />
          <Error>{errors?.phoneNumber?.message}</Error>
        </InputSet>
        <Button
          backgroundColor={"var(--primary2)"}
          color={"var(--gray-100)"}
          radius={"16px"}
          padding={"16px 0px"}
          margin={"28px 0px 12px 0px"}
        >
          Sign Up
        </Button>
        <Center>
          <H5 weight={"light"}>
            이미 회원이신가요? <LoginLink to="/login">로그인하기</LoginLink>
          </H5>
        </Center>
      </FormStyled>
    </RegisterContainer>
  );
}

export default Register;
