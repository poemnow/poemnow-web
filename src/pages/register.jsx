import styled from "styled-components";
import { useForm } from "react-hook-form";
import Input from "../components/Atoms/Input";
import Button from "../components/Atoms/Button";
import FitContentButton from "../components/Atoms/FitContentButton";
import Error from "../components/Atoms/Error";
import Label from "../components/Atoms/Label";
import H5 from "../components/Atoms/H5";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Organisms/Header";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSignUp } from "../hooks/useSignUp";
import axios from "axios";

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
  // react-hook-form에서 사용되는 함수
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  // 회원가입시 사용되는 hooks
  const signUp = useSignUp();

  const onSubmit = async (data) => {
    signUp(data);
  };

  const getCertification = (event) => {
    event.preventDefault();

    const newForm = new FormData();
    newForm.append("email", getValues("email"));

    console.log(getValues("email"));
    axios({
      method: "POST",
      url: "http://localhost:8080/service/mail",
      data: newForm,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  return (
    <RegisterContainer>
      <Header isBack={true} title={"회원가입"} />
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <InputSet>
          <Label htmlFor="userId">
            <H5>아이디</H5>
          </Label>
          <Input
            id="userId"
            type="text"
            placeholder="사용하실 아이디를 입력하세요"
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
        <InputSet>
          <Label htmlFor="userName">
            <H5>이름</H5>
          </Label>
          <Input
            id="userName"
            type="text"
            placeholder="실명을 입력해주세요"
            placeholderColor={"var(--gray-400)"}
            border={"1px solid var(--gray-300)"}
            register={register("userName", {
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
          <Error>{errors?.userName?.message}</Error>
        </InputSet>
        <InputSet>
          <Label htmlFor="userNickname">
            <H5>닉네임</H5>
          </Label>
          <Input
            id="userNickname"
            type="text"
            placeholder="사용하실 작가 이름을 입력해주세요"
            placeholderColor={"var(--gray-400)"}
            border={"1px solid var(--gray-300)"}
            register={register("userNickname", {
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
          <Error>{errors?.userNickname?.message}</Error>
        </InputSet>
        <InputSet>
          <Label htmlFor="userBirth">
            <H5>생년월일</H5>
            <H5 weight={"light"}>(선택)</H5>
          </Label>
          <Input
            id="userBirth"
            type="date"
            register={register("userBirth")}
            border={"1px solid var(--gray-300)"}
          />
          <Error>{errors?.userBirth?.message}</Error>
        </InputSet>
        <InputSet>
          <Label htmlFor="userPhone">
            <H5>휴대전화</H5>
            <H5 weight={"light"}>(선택)</H5>
          </Label>
          <Input
            id="userPhone"
            type="text"
            register={register("userPhone")}
            border={"1px solid var(--gray-300)"}
            placeholder={"010-0000-0000 형식으로 입력해주세요"}
            placeholderColor={"var(--gray-400)"}
          />
          <Error>{errors?.userPhone?.message}</Error>
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
