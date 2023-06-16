import React from "react";
import { useParams } from "react-router-dom";
import FollowListMy from "../components/Organisms/followListMy";
import FollowListYou from "../components/Organisms/followListYou";
import Header from "../components/Organisms/Header";
function FollowPage(props) {
  const params = useParams();

  const id = params.id;
  return <>{id === undefined ? <FollowListMy /> : <FollowListYou />}</>;
}

export default FollowPage;
