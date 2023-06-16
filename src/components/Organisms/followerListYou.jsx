import React from "react";
import { useEffect, useState } from "react";
import api from "../../utils/api";
import { useParams } from "react-router-dom";
import FollowerCnt from "./followerCnt";
import styled from "styled-components";
import ProfileImage from "../Atoms/ProfileImage";
import ModalMiddle from "../Molecules/ModalMiddle";
import Icon from "../Atoms/Icon";

const FollowLCnt = styled.div`
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
function FollowerListYou(props) {
  const params = useParams();
  if (params.id === undefined) {
    params.id = ""; //null로 바꿔 버리자
  }

  const [showPopup, setShowPopup] = useState(-1);
  //data.same을 useState
  const [buttonText, setButtonText] = useState(-1);

  const [data, setData] = useState();
  const [sameData, setSameData] = useState();
  const [difData, setDifData] = useState();
  useEffect(() => {
    api("follow/follower/" + params.id, "GET").then((res) => setData(res));
  }, []);
  useEffect(() => {
    const followList = JSON.stringify(data);
    if (followList != null) {
      const temp = JSON.parse(followList);
      setSameData(temp.same);
      setDifData(temp.dif);
    }
  }, [data]);
  function insertdeleteFollow(id, flag, i) {
    if (flag == false) {
      api("follow?followId=" + id, "DELETE");
      setButtonText(i);
      setShowPopup(-1);
    } else {
      api("follow?followId=" + id, "POST");
      setButtonText(-1);
    }
  }
  function insertdeleteFollow2(id, flag, i) {
    if (flag == false) {
      api("follow?followId=" + id, "DELETE");
      setButtonText(-1);
      setShowPopup(-1);
    } else {
      api("follow?followId=" + id, "POST");
      setButtonText(i);
    }
  }
  console.log(sameData);
  console.log(data);
  let a = 0;
  return (
    <>
      <FollowLCnt>
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
        팔로워 {<FollowerCnt id={params.id} />}명
      </FollowLCnt>
      <FollowListContainer>
        {sameData
          ? Array.isArray(sameData)
            ? sameData.map((data, i) => {
                a = i;
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

                    {buttonText == i ? (
                      <ButtonFollower
                        onClick={() => insertdeleteFollow(data.id, true, i)}
                      >
                        팔로우
                      </ButtonFollower>
                    ) : (
                      <ButtonFollowing onClick={() => setShowPopup(i)}>
                        팔로잉
                      </ButtonFollowing>
                    )}

                    {showPopup == i ? (
                      <ModalMiddle
                        nickname={data.user_nickname}
                        src={data.profile_pic}
                        toggleModal={() => setShowPopup(-1)}
                        insertdeleteFollow={() =>
                          insertdeleteFollow(data.id, false, i)
                        }
                      ></ModalMiddle>
                    ) : null}
                  </FollowContainer>
                );
              })
            : null
          : null}
        {difData
          ? Array.isArray(difData)
            ? difData.map((data, i) => {
                return (
                  <FollowContainer key={i}>
                    <ProfileImage
                      key={`${i}${data}`}
                      src={data.profile_pic}
                      size={"80px"}
                    ></ProfileImage>
                    <FollowName>
                      <FollowUserName key={`${i}${data}2`}>
                        {data.user_nickname}
                      </FollowUserName>
                      <FollowBio key={`${i}${data}3`}>{data.bio}</FollowBio>
                    </FollowName>
                    {buttonText == i + a + 1 ? (
                      <ButtonFollowing onClick={() => setShowPopup(i + a + 1)}>
                        팔로잉
                      </ButtonFollowing>
                    ) : (
                      <ButtonFollower
                        onClick={() =>
                          insertdeleteFollow2(data.id, true, i + a + 1)
                        }
                      >
                        팔로우
                      </ButtonFollower>
                    )}

                    {showPopup == i + a + 1 ? (
                      <ModalMiddle
                        nickname={data.user_nickname}
                        src={data.profile_pic}
                        toggleModal={() => setShowPopup(-1)}
                        insertdeleteFollow={() =>
                          insertdeleteFollow2(data.id, false, i + a + 1)
                        }
                      ></ModalMiddle>
                    ) : // <div>
                    //   <div>
                    //     <span>{data.profile_pic}</span>
                    //     <span>
                    //       {data.user_nickname} 님의 팔로우를 취소하시겠어요?
                    //     </span>
                    //     <button
                    //       onClick={() =>
                    //         insertdeleteFollow2(data.id, false, i + a + 1)
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

export default FollowerListYou;
