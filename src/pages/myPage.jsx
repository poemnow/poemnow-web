import { Link, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "../components/Atoms/Button";
import ProfileImage from "../components/Atoms/ProfileImage";
import P from "../components/Atoms/P";
import H3 from "../components/Atoms/H3";
import TabBar from "../components/Organisms/TabBar";
import PoemCardList from "../components/Organisms/PoemCardList";
import BookCardList from "../components/Organisms/BookCardList";
import styled from "styled-components";
import Header from "../components/Organisms/Header";
import MyPageMain from "../components/Templates/MyPageMain";

const MyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

function MyPage() {
  const location = useLocation();
  const curUrl = location.pathname.split("/");

  const [user, setUser] = useState(null);
  const [followerCount, setFollowerCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);
  const [userInfo, setUserInfo] = useState(null);
  const [selected, setSelected] = useState("poem");
  const [bookList, setBookList] = useState(null);
  const [poemList, setPoemList] = useState(null);

  useEffect(() => {
    fetch("/api/user")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  useEffect(() => {
    fetch("/api/follower")
      .then((response) => response.json())
      .then((data) => setFollowerCount(data));
  }, []);

  useEffect(() => {
    fetch("/api/following")
      .then((response) => response.json())
      .then((data) => setFollowingCount(data));
  }, []);

  useEffect(() => {
    const userInfoFromStorage = localStorage.getItem("userInfo");
    if (userInfoFromStorage) {
      setUserInfo(JSON.parse(userInfoFromStorage));
    }
  }, []);

  useEffect(() => {
    fetch("/api/bookList/{userInfo.id}")
      .then((response) => response.json())
      .then((data) => setBookList(data));
  }, []);

  useEffect(() => {
    fetch("/api/poemList/{userInfo.id}")
      .then((response) => response.json())
      .then((data) => setPoemList(data));
  }, []);

  const dummyUser = {
    name: "박지우",
    url: "http://example.com",
    followerCnt: 10,
    followingCnt: 12,
  };
  return (
    <MyPageContainer>
      <Header isX={false} isBack={true} isHome={true} isEllipsis={true} />
      <MyPageMain user={dummyUser} />
      {/* <div>
        <TabBar
          TabList={["시", "시집"]}
          state={selected}
          setState={setSelected}
        />
      </div>
      {selected === "poem" && <PoemCardList poemList={poemList} />}
      {selected === "book" && <BookCardList bookList={bookList} />} */}
    </MyPageContainer>
  );
}

export default MyPage;

// 우측 상단에는 메뉴 -> 이건 헤더부분인거같은데?
// 우측 상단에 다시 나의 보관함 -> like/poem으로 이동 -> Link 컴포넌트
// 중간 좌측에 프로필 사진 가져와서 표시
// 프로필 우측 위에 닉네임 -> 세션에서 아이디 가져와서 조회
// 닉네임 아래에 자기소개 -> 마찬가지로 아이디로 가져와서 조회
// 아래에 구독자 ?명 / 관심작가 ?명 -> following / follower로 이동
// 오른쪽에 글쓰기 버튼 -> writePoem / writeBook으로 이동
// 아래에 카테고리 시 / 시집 -> 누르면 아래 조회 내용 달라짐
// 아래에는 시 or 시집을 보여줌 -> 이미지, 제목, 내용, 태그, 작가, 날짜, 좋아요 수, 조회수

// 의문 1. 시 / 시집을 menu로 할지 버튼으로 할지
// 2. 유저 아이디는 어디서 가져올지
// 3. 시에서 get 요청 어떻게 보낼지
