import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/Atoms/Button";
import Input from "../components/Atoms/Input";
import { Link } from "react-router-dom";
const WithdrawContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const WithdrawContent = styled.div`
  width: 500px;
  height: 400px;
  border: 1px solid #000;
  padding: 20px;
`;

const WithdrawTitle = styled.h2`
  margin-bottom: 20px;
`;

const Withdraw3 = ({ handlePrev, handleNext }) => {
  const [isChecked] = useState(false);

  return (
    <WithdrawContainer>
      <WithdrawContent>
        <WithdrawTitle>
          회원탈퇴 신청하기 전 본인 인증을 진행해주세요.
        </WithdrawTitle>
        <Input type="text" placeholder="6자리 인증번호를 입력해주세요" />
        <Button>인증번호 발급</Button>
        <br />
        <Link to="/withdraw2">
          <Button onClick={handlePrev}>이전</Button>
        </Link>
        <Button disabled={!isChecked} onClick={handleNext}>
          탈퇴
        </Button>
      </WithdrawContent>
    </WithdrawContainer>
  );
};

export default Withdraw3;
