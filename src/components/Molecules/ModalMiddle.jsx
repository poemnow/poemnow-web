import styled from "styled-components";
import Button from "../Atoms/Button";
import { useEffect } from "react";
import ProfileImage from "../Atoms/ProfileImage";

const ModalWindow = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 1px solid black;
  padding-top: 20px;
  width: 290px;
  height: 220px;
  //padding: 20px;
  z-index: 999; /* 다른 요소들보다 위로 배치 */
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const CancleQ = styled.div`
  height: 22px;
  width: 230px;
  text-align: center;
  margin-top: 15px;
  font-size: 12px;
  border-bottom: 1px solid #ccc;
`;
const Cancle = styled.div`
  height: 22px;
  width: 230px;
  text-align: center;
  font-size: 14px;
  margin-top: 15px;
  cursor: pointer;
  color: red;
  border-bottom: 1px solid #ccc;
`;
const Back = styled.div`
  height: 22px;
  width: 230px;
  text-align: center;
  font-size: 14px;
  margin-top: 15px;
  cursor: pointer;
`;
const Border = styled.div`
  border-top: 1px solid #ccc;
`;

// 코드 출처 https://joonfluence.tistory.com/m/657
// https://im-developer.tistory.com/201

/*
 * ModalBottom을 사용하려면 props로 toggleModal 함수를 전달해야 한다.
 * toggleModal은 state를 !state로 변경하는 함수다.
 * 모달이 켜지면 스크롤을 막아야 하는데, useEffect로 컴포넌트가 생성되면 스크롤을 막는다.
 * 그리고 useEffect의 반환값은 컴포넌트가 삭제될때 실행되는 함수인데, 모달이 사라지면 스크롤을 다시 허용한다.
 */

export default function ModalMiddle(props) {
  const { toggleModal, insertdeleteFollow } = props;

  let scrollPosition = 0;

  useEffect(() => {
    scrollPosition = window.pageYOffset;
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = "100%";

    return () => {
      document.body.style.removeProperty("overflow");
      document.body.style.removeProperty("position");
      document.body.style.removeProperty("top");
      document.body.style.removeProperty("width");
      window.scrollTo(0, scrollPosition);
    };
  });

  return (
    <ModalWindow>
      <ProfileImage src={props.src} size={"90px"}></ProfileImage>

      <CancleQ>{props.nickname}님의 팔로우를 취소하시겠어요?</CancleQ>
      <Cancle onClick={insertdeleteFollow}>팔로우 취소</Cancle>
      <Back onClick={toggleModal}>취소</Back>
    </ModalWindow>
  );
}
