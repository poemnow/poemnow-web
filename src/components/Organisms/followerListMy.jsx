import React from "react";
import { useEffect, useState } from "react";
import api from "../../utils/api";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ProfileImage from "../Atoms/ProfileImage";
import FollowerCnt from "./followerCnt";
import ModalMiddle2 from "../Molecules/ModalMiddle2";
import Icon from "../Atoms/Icon";

const FollowerLCnt = styled.div`
  align-items: center;
  text-align: center;
  padding-top: 8px;
  font-size: var(--mobile-h5-medium);
`;
const FollowListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const FollowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 8px;
  padding-left: 16px;
  padding-right: 16px;
  align-items: center;
`;
const FollowName = styled.div`
  color: var(--gray-900);
  justify-content: left;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-left: 20px;
`;
const FollowUserName = styled.div`
  color: var(--gray-600);
  font-size: var(--mobile-h5-medium);
  height: 21px; /* 3줄에 해당하는 높이 */
  line-height: 1.5; /* 텍스트 줄 간격 */
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 128px;
`;
const FollowBio = styled.div`
  color: gray;
  font-size: var(--mobile-label-light);
  height: 21px; /* 3줄에 해당하는 높이 */
  line-height: 1.5; /* 텍스트 줄 간격 */
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 128px;
`;

const ButtonFollowing = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gray-700);
  background-color: var(--gray-200);
  width: 50px;
  height: 28px;
  border-radius: 10px;
  font-size: var(--mobile-label-medium);
  border: none;
`;
const ButtonFollower = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: var(--primary);
  width: 50px;
  height: 28px;
  border-radius: 10px;
  font-size: var(--mobile-label-medium);
  border: none;
`;
const IconContainer = styled.span`
  position: absolute;
  left: 10px;
  top: 3px;
`;

function FollowerListMy(props) {
  const [showPopup, setShowPopup] = useState(-1);

  const [buttonText, setButtonText] = useState(-1);

  const [data, setData] = useState();
  useEffect(() => {
    api("follow/follower", "GET").then((res) => setData(res));
  }, []);

  useEffect(() => {
    const followList = JSON.stringify(data);
    if (followList != null) {
      console.log(JSON.parse(followList));
    }
  }, [data]);

  function insertdeleteFollow(id, i) {
    api("follow/follower?followId=" + id, "DELETE").then(() => {
      api("follow/follower", "GET").then((res) => setData(res));
    });

    setButtonText(i);
    setShowPopup(-1);
  }

  //버튼 텍스트 배열로 바꾸고 i 값들을 저장해 두고 버튼 텍스트들이 i값들인 것들은 전부
  //팔로우로 보이게 해야 한다. 나중에 고쳐
  return (
    <>
      <FollowerLCnt>
        <IconContainer>
          <Icon outSize="24px" inSize="12px">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              width="100%"
              height="100%"
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
            </svg>
          </Icon>
        </IconContainer>
        나를 구독하는 {<FollowerCnt id={""} />}명
      </FollowerLCnt>
      <FollowListContainer>
        {data
          ? Array.isArray(data)
            ? data.map((data, i) => {
                return (
                  <FollowContainer key={i}>
                    <ProfileImage
                      key={`${i}${data}`}
                      src={data.profile_pic}
                      size={"60px"}
                    ></ProfileImage>
                    <FollowName>
                      <FollowUserName key={`${i}${data}2`}>
                        {data.user_nickname}
                      </FollowUserName>
                      <FollowBio key={`${i}${data}3`}>{data.bio}</FollowBio>
                    </FollowName>

                    <ButtonFollowing onClick={() => setShowPopup(i)}>
                      삭제
                    </ButtonFollowing>

                    {showPopup == i ? (
                      <ModalMiddle2
                        nickname={data.user_nickname}
                        src={data.profile_pic}
                        toggleModal={() => setShowPopup(-1)}
                        insertdeleteFollow={() =>
                          insertdeleteFollow(data.id, i)
                        }
                      ></ModalMiddle2>
                    ) : // <div>
                    //   <div>
                    //     <span>{data.profile_pic}</span>
                    //     <span>
                    //       {data.user_nickname} 님의 팔로우를 취소하시겠어요?
                    //     </span>
                    //     <button
                    //       onClick={() =>
                    //         insertdeleteFollow(data.id, false, i)
                    //       }
                    //     >
                    //       팔로우취소
                    //     </button>
                    //     <button onClick={() => setShowPopup(-1)}>취소</button>
                    //   </div>
                    // </div>
                    null}
                  </FollowContainer>
                );
              })
            : null
          : null}
      </FollowListContainer>
    </>
  );
}

export default FollowerListMy;
