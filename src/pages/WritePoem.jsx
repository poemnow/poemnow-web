import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputBox from "../components/Atoms/InputBox";
import WriterOption from "../components/Organisms/WriteOption";
import Button from "../components/Atoms/Button";
import Header from "../components/Organisms/Header";
import Error from "../components/Atoms/Error";
import styled from "styled-components";

import { Link } from "react-router-dom";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  outline: 1px solid var(--gray-300);
  background-color: #ffffff;
  color: black;
  padding: 10px;
  width: 80%;
  min-width: 600px;
  max-width: 600px;
  flex-direction: column;
  align-items: center;
`;
const CloseButtonWrapper = styled.div`
  align-self: flex-end;
  margin-top: 10px;
`;

const InputStyle = styled.input`
  width: 100%;
  box-sizing: border-box;
  outline: none;
  box-sizing: border-box;
  ::placeholder {
    color: ${(props) => props.placeholderColor};
    font-size: 14px;
  }
  padding: 12px;
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.backgroundColor};
`;

const InputContainer = styled.div`
  padding: 0px -100px;
  margin: 30px 100px;
`;

const InputStyleNoFocus = styled(InputStyle)`
  border: none;
  border-bottom: 1px solid var(--gray-500);
  outline: none;
  width: calc(100% - 176px); /* 수정: 입력 칸의 패딩 값을 제외한 너비 계산 */
  margin-left: 88px; /* 수정: 입력 칸의 왼쪽 패딩 값을 고려한 마진 값 */
`;

const Divider = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: var(--gray-300);
`;

function WritePoem() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [data, setData] = useState("");
  const [isWriteOptionVisible, setIsWriteOptionVisible] = useState(false); // 추가
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <><Header isX={true} title={"시쓰기"} />
    <hr/>
      <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        <InputStyleNoFocus
        id="title"
        type="text"
        border="1px solid var(--gray-100)"
        register={register("title", {
            required: "제목을 입력해주세요",
            minLength: {
              value: 1,
              message: "제목은 1자 이상이어야 합니다.",
            },
            maxLength: {
              value: 100,
              message: "제목는 100자 이하여야 합니다.",
            },
          })}
          placeholder="시 제목을 입력해주세요"
          placeholderColor={"var(--gray-400)"}
        />
        <InputContainer><InputBox
          {...register("content", {
            required: "내용을 입력해주세요",
            minLength: {
              value: 1,
              message: "내용은 1자 이상이어야 합니다.",
            },
            maxLength: {
              value: 5000,
              message: "내용은 5000자 이하여야 합니다.",
            },
          })}
          placeholder="시 내용을 입력하세요"
        /></InputContainer>
        <Button
        /* onClick={(event) => {
            event.preventDefault();
            setIsWriteOptionVisible(true); // 등록 버튼 클릭 시 WriteOption 컴포넌트를 보여주도록 변경
          }}*/
          onClick={handleOpenModal}
        >
          등록
        </Button>
      </form>
      <Error>{errors?.title?.message}</Error>
      <Error>{errors?.content?.message}</Error>
      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
          <WriterOption/>
          <CloseButtonWrapper>
            <Button onClick={handleCloseModal}>닫기</Button>
            </CloseButtonWrapper>
          </ModalContent>
          
        </ModalOverlay>
      )}
     {/*isWriteOptionVisible && <WriterOption />} {/* 추가 */}
    </>
  );
}

export default WritePoem;