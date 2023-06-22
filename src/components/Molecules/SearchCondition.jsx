import styled from "styled-components";
import { useEffect, useState } from "react";
const StyledSearchCondition = styled.div`
  float: right;
`;

const StyledSpan = styled.span`
  margin-right: 20px;
  font-size: var(--mobile-label);
  width: 100px;
  height: 32px;
  cursor: pointer;
`;

// const = [currentSort, SetCurrtentSort] = useState("latest");
// onChangeSort() 두 가지를 만들어서 인자로 넣어 쓸 수 있습니다.
export default function SearchCondition({ currentSort, onChangeSort }) {
  const [isClicked, setIsClicked] = useState(true);

  const handleSortClick = (sortType, boolean) => {
    if (sortType !== currentSort) {
      onChangeSort(sortType);
    }
    setIsClicked(boolean);
  };
  return (
    <StyledSearchCondition>
      <StyledSpan
        isSelected={currentSort === "latest"}
        onClick={() => handleSortClick("latest", true)}
        style={{ color: isClicked ? "green" : "gray" }}
      >
        최신순
      </StyledSpan>
      <StyledSpan
        isSelected={currentSort === "popular"}
        onClick={() => handleSortClick("popular", false)}
        style={{ color: isClicked ? "gray" : "green" }}
      >
        인기순
      </StyledSpan>
    </StyledSearchCondition>
  );
}
