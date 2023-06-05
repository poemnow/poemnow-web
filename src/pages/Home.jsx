import styled from "styled-components";
import Comment from "../components/Molecules/Comment";
import Layout from "../components/Organisms/Layout";
import CommentCard from "../components/Molecules/CommentCard";
import Tab from "../components/Molecules/Tab";
import TabBar from "../components/Organisms/TabBar";
import Search from "../components/Molecules/Search";
import Header from "../components/Organisms/Header";
const HomeContainer = styled.div``;

const Span = styled.div`
  /* font-family: "Pretendard"; */
  font-weight: 900;
`;

function Home() {
  return (
    <HomeContainer>
      {/* <Layout> */}
      {/* <Comment
          author="작가이름"
          content="야~~~ 멋진 시집이다잉~~~ 눈물 좔좔 ~~;;; 쥑이네;;;adjsfklasjdfkljalsk;fjdkl;asjdflk;jaslk;dfjkla;sjdfkljalsdfjlakjsdlk;fjlas"
          createdAt="2020.03.03 00:45"
          src="https://i.namu.wiki/i/O0Efmwwamje2c0f0nhaNry7o00diuBU9aFzEKjyLEmUkOyEo25czP3Ds7T4zfEHbMpcyXcF6padMJPsVnWOS8d70BDxo-FzmeUdd6LiJo_TEc5S1FKq9r94HqRa0NAkaZ1S5b-TXXrhevaUiWv3ECg.webp"
        /> */}

      {/* <Span>
          뭐든지 다 예뻐 보인다는 말인데, 마케팅에서 성공한 디자인은 다
        </Span> */}
      {/* <CommentCard
          title="사랑이 머무르는 자리에"
          author="박미정"
          content="좋은 시 너무 잘 읽었습니다. 따봉 백개!! 댓글은 최대 세 줄까지 보여줍니다."
          createdAt="2020.03.05 15:00"
          poemUrl="/" // poem의 url을 보내야함. 임시로 "/"를 사용
        /> */}
      {/* <TabBar>
          <Tab>시</Tab>
          <Tab>시집</Tab>
          <Tab>댓글</Tab>
        </TabBar> */}
      {/* <Search outSize, inSize /> */}

      {/* </Layout> */}
    </HomeContainer>
  );
}

export default Home;
