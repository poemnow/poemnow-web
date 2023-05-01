import { useState } from "react";
import styled from "styled-components";

const ToggleButton = styled.button`
  background-color: ${({ active }) => (active ? "blue" : "grey")};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin-right: 10px;
  cursor: pointer;
`;

const App = () => {
  const [isPublic, setIsPublic] = useState(true);

  const handlePublicToggle = () => {
    setIsPublic(true);
  };

  const handlePrivateToggle = () => {
    setIsPublic(false);
  };

  return (
    <div>
      <ToggleButton active={isPublic} onClick={handlePublicToggle}>
        공개
      </ToggleButton>
      <ToggleButton active={!isPublic} onClick={handlePrivateToggle}>
        비공개
      </ToggleButton>
    </div>
  );
};

export default App;
