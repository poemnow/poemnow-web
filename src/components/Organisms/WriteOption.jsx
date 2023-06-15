import { useState } from "react";
import styled from "styled-components";
import Header from "../Organisms/Header";
import H5 from "../Atoms/H5"
import Label from "../Atoms/Label"
// import TagCard from "../Molecules/Tagcard";

const WriteOptionStyle = styled.div`
  outline: 1px solid var(--gray-300);;
  background-color: #ffffff;
  color: black;
  padding: 10px;
  width: 100%;
  min-width: 320px;
  max-width: 320px;
  margin-left: auto;
  margin-right: auto;
  
`;

const ToggleButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ToggleButton = styled.button`
  background-color: ${({ active }) => (active ? "var(--primary2)" : "var(--gray-50)")};
  color: ${({ active }) => (active ? "white" : "var(--gray-600)")};
  border: none;
  outline: 1px solid var(--gray-300);
  border-radius: 8px;
  padding: 10px;
  margin: 8px 8px 8px 8px;
  width: 44% ;
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
      <Header isX={true} title={"발행옵션"}/>
      <hr />
      <br/>
      <div style={{display:"flex", alignItems:"center"}}>
      
      <H5 weight={"bold"}>공개 설정</H5>
      <div style={{marginLeft:"8px"}}/>{" "}
      <Label color={"var(--gray-500)"}>비공개 설정시 시는 마이페이지에서만 확인할 수 있습니다.</Label>
      </div>
      <ToggleButtonWrapper>
      <ToggleButton active={isPublic} onClick={handlePublicToggle}>
        전체 공개
      </ToggleButton>
      <ToggleButton active={!isPublic} onClick={handlePrivateToggle}>
        비공개
      </ToggleButton>
      </ToggleButtonWrapper>
      <br/>
      <div style={{display:"flex" , alignItems:"center"}}>
      <H5 weight={"bold"}>익명 설정</H5>
      <div style={{marginLeft:"8px"}}/>
      <Label color={"var(--gray-500)"} >익명 설정시 작자미상으로 시가 발행됩니다.</Label>
      </div>
      <ToggleButtonWrapper>
      <NameToggleButton active={!isAnonymous} onClick={handleNameToggle}>
        필명
      </NameToggleButton>
      <NameToggleButton active={isAnonymous} onClick={handleAnonymousToggle}>
        익명
      </NameToggleButton>
      </ToggleButtonWrapper>
      {/* <TagCard text="태그 이름" count={10} /> */}

    </WriteOptionStyle>
  );
};

export default WriteOption;