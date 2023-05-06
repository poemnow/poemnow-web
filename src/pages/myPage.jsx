import { Link, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "../components/Atoms/Button";
import ProfileImage from "../components/Atoms/ProfileImage";
import P from "../components/Atoms/P";
import H3 from "../components/Atoms/H3";
import TabBar from "../components/Organisms/TabBar";
import PoemCardList from "../components/Organisms/PoemCardList";
import BookCardList from "../components/Organisms/BookCardList";

function MyPage() {
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

  return (
    <div>
      {/* 최상단 부분 -> 모달 버튼과 찜하기 버튼이 들어갑니다. */}
      <div>
        <Link to="/like">
          <Button>찜 목록</Button>
        </Link>
      </div>
      {/* 중간 부분 -> 프로필 이미지, 닉네임, 자기소개*/}
      <div>
        <div>
          {/* 프로필 이미지 */}
          {user && <ProfileImage src={user.profileImage} alt="프로필 이미지" />}
        </div>
        {/* 닉네임과 자기소개 */}
        <div>
          <H3>작가명 :{user && user.nickname}</H3>
          <P>자기소개 : {user && user.bio}</P>
          <P>SNS : {user && user.social_url} </P>
        </div>
      </div>
      {/* 바로 아래 -> 구독자 수, 관심작가 수, 책쓰기 버튼  */}
      <div>
        <div>
          <Link to="/follower">
            <Button>구독자 수 : {followerCount}</Button>
          </Link>
          <Link to="/following">
            <Button>관심작가 수 : {followingCount}</Button>
          </Link>
        </div>
        <div>
          <Link to="/write/poem">
            <Button>시 쓰기</Button>
          </Link>
        </div>
      </div>
      <div>
        <TabBar
          TabList={["시", "시집"]}
          state={selected}
          setState={setSelected}
        />
      </div>
      {/* 아랫부분은 시, 혹은 시집이 나온다.
      현재 URL에 따라 다른 결과를 출력한다. */}
      {selected === "poem" && <PoemCardList poemList={poemList} />}
      {selected === "book" && <BookCardList bookList={bookList} />}

      {/* 시 / 시집 선택 화면 */}
      {/* 시 / 시집 리스트 */}
    </div>
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
