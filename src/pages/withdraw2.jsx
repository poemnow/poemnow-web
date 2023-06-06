import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../components/Atoms/Button";
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

const WithdrawAgreement = styled.div`
  height: 200px;
  overflow: auto;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 20px;
`;

const WithdrawCheckbox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  label {
    margin-left: 10px;
  }
`;

const Withdraw2 = ({ handlePrev, handleNext }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <WithdrawContainer>
      <WithdrawContent>
        <WithdrawTitle>
          회원탈퇴를 위해서 아래 약관을 확인해주세요.
        </WithdrawTitle>
        <WithdrawAgreement>
          회원탈퇴를 위한 약관 내용이 들어갈 공간입니다.
        </WithdrawAgreement>
        <WithdrawCheckbox>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label>약관에 동의하십니까?</label>
        </WithdrawCheckbox>
        <Link to="/withdraw1">
          <Button onClick={handlePrev}>이전</Button>
        </Link>
        <Link to="/withdraw3">
          <Button disabled={!isChecked} onClick={handleNext}>
            다음
          </Button>
        </Link>
      </WithdrawContent>
    </WithdrawContainer>
  );
};

export default Withdraw2;
