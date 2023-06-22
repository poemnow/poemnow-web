import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Organisms/Header";
import Search from "../components/Molecules/Search";
import TabBar from "../components/Organisms/TabBar";
import SearchCondition from "../components/Molecules/SearchCondition";

import { tabList } from "../components/Organisms/TabBar";



import PoemCardList from "../components/Organisms/PoemCardList";
import WriterCardList from "../components/Organisms/WriterCardList";
import axios from "axios";

const SearchPageContainer = styled.div`
  padding: 0px 16px;
`;

const UnderTabBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 16px;
`;

const SearchResult = styled.div`
  padding: 0px 16px;
  font-size: var(--mobile-label);
  color: var(--gray-400);
`;

// 해야하는 부분들
// 1. 검색 input 창에 돋보기 아이콘이 들어가야 함
// 2. TabList에 탭 선택 기능 추가
// 3. 최신순, 인기순 정렬 선택 기능 추가

export default function SearchPage() {
  // input 창에 키워드를 넣고 엔터를 누르면 get 요청을 보내고,
  // 응답을 contentList에 저장함.
  // 그래서 여기에는 응답이 들어있음.
  const [poemContentList, setPoemContentList] = useState([]);
  const [writerContentList, setWriterContentList] = useState([]);
  
  // 검색 결과를 캐싱하는 상태 변수
  const [contentCache, setContentCache] = useState({});

  const [poemCount, setPoemCount] = useState(0);
  const [writerCount, setWriterCount] = useState(0);


  // input 창에 입력하는 값에 따라 keyword가 바뀜
  // 이걸로 get 요청을 날리면 됨.
  const [keyword, setKeyword] = useState("");

  // 어떤 탭이냐에 따라 요청이 달라짐
  // 선택된 탭을 저장하는 변수
  const [selectedTab, setSelectedTab] = useState(tabList[0]);

  const [sortType, setCurrentSort] = useState("latest");

  const handleChangeSort = (sortType) => {
    setCurrentSort(sortType);
  };

  // input의 value가 변함에 따라서 keyword를 업데이트함
  const handleSearchChange = (event) => {
    // console.log(event.target.value);
    setKeyword(event.target.value);
  };

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

    // 선택된 탭에 따라 url을 바꿈
    if (selectedTab === "시") {
      if(sortType === "latest"){
        url = `http://localhost:8080/poemSearch/poemSearchByTitleAndContent?keyword=${keyword}&sortOrder=created_at`;
      } else if(sortType === "popular"){
        url = `http://localhost:8080/poemSearch/poemSearchByTitleAndContent?keyword=${keyword}&sortOrder=like`;
      }
    } else if (selectedTab === "작가") {
      if(sortType === "latest"){
        url = `http://localhost:8080/user/nickname?keyword=${keyword}&sortOrder=created_at`;
      }else if(sortType==="popular"){
        url = `http://localhost:8080/user/nickname?keyword=${keyword}&sortOrder=follower_cnt`;
      }
    }

    // url이 있으면 요청을 날리는데
    if (url) {      
      if (contentCache[selectedTab] && contentCache[selectedTab][keyword] && contentCache[selectedTab][keyword][sortType]) {
        // 캐시된 결과가 있을 경우 캐시된 결과를 사용
        if (selectedTab === "시") {
          setPoemContentList(contentCache[selectedTab][keyword][sortType]);
          setWriterContentList([]);
          setPoemCount(contentCache[selectedTab][keyword][sortType].length);
        } else if (selectedTab === "작가") {
          setWriterContentList(contentCache[selectedTab][keyword][sortType]);
          setPoemContentList([]);
          setWriterCount(contentCache[selectedTab][keyword][sortType].length);
        }
      } else {
        axios
          .get(url)
          .then((response) => {
            console.log(response.data);
            const data = response.data;

            // 응답을 받아서 contentList에 저장
            if (selectedTab === "시") {
              setPoemContentList(data);
              setWriterContentList([]);
              setWriterCount(0); // 시 검색 시에는 작가 결과 개수 0으로 설정
              setPoemCount(data.length); // 검색 결과 개수 업데이트
            } else if (selectedTab === "작가") {
              setWriterContentList(data);
              setPoemContentList([]);
              setPoemCount(0); // 작가 검색 시에는 시 결과 개수 0으로 설정
              setWriterCount(data.length); // 검색 결과 개수 업데이트
            }

            // 결과를 캐싱
            const updatedCache = {
              ...contentCache,
              [selectedTab]: {
                ...contentCache[selectedTab],
                [keyword]: {
                  ...contentCache[selectedTab]?.[keyword],
                  [sortType]: data,
                }
              },
            };
            setContentCache(updatedCache);
          })
          .catch((error) => console.log(error));
      }
    }
  };

  // 이게 엔터를 눌렀을 때의 함수
  // preventDefault 해주고 performSearch를 호출함
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    performSearch();
  };
  
  // 탭이 바뀌면 SelectedTab을 바꿔줌
  const handleTabChange = (selectedTab) => {
    setSelectedTab(selectedTab);
  };
  // selectedTab이 바뀌면 performSearch를 호출함
  useEffect(() => {
    // keyword가 비어있지 않을 때만 검색 수행
  if (keyword) {
    performSearch();
  }
    console.log(selectedTab)
  }, [selectedTab, sortType]);




  return (
    <SearchPageContainer>
      {/* 타이틀은 비워놨는데 넣어도 됨 */}
      <Header isBack={true} title={"검색"} />
      <Search
        value={keyword}
        onChange={handleSearchChange}
        onSubmit={handleSearchSubmit}
        placeholder="검색어를 입력하세요"
      />
        <TabBar state={selectedTab} setState={handleTabChange} />
        <UnderTabBar>
          <SearchResult>검색 결과 {selectedTab === "시" ? poemCount : writerCount}건</SearchResult>
      <SearchCondition currentSort={sortType} onChangeSort={handleChangeSort}></SearchCondition>
      </UnderTabBar>
        

      <div>
        {/* 현재 selectedTab에 따라 아래 컴포넌트를 호출 */}
        { poemContentList&& selectedTab === "시" &&   (
          <PoemCardList poemList={poemContentList} keyword={keyword} />
        )}
        { writerContentList&& selectedTab === "작가" &&   (
          <WriterCardList users={writerContentList} keyword={keyword}/>
        )}
      </div>
      <Outlet />
    </SearchPageContainer>
  );
}
