import { useState } from "react";
import styled from "styled-components";
import TagCard from "../Molecules/Tagcard";

const WriteOptionStyle = styled.button`
  background-color: #ffffff;
  color: black;
`;

const ToggleButton = styled.button`
  background-color: ${({ active }) => (active ? "#C1E5C5" : "#F9FAFB")};
  color: white;
  border-color: #d1d5db;
  border-radius: 5px;
  padding: 10px;
  margin-right: 10px;
  cursor: pointer;
`;

const NameToggleButton = styled(ToggleButton)`
  margin-top: 10px;
`;

const WriteOption = () => {
  const [isPublic, setIsPublic] = useState(true);
  const [isAnonymous, setIsAnonymous] = useState(false);

  const handlePublicToggle = () => {
    setIsPublic(true);
  };

  const handlePrivateToggle = () => {
    setIsPublic(false);
  };

  const handleNameToggle = () => {
    setIsAnonymous(false);
  };

  const handleAnonymousToggle = () => {
    setIsAnonymous(true);
  };

  return (
    <WriteOptionStyle>
      <div>발행 옵션</div>
      <hr />
      <div>공개 설정</div>{" "}
      <div>비공개 설정시 시는 마이페이지에서만 확인할 수 있습니다.</div>
      <ToggleButton active={isPublic} onClick={handlePublicToggle}>
        공개
      </ToggleButton>
      <ToggleButton active={!isPublic} onClick={handlePrivateToggle}>
        비공개
      </ToggleButton>
      <br />
      <div>익명 설정</div>
      <div>익명 설정시 작자미상으로 시가 발행됩니다.</div>
      <NameToggleButton active={!isAnonymous} onClick={handleNameToggle}>
        필명
      </NameToggleButton>
      <NameToggleButton active={isAnonymous} onClick={handleAnonymousToggle}>
        익명
      </NameToggleButton>
      <br />
      <TagCard text="태그 이름" count={10} />
    </WriteOptionStyle>
  );
};

export default WriteOption;
