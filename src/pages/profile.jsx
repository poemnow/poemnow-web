import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ModalButton from "../components/etc/ModalButton";
import CategoryButton from "../components/etc/CategoryButton";

function Profile() {
  const [user, setUser] = useState(null);
  const [followerCount, setFollowerCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);
  const [userInfo, setUserInfo] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false);

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

  const handleFollow = () => {
    setFollowerCount(followerCount + 1);
    fetch("/api/follow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: userInfo.id, followingId: user.id }),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsFollowing(true);
      });
  };

  const handleUnfollow = () => {
    setFollowerCount(followerCount - 1);
    fetch("/api/follow/${user.id}", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: userInfo.id }),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsFollowing(false);
      });
  };

  return (
    <div>
      {/* 최상단 부분 -> 모달 버튼과 찜하기 버튼이 들어갑니다. */}
      <div>
        <Link to="/like">
          <button>찜 목록</button>
        </Link>
        <ModalButton />
      </div>
      {/* 중간 부분 -> 프로필 이미지, 닉네임, 자기소개*/}
      <div>
        <div>
          {/* 프로필 이미지 */}
          {user && <img src={user.profileImage} />}
        </div>
        {/* 닉네임과 자기소개 */}
        <div>
          <h3>작가명 :{user && user.nickname}</h3>
          <p>자기소개 : {user && user.bio}</p>
        </div>
      </div>
      {/* 바로 아래 -> 구독자 수, 관심작가 수, 책쓰기 버튼  */}
      <div>
        <div>
          <Link to="/follower">
            <button>구독자 수 : {followerCount}</button>
          </Link>
          <Link to="/following">
            <button>관심작가 수 : {followingCount}</button>
          </Link>
        </div>
        <div>
          {isFollowing ? (
            <button onClick={handleUnfollow}>언팔로우</button>
          ) : (
            <button onClick={handleFollow}>팔로우</button>
          )}
        </div>
      </div>
      <div>
        <CategoryButton />
      </div>

      {/* 시 / 시집 선택 화면 */}
      {/* 시 / 시집 리스트 */}
    </div>
  );
}

export default Profile;
