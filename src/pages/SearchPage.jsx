import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Organisms/Header";
import Search from "../components/Molecules/Search";
import ChoiceBar from "../components/etc/ChoiceBar";
import ConditionBar from "../components/etc/ConditionBar";
import PoemCardList from "../components/Organisms/PoemCardList";
import WriterCardList from "../components/Organisms/WriterCardList";
import axios from "axios";

const SearchPageContainer = styled.div`
  padding: 0px 16px;
`;

// 해야하는 부분들
// 1. 검색 input 창에 돋보기 아이콘이 들어가야 함
// 2. TabList에 탭 선택 기능 추가
// 3. 최신순, 인기순 정렬 선택 기능 추가

export default function SearchPage() {
  // input 창에 키워드를 넣고 엔터를 누르면 get 요청을 보내고,
  // 응답을 contentList에 저장함.
  // 그래서 여기에는 응답이 들어있음.
  const [contentList, setContentList] = useState(null);

  // input 창에 입력하는 값에 따라 keyword가 바뀜
  // 이걸로 get 요청을 날리면 됨.
  const [keyword, setKeyword] = useState("");

  // 어떤 탭이냐에 따라 요청이 달라짐
  // 선택된 탭을 저장하는 변수
  const [selectedTab, setSelectedTab] = useState("poem");

  // input의 value가 변함에 따라서 keyword를 업데이트함
  const handleSearchChange = (event) => {
    // console.log(event.target.value);
    setKeyword(event.target.value);
  };

  // useEffect(() => {
  //   console.log(keyword);
  // }, [keyword]);

  // 검색이 되는 경우는 두 가지가 있음
  // 1. 키워드를 치고 엔터를 눌렀을 때
  // 2. 탭을 눌렀을 때
  // ex) poem을 입력하고 검색을 누르면, 기본적으로 시 리스트가 출력됨
  // 그 상태에서 작가를 누르면 poem이라는 이름을 가진 작가 리스트를 가져와야하는데
  // 그 정보는 현재 contentList에 없으니 새로운 요청을 날려야함.
  // 그 요청을 보내기 위해서 performSearch라는 함수를 만들었고,
  // 이 함수는 엔터를 누를 때, 탭을 누를 때 이 두 경우에 호출됨.
  const performSearch = () => {
    // 일단 url을 만들어놓고
    let url = "";
    console.log("검색" + keyword);

    // 선택된 탭에 따라 url을 바꿈
    if (selectedTab === "poem") {
      url = `http://localhost:8080/poemSearch/poemSearchByTitleAndContent?keyword=${keyword}`;
    } else if (selectedTab === "writer") {
      url = `http://localhost:8080/userSearch/user/${keyword}`;
    }

    // url이 있으면 요청을 날리는데
    if (url) {
      axios
        .get(url)
        .then((response) => {
          console.log(response.data);

          // 응답을 받아서 contentList에 저장
          setContentList(response.data);
          console.log(contentList);
          console.log("Keyword");
          console.log(keyword);
        })
        .catch((error) => console.log(error));
    }
  };

  // 이게 엔터를 눌렀을 때의 함수
  // preventDefault 해주고 performSearch를 호출함
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    performSearch();
  };

  // selectedTab이 바뀌면 performSearch를 호출함
  useEffect(() => {
    performSearch();
  }, [selectedTab]);

  // 탭이 바뀌면 SelectedTab을 바꿔줌
  const handleTabChange = (selectedTab) => {
    setSelectedTab(selectedTab);
  };

  return (
    <SearchPageContainer>
      {/* 타이틀은 비워놨는데 넣어도 됨 */}
      <Header isBack={true} title={""} />
      <Search
        value={keyword}
        onChange={handleSearchChange}
        onSubmit={handleSearchSubmit}
        placeholder="검색어를 입력하세요"
      />

      {/* 여기 ChoiceBar와 ConditionBar는 바꿔야할 부분.
      컴포넌트 만들기 전의 잔재임.
      */}
      <ChoiceBar />
      <ConditionBar />
      <div>
        {/* 현재 selectedTab에 따라 아래 컴포넌트를 호출 */}
        {contentList && selectedTab === "poem" && (
          <PoemCardList poemList={contentList} />
        )}
        {contentList && selectedTab === "writer" && (
          <WriterCardList writers={contentList} />
        )}
      </div>
      <Outlet />
    </SearchPageContainer>
  );
}
