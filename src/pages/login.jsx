import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Atoms/Button";
import Input from "../components/Atoms/Input";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import Header from "../components/Organisms/Header";
import Error from "../components/Atoms/Error";
import Label from "../components/Atoms/Label";
import { getValue } from "@testing-library/user-event/dist/utils";
import H5 from "../components/Atoms/H5";
import H3 from "../components/Atoms/H3";
import axios from "axios";
import { useQueryClient } from "react-query";
import { useSignIn } from "../hooks/useSignIn";

// const LS_KEY_ID = "LS_KEY_ID";
// const LS_KEY_SAVE_ID_FLAG = "LS_KEY_SAVE_ID_FLAG";

const LoginContainer = styled.div`
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

const LoginLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  color: var(--primary2);
  margin-left: 12px;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

const LoginTitle = styled.div`
  margin-top: 64px;
  margin-bottom: 32px;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-top: 16px;
`;

const FindLink = styled(Link)`
  font-size: var(--mobile-label);
  color: var(--gray-600);
`;

const OrContainer = styled.div`
  /* border-bottom: 1px solid var(--gray-400); */
  margin-top: 40px;
  margin-bottom: 20px;
`;

const OrText = styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  color: var(--gray-600);
  margin: 8px 0px;
  font-size: var(--mobile-p);

  &::before {
    content: "";
    flex-grow: 1;
    margin: 0 16px;
    height: 1px;
    font-size: 0px;
    background: var(--gray-400);
    line-height: 0px;
  }
  &::after {
    content: "";
    flex-grow: 1;
    margin: 0 16px;
    height: 1px;
    font-size: 0px;
    background: var(--gray-400);
    line-height: 0px;
  }
`;
// 로그인 실행 함수 id, password를 받아서 프로미스를 반환한다.
async function login(id, password) {
  const response = await axios({
    method: "POST",
    url: "http://localhost:8080/api/login",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, password }),
  });

  if (!response.ok) {
  }

  return await response.json();
}

const Login = () => {
  // react-hook-form에서 사용할 함수들을 가져온다.
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //
  const onSignIn = useSignIn();

  // 로그인 버튼을 눌렀을 때, 실행되는 함수
  const onSubmit = (data) => {
    onSignIn(data);
  };

  return (
    <LoginContainer>
      <Header isBack={true} title={"로그인"} />
      <LoginTitle>
        <H3 weight={"bold"}>로그인</H3>
      </LoginTitle>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <InputSet>
          <Input
            id="userId"
            type="text"
            placeholder="아이디를 입력하세요"
            placeholderColor={"var(--gray-400)"}
            border={"1px solid var(--gray-100)"}
            borderRadius={"16px"}
            backgroundColor={"var(--gray-100)"}
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
          <Input
            id="password"
            type="password"
            placeholder="비밀번호를 입력하세요"
            placeholderColor={"var(--gray-400)"}
            border={"1px solid var(--gray-100)"}
            borderRadius={"16px"}
            backgroundColor={"var(--gray-100)"}
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
        <Button
          backgroundColor={"var(--primary2)"}
          color={"var(--gray-100)"}
          radius={"16px"}
          padding={"16px 0px"}
          margin={"28px 0px 12px 0px"}
        >
          로그인하기
        </Button>
      </FormStyled>
      <Links>
        <FindLink to="/findId">아이디 찾기</FindLink>
        <FindLink to="/findPassword">비밀번호 찾기</FindLink>
      </Links>
      <OrContainer>
        <OrText>또는</OrText>
      </OrContainer>
      <Buttons>
        <Button
          backgroundColor={"var(--naverContainer)"}
          color={"white"}
          radius={"16px"}
          padding={"16px 0px"}
        >
          네이버로 로그인하기
        </Button>
        <Button
          backgroundColor={"var(--kakaoContainer)"}
          color={"var(--kakaoLabel)"}
          radius={"16px"}
          padding={"16px 0px"}
        >
          카카오 로그인하기
        </Button>
      </Buttons>
      <Center>
        <H5 weight={"light"}>
          아직 계정이 없으신가요?{" "}
          <LoginLink to="/register">회원가입하기</LoginLink>
        </H5>
      </Center>
    </LoginContainer>
  );
};

// const Login = () => {
// const [loginID, setLoginID] = useState("");
// const [loginPassword, setLoginPassword] = useState("");
// const [saveIDFlag, setSaveIDFlag] = useState(false);
// const [passwordOption, setPasswordOption] = useState(false);
// const [passwordInputType, setPasswordInputType] = useState({
//   type: "password",
//   autoComplete: "current-password",
// });
// const [capsLockFlag, setCapsLockFlag] = useState(false);

// const checkCapsLock = (e) => {
//   let capsLock = e.getModifierState("CapsLock");
//   setCapsLockFlag(capsLock);
// };

// const dataRuleCheckForID = (ch) => {
//   let ascii = ch.charCodeAt(0);
//   if (48 /* 0 */ <= ascii && ascii <= 57 /* 9 */) return true;
//   if (65 /* A */ <= ascii && ascii <= 90 /* Z */) return true;
//   if (97 /* a */ <= ascii && ascii <= 122 /* z */) return true;
//   if (ch === ".") return true;

//   return false;
// };

// const getLoginID = (event) => {
//   let value = event.target.value;

//   if (value === "") {
//     setLoginID(value);
//     return;
//   }

//   let length = value.length;
//   if (dataRuleCheckForID(value[length - 1]) === false) return;

//   setLoginID(value);

//   return;
// };

// const handleSaveIDFlag = () => {
//   localStorage.setItem(LS_KEY_SAVE_ID_FLAG, !saveIDFlag);
//   setSaveIDFlag(!saveIDFlag);
// };

// const login = () => {
//   console.log({ loginID, loginPassword });

//   if (loginID === "") {
//     alert("아이디를 입력해주세요.");
//   }
//   if (loginPassword === "") {
//     alert("비밀번호를 입력해주세요.");
//   }

//   if (true /* login success */) {
//     if (saveIDFlag) localStorage.setItem(LS_KEY_ID, loginID);
//   }
// };

// useEffect(() => {
//   let idFlag = JSON.parse(localStorage.getItem(LS_KEY_SAVE_ID_FLAG));
//   if (idFlag !== null) setSaveIDFlag(idFlag);
//   if (idFlag === false) localStorage.setItem(LS_KEY_ID, "");

//   let data = localStorage.getItem(LS_KEY_ID);
//   if (data !== null) setLoginID(data);
// }, []);

// useEffect(() => {
//   if (passwordOption === false)
//     setPasswordInputType({
//       type: "password",
//       autoComplete: "current-password",
//     });
//   else
//     setPasswordInputType({
//       type: "text",
//       autoComplete: "off",
//     });
// }, [passwordOption]);

// return (
// <div className="login-form">
//   <div className="login-wrapper">
//     <div className="login-container">
//       <div className="login-logo">
//         <span className="logo-image">LOGO</span>
//       </div>
//       <form id="loginForm">
//         <div className="Input-group">
//           <Input
//             type="text"
//             id="email"
//             name="email"
//             placeholder="아이디"
//             className="Input-id"
//             onKeyDown={(e) => checkCapsLock(e)}
//             value={loginID}
//             onChange={(e) => getLoginID(e)}
//           />
//           <Input
//             type={passwordInputType.type}
//             id="password"
//             name="password"
//             placeholder="비밀번호"
//             className="Input-pw"
//             autoComplete={passwordInputType.autoComplete}
//             onKeyDown={(e) => checkCapsLock(e)}
//             value={loginPassword}
//             onChange={(e) => setLoginPassword(e.target.value)}
//           />
//         </div>
//         <div className="checkbox-wrapper">
//           <span className="checkbox-item">
//             <Input
//               type="checkbox"
//               name="saveEmail"
//               id="saveEmail"
//               checked={saveIDFlag}
//               onChange={handleSaveIDFlag}
//             />
//             <label>
//               <span>아이디 저장</span>
//             </label>
//           </span>
//           <span className="checkbox-item">
//             <Input
//               type="checkbox"
//               checked={passwordOption}
//               onChange={() => setPasswordOption(!passwordOption)}
//             />
//             <label>
//               <span>비밀번호 표시</span>
//             </label>
//           </span>
//           <span
//             className={
//               capsLockFlag ? "caps-lock caps-lock-on" : "caps-lock"
//             }
//           >
//             {capsLockFlag ? "Caps Lock On" : "Caps Lock Off"}
//           </span>
//         </div>
//         <Button onClick={login}>로그인</Button>
//       </form>
//       <ul className="login-li-group">
//         <li>
//           <Link to="/findId">
//             <Button onClick={() => alert("잘 기억해보세요.")}>
//               아이디 찾기
//             </Button>
//           </Link>
//         </li>
//         <li>
//           <Link to="/findPassword">
//             <Button onClick={() => alert("잘 기억해보세요.")}>
//               비밀번호 찾기
//             </Button>
//           </Link>
//         </li>
//         <li>
//           <Link to="/register">
//             <span className="bold">회원가입</span>
//           </Link>
//         </li>
//       </ul>
//       <Button>카카오 로그인</Button>
//       <Button>네이버 로그인</Button>
//     </div>
//   </div>
// </div>
//   );
// };

export default Login;
