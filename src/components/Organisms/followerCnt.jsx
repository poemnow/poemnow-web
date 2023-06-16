import { useEffect, useState } from "react";
import api from "../../utils/api";

function FollowerCnt(props) {
  const [data, setData] = useState();
  useEffect(() => {
    api("follow/followerCnt/" + props.id, "GET").then((res) => setData(res));
  }, []);
  return data;
}
export default FollowerCnt;
