import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../utils/api";
import styled from "styled-components";
import ProfileImage from "../components/Atoms/ProfileImage";
import Header from "../components/Organisms/Header";
import CommentList from "../components/Organisms/CommentList";
import Icon from "../components/Atoms/Icon";

const PoemDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const TopContainer = styled.div`
  display: flex;
  height: 172px;
  align-items: end;
`;
const TopContainer2 = styled.div`
  display: flex;
  margin-left: 16px;
  margin-right: 11px;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid var(--gray-300);
  padding-bottom: 8px;
`;
const PicContainer = styled.div`
  display: flex;
`;
const DateContainer = styled.div`
  display: flex;
  align-items: center;
  color: var(--gray-400);
  font-size: var(--mobile-label-medium);
`;
const ContentContainer = styled.div`
  display: flex;
  border-bottom: 1px solid var(--gray-300);
  margin-left: 16px;
  margin-right: 11px;
`;
const Content = styled.pre`
  display: flex;
  margin: 40px;
  font-size: var(--mobile-text);
  line-height: 1.3;
`;
const CommentContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
const CommentTop = styled.div`
  display: flex;
  padding: 0px 16px;
  padding-top: 16px;
  padding-bottom: 32px;
  align-items: center;
`;
const CommentHeart = styled.div`
  cursor: pointer;
`;
const CommentHeartCnt = styled.div`
  font-size: var(--mobile-p);
  color: var(--gray-500);
`;
const CommentUpload = styled.div`
  margin-left: 8px;
`;
const CommentCo = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;
const CommentCoCnt = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 11;
  font-size: var(--mobile-p);
  color: var(--gray-500);
`;

const CommentWriteContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 98px;
  align-items: center;
  position: relative;
`;

const Textarea = styled.textarea`
  position: relative;
  border: 1px solid gray;
  border-radius: 10px;
  width: 80%;
  height: 40px;
  padding: 8px;
  margin-left: 8px;
  font-size: var(--mobile-p);
  color: var(--gray-400);
`;

const SubmitButton = styled.button`
  position: absolute;
  right: 10px;
  bottom: 10px;
  padding: 8px 16px;
  border: none;
  background: none;
  color: blue;
  cursor: pointer;
`;

function PoemDetail() {
  const params = useParams();
  if (params.id === undefined) {
    params.id = ""; //null로 바꿔 버리자
  }
  const [data, setData] = useState();
  useEffect(() => {
    api("poem/" + params.id, "GET").then((res) => setData(res));
  }, []);

  const [comment, setComment] = useState();
  useEffect(() => {
    api("comment/poem/" + params.id, "GET").then((res) => setComment(res));
  }, []);

  const [poemLike, setPoemLike] = useState();
  useEffect(() => {
    api("poem-like/poem-like/poem/count/" + params.id, "GET").then((res) =>
      setPoemLike(res)
    );
  }, []);

  const [commentCnt, setCommentCnt] = useState();
  useEffect(() => {
    api("comment/poem/count/" + params.id, "GET").then((res) =>
      setCommentCnt(res)
    );
  }, []);

  useEffect(() => {
    const poemDetail = JSON.stringify(data);
    if (poemDetail != null) {
      console.log(JSON.parse(poemDetail));
    }
  }, [data]);
  console.log(data);
  console.log(comment);

  const [commentText, setCommentText] = useState("");

  const handleInputChange = (event) => {
    setCommentText(event.target.value);
  };

  function insertComment(content, poemId) {
    console.log(poemId);
    const requestBody = {
      content: content,
      poemId: poemId,
    };
    api("comment", "POST", requestBody).then(() => {
      // 코멘트 추가 후에 comment와 commentCnt 상태 값을 업데이트
      api("comment/poem/" + params.id, "GET").then((res) => setComment(res));
      api("comment/poem/count/" + params.id, "GET").then((res) =>
        setCommentCnt(res)
      );
    });
  }
  const [isClicked, setIsClicked] = useState(true);

  useEffect(() => {
    api("poem-like/poem-like/poem", "GET").then((res) => {
      if (data && data.id) {
        // Check if any of the poemLikeStatus items have a matching poemId
        console.log(data.id);
        const hasMatchingPoemId = res.some((item) => item.poemId === data.id);
        setIsClicked(!hasMatchingPoemId);
      }
    });
  }, [data]);

  const handleClick = () => {
    if (isClicked === true) {
      const requestBody = {
        poemId: data.id,
      };
      api("poem-like/poem-like", "POST", requestBody).then(() => {
        api("poem-like/poem-like/poem/count/" + params.id, "GET").then((res) =>
          setPoemLike(res)
        );
      });
    } else {
      api("poem-like/poem-like/" + params.id, "DELETE").then(() => {
        api("poem-like/poem-like/poem/count/" + params.id, "GET").then((res) =>
          setPoemLike(res)
        );
      });
    }

    setIsClicked((prevState) => !prevState);
  };

  return (
    <>
      <Header
        isBack={true}
        isEllipsis={true}
        isHome={true}
        isX={false}
      ></Header>
      <PoemDetailContainer>
        {data && ( // data가 존재하는 경우에만 렌더링
          <>
            <TopContainer>
              <TopContainer2>
                <PicContainer>
                  <ProfileImage
                    src={data.profile_pic}
                    size={"36px"}
                  ></ProfileImage>
                </PicContainer>
                <DateContainer>{data.publishedAt}</DateContainer>
              </TopContainer2>
            </TopContainer>

            <ContentContainer>
              <Content>{data.content}</Content>
            </ContentContainer>
            <CommentTop>
              <CommentHeart onClick={handleClick}>
                {isClicked ? (
                  <Icon outSize="24px" inSize="16px">
                    <svg
                      fill="red"
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      viewBox="0 0 512 512"
                    >
                      <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
                    </svg>
                  </Icon>
                ) : (
                  <Icon outSize="24px" inSize="16px">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      viewBox="0 0 512 512"
                      fill="red"
                    >
                      <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                    </svg>
                  </Icon>
                )}
              </CommentHeart>
              {poemLike && <CommentHeartCnt>{poemLike}</CommentHeartCnt>}

              <CommentUpload>
                {" "}
                <Icon outSize="24px" inSize="16px">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <path d="M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3V320c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 53 43 96 96 96H352c53 0 96-43 96-96V352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V352z" />
                  </svg>
                </Icon>
              </CommentUpload>
              {commentCnt && <CommentCoCnt>{commentCnt}</CommentCoCnt>}
              <CommentCo>
                {" "}
                <Icon outSize="24px" inSize="16px">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path d="M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16h96zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V474.7v-6.4V468v-4V416H112 64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H448c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H309.3L208 492z" />
                  </svg>
                </Icon>
              </CommentCo>
            </CommentTop>
            <CommentContainer>
              {comment && <CommentList comments={comment}></CommentList>}
            </CommentContainer>
            <CommentWriteContainer>
              <ProfileImage src={data.profile_pic} size={"40px"}></ProfileImage>
              <Textarea
                placeholder="작가이름 님으로 댓글 달기"
                value={commentText}
                onChange={handleInputChange}
              ></Textarea>
              <SubmitButton onClick={() => insertComment(commentText, data.id)}>
                등록
              </SubmitButton>
            </CommentWriteContainer>
          </>
        )}
      </PoemDetailContainer>
    </>
  );
}

export default PoemDetail;
