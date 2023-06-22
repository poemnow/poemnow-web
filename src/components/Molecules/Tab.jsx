import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import H6 from "../Atoms/H6";

const TabContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 128px;
  flex: 1;
  padding: 16px 0;
  font-size: var(--mobile--H5--medium);
  border-bottom: ${(props) =>
    props.isHere ? "2px solid var(--primary)" : "2px solid var(--gray-200)"};
`;

/*
 * Tag에 밑줄이 있으려면 matchWord와 index의 값을 조정해야 한다.
 * matchWord에 url에서 찾고 싶은 글자 입력
 * index에는 찾고 싶은 글자가 몇 번째에 있는지 확인
 * e.g. /search/tag에 있을 때만 밑줄이 생기게 하고 싶다.
 * matchWord={tag} , index={2}로 정하면 된다.
 */

export default function Tab({ children, matchWord, index, state, handleTabClick }) {
  const location = useLocation();
  const curUrl = location.pathname.split("/").at(index);

  const onClick = () => {
    handleTabClick(matchWord);
  };

  return (
    <TabContainer isHere={state === matchWord}>
      <H6 onClick={onClick}>{children}</H6>
    </TabContainer>
  );
}
