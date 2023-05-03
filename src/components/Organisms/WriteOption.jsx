import { useState } from "react";
import styled from "styled-components";
import TagCard from "./Tagcard";

const ToggleButton = styled.button`
  background-color: ${({ active }) => (active ? "blue" : "grey")};
  color: white;
  border: none;
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
    <div>
      <ToggleButton active={isPublic} onClick={handlePublicToggle}>
        공개
      </ToggleButton>
      <ToggleButton active={!isPublic} onClick={handlePrivateToggle}>
        비공개
      </ToggleButton>
      <br />
      <NameToggleButton active={!isAnonymous} onClick={handleNameToggle}>
        필명
      </NameToggleButton>
      <NameToggleButton active={isAnonymous} onClick={handleAnonymousToggle}>
        익명
      </NameToggleButton>
      <br />
      <TagCard text="태그 이름" count={10} />
    </div>
  );
};

export default WriteOption;
