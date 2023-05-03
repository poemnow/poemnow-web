import { useState } from "react";
import styled from "styled-components";
import H3 from "../Atoms/H3";
import Text from "../Atoms/Text";

const ToggleButton = styled.button`
  background-color: ${({ active }) => (active ? "blue" : "grey")};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin-right: 10px;
  cursor: pointer;
`;

const WriteOptionStyled = styled.div``;

const WriteOption = () => {
  const [isPublic, setIsPublic] = useState(true);

  const handlePublicToggle = () => {
    setIsPublic(true);
  };

  const handlePrivateToggle = () => {
    setIsPublic(false);
  };

  return (
    <WriteOptionStyled>
      <H3>발행 옵션</H3>
      <Text>공개 설정</Text>
      <ToggleButton active={isPublic} onClick={handlePublicToggle}>
        공개
      </ToggleButton>
      <ToggleButton active={!isPublic} onClick={handlePrivateToggle}>
        비공개
      </ToggleButton>
      <Text>작가 설정</Text>
      <ToggleButton active={isPublic} onClick={handlePublicToggle}>
        필명 표기
      </ToggleButton>
      <ToggleButton active={!isPublic} onClick={handlePrivateToggle}>
        익명 표기
      </ToggleButton>
      <Text>태그 편집</Text>
    </WriteOptionStyled>
  );
};

export default WriteOption;
