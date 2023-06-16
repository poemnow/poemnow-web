import React from "react";
import TabBar from "./TabBar";
import styled from "styled-components";

const TabBarContainer = styled.div``;

function Mypage_like_Tabbar() {
  const tabList = ["시", "시집", "작가"];

  return (
    <TabBarContainer>
      <TabBar TabList={tabList} />
    </TabBarContainer>
  );
}
export default Mypage_like_Tabbar;
