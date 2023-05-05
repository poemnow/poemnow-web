import { useEffect, useState } from "react";
import api from "../../utils/api";

function FollowCnt(props) {
  const [data, setData] = useState();
  useEffect(() => {
    api("follow/followCnt/" + props.id, "GET").then((res) => setData(res));
  }, []);
  return data;
}
export default FollowCnt;
