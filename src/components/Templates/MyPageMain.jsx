import styled from "styled-components";
import Button from "../Atoms/Button";
import { Link } from "react-router-dom";
import ProfileImage from "../Atoms/ProfileImage";
import H3 from "../Atoms/H3";
import SocialURL from "../Atoms/SocialURL";

const MyPageMainContainer = styled.div``;

const MyPageMainStart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const MyPageFollowContainer = styled.div`
  display: flex;
  margin-top: 4px;
  gap: 24px;
`;

const MyPageFollowBox = styled.div`
  display: inline-block;
  font-size: var(--mobile-label);
`;

const UrlContainer = styled.div`
  display: flex;
`;

export default function MyPageMain({ user }) {
  return (
    <MyPageMainContainer>
      <MyPageMainStart>
        <ProfileImage
          size="80px"
          src="https://i.namu.wiki/i/O0Efmwwamje2c0f0nhaNry7o00diuBU9aFzEKjyLEmUkOyEo25czP3Ds7T4zfEHbMpcyXcF6padMJPsVnWOS8d70BDxo-FzmeUdd6LiJo_TEc5S1FKq9r94HqRa0NAkaZ1S5b-TXXrhevaUiWv3ECg.webp"
        />
        <H3>{user.name}</H3>
        <UrlContainer>
          <SocialURL url={user.url} color={"var(--primary2)"}></SocialURL>
        </UrlContainer>
        <MyPageFollowContainer>
          <MyPageFollowBox>구독자 {user.followerCnt}명</MyPageFollowBox>
          <MyPageFollowBox>구독작가 {user.followingCnt}명</MyPageFollowBox>
        </MyPageFollowContainer>
      </MyPageMainStart>
      {/* <div>
        <Link to="/like">
          <Button>찜 목록</Button>
        </Link>
      </div>
      <div>
        <div>
          {user && <ProfileImage src={user.profileImage} alt="프로필 이미지" />}
        </div>
        <div>
          <H3>작가명 :{user && user.nickname}</H3>
          <P>자기소개 : {user && user.bio}</P>
          <P>SNS : {user && user.social_url} </P>
        </div>
      </div>
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
      </div> */}
    </MyPageMainContainer>
  );
}
