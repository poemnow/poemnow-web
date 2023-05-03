import styled from "styled-components";

const StyledSearchCondition = styled.div`
  width: 100px;
  height: 32px;
`;

const StyledButton = styled.button`
  width: 100px;
  height: 32px;
`;

// const = [currentSort, SetCurrtentSort] = useState("latest");
// onChangeSort() 두 가지를 만들어서 인자로 넣어 쓸 수 있습니다.
export default function SearchCondition({ currentSort, onChangeSort }) {
  const handleSortClick = (sortType) => {
    if (sortType !== currentSort) {
      onChangeSort(sortType);
    }
  };
  return (
    <StyledSearchCondition>
      <StyledButton
        isSelected={currentSort === "latest"}
        onClick={() => handleSortClick("latest")}
      >
        최신순
      </StyledButton>
      <StyledButton
        isSelected={currentSort === "popular"}
        onClick={() => handleSortClick("popular")}
      >
        인기순
      </StyledButton>
    </StyledSearchCondition>
  );
}
