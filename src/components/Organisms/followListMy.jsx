import React from "react";
import { useEffect, useState } from "react";
import api from "../../utils/api";
import { useParams } from "react-router-dom";
import FollowCnt from "./followCnt";

function FollowListMy(props) {
  const [showPopup, setShowPopup] = useState(-1);

  const [buttonText, setButtonText] = useState(-1);

  const [data, setData] = useState();
  useEffect(() => {
    api("follow/followList", "GET").then((res) => setData(res));
  }, []);

  useEffect(() => {
    const followList = JSON.stringify(data);
    if (followList != null) {
      console.log(JSON.parse(followList));
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

  return (
    <>
      <div>팔로잉 {<FollowCnt id={""} />}명</div>
      <div>
        {data
          ? Array.isArray(data)
            ? data.map((data, i) => {
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
      </div>
    </>
  );
}

export default FollowListMy;
