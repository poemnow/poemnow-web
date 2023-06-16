import React from "react";
import { useParams } from "react-router-dom";
import FollowerListMy from "../components/Organisms/followerListMy";
import FollowerListYou from "../components/Organisms/followerListYou";

function FollowerPage(props) {
  const params = useParams();

  const id = params.id;
  return <>{id === undefined ? <FollowerListMy /> : <FollowerListYou />}</>;
}

export default FollowerPage;
