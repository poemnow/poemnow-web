import React from "react";
import { useEffect, useState } from "react";
import api from "../../utils/api";
import { useParams } from "react-router-dom";
import FollowCnt from "./followCnt";

function FollowListYou(props) {
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
    api("follow/followList/" + params.id, "GET").then((res) => setData(res));
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
      api("follow/followRemove?followId=" + id, "DELETE");
      setButtonText(i);
      setShowPopup(-1);
    } else {
      api("follow/followAdd?followId=" + id, "POST");
      setButtonText(-1);
    }
  }
  function insertdeleteFollow2(id, flag, i) {
    if (flag == false) {
      api("follow/followRemove?followId=" + id, "DELETE");
      setButtonText(-1);
      setShowPopup(-1);
    } else {
      api("follow/followAdd?followId=" + id, "POST");
      setButtonText(i);
    }
  }
  console.log(sameData);
  console.log(data);
  let a = 0;
  return (
    <>
      <div>팔로잉 {<FollowCnt id={params.id} />}명</div>
      <div>
        {sameData
          ? Array.isArray(sameData)
            ? sameData.map((data, i) => {
                a = i;
                return (
                  <div key={i}>
                    <span key={`${i}${data}`}>{data.profile_pic}</span>
                    <span key={`${i}${data}2`}>{data.user_nickname}</span>
                    <span key={`${i}${data}3`}>{data.bio}</span>
                    {buttonText == i ? (
                      <button
                        onClick={() => insertdeleteFollow(data.id, true, i)}
                      >
                        팔로우
                      </button>
                    ) : (
                      <button onClick={() => setShowPopup(i)}>팔로잉</button>
                    )}

                    {showPopup == i ? (
                      <div>
                        <div>
                          <span>{data.profile_pic}</span>
                          <span>
                            {data.user_nickname} 님의 팔로우를 취소하시겠어요?
                          </span>
                          <button
                            onClick={() =>
                              insertdeleteFollow(data.id, false, i)
                            }
                          >
                            팔로우취소
                          </button>
                          <button onClick={() => setShowPopup(-1)}>취소</button>
                        </div>
                      </div>
                    ) : null}
                  </div>
                );
              })
            : null
          : null}
        {difData
          ? Array.isArray(difData)
            ? difData.map((data, i) => {
                return (
                  <div key={i}>
                    <span key={`${i}${data}`}>{data.profile_pic}</span>
                    <span key={`${i}${data}2`}>{data.user_nickname}</span>
                    <span key={`${i}${data}3`}>{data.bio}</span>
                    {buttonText == i + a + 1 ? (
                      <button onClick={() => setShowPopup(i + a + 1)}>
                        팔로잉
                      </button>
                    ) : (
                      <button
                        onClick={() =>
                          insertdeleteFollow2(data.id, true, i + a + 1)
                        }
                      >
                        팔로우
                      </button>
                    )}

                    {showPopup == i + a + 1 ? (
                      <div>
                        <div>
                          <span>{data.profile_pic}</span>
                          <span>
                            {data.user_nickname} 님의 팔로우를 취소하시겠어요?
                          </span>
                          <button
                            onClick={() =>
                              insertdeleteFollow2(data.id, false, i + a + 1)
                            }
                          >
                            팔로우취소
                          </button>
                          <button onClick={() => setShowPopup(-1)}>취소</button>
                        </div>
                      </div>
                    ) : null}
                  </div>
                );
              })
            : null
          : null}
      </div>
    </>
  );
}

export default FollowListYou;
