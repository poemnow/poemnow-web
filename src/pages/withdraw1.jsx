import styled from "styled-components";
import { useState } from "react";
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
const MainText = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const SubText = styled.p`
  font-size: 18px;
  color: gray;
  margin-bottom: 30px;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const WithdrawButton = styled.button`
  background-color: #ff0000;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
`;

const CancelButton = styled.button`
  background-color: #fff;
  color: #000;
  font-size: 18px;
  font-weight: bold;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
`;

const Withdraw1 = () => {
  const [confirmWithdraw, setConfirmWithdraw] = useState(false);

  const handleWithdraw = () => {
    // 회원 탈퇴 로직 작성
    console.log("Withdrawal process initiated");
  };

  return (
    <WithdrawContainer>
      <WithdrawContent>
        <MainText>회원탈퇴 신청하기 전 안내사항을 확인해주세요.</MainText>
        <SubText>
          - 탈퇴 즉시 회원 정보는 완전히 삭제되며 복구할 수 없습니다. <br />
          - 작성한 시와 시집, 댓글은 모두 삭제되며 좋아요와 팔로우 정보도 모두
          삭제됩니다. <br />- 추후에 다시 회원가입 하시게 되면 현재 아이디는
          사용하실 수 없습니다.
        </SubText>
        {confirmWithdraw ? (
          <>
            <p>정말로 탈퇴를 진행하시겠습니까?</p>
            <ButtonGroup>
              <Link to="/withdraw2">
                <WithdrawButton onClick={handleWithdraw}>
                  그래도 탈퇴할래요
                </WithdrawButton>
              </Link>
              <Link to="/Home">
                <CancelButton onClick={() => setConfirmWithdraw(false)}>
                  계속 이용할래요
                </CancelButton>
              </Link>
            </ButtonGroup>
          </>
        ) : (
          <WithdrawButton onClick={() => setConfirmWithdraw(true)}>
            회원탈퇴
          </WithdrawButton>
        )}
      </WithdrawContent>
    </WithdrawContainer>
  );
};

export default Withdraw1;
