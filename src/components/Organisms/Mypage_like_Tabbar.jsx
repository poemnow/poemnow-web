import React from "react";
import TabBar from "../Organisms/TabBar";
import styled from "styled-components";

const TabBarContainer = styled.div``;

function Mypage_like_Tabbar() {
  const tabList = ["시", "시집", "댓글"];

  return (
    <TabBarContainer>
      <TabBar TabList={tabList} />
    </TabBarContainer>
  );
}
export default Mypage_like_Tabbar;
