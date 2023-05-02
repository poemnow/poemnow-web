import styled from "styled-components";
import Date from "../Atoms/Date";
import ProfileImage from "../Atoms/ProfileImage";
import P from "../Atoms/P";
const HeroPoemStyle = styled.div`
  width: 1000px;
  height: 400px;
  text-align: center;
`;
const titleStyle = styled.div`
  width: 100%;
  height: 400px;
  margin-left: auto;
  margin-right: auto;
`;
const HeroBottomStyle = styled.div`
  width: 100%;
  height: 100px;
`;
const H1 = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;
// 시 제목, 날짜, 프로필 이미지 src, 유저 닉네임을 인자로 받습니다.
export default function HeroPoem({ title, date, src, nickname }) {
  return (
    <HeroPoemStyle>
      <titleStyle>
        <H1>{title}</H1>
      </titleStyle>
      <HeroBottomStyle>
        <Date>{date}</Date>
        <ProfileImage src={src}></ProfileImage>
        <P>{nickname}</P>
      </HeroBottomStyle>
    </HeroPoemStyle>
  );
}
