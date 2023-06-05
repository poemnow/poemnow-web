import { useState } from "react";
import styled from "styled-components";
import TabBar from "../Organisms/TabBar";
import PoemCardList from "../Organisms/PoemCardList";
import BookCardList from "../Organisms/BookCardList";
import CommentCardList from "../Organisms/CommentCardList";

const LikeTabContainer = styled.div``;

export default function LikeTab() {
  const [tab, setTab] = useState("poem");

  return (
    <LikeTabContainer>
      <TabBar />
      {tab === "poem" && <PoemCardList></PoemCardList>}
      {tab === "book" && <BookCardList></BookCardList>}
      {tab === "comment" && <CommentCardList></CommentCardList>}
    </LikeTabContainer>
  );
}
