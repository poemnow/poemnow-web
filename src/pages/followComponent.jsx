import React from "react";
import { useParams } from "react-router-dom";
import FollowListMy from "../components/Organisms/followListMy";
import FollowListYou from "../components/Organisms/followListYou";

function FollowComponent(props) {
  const params = useParams();

  const id = params.id;
  console.log(id);
  return <>{id === undefined ? <FollowListMy /> : <FollowListYou />}</>;
}

export default FollowComponent;
