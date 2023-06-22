import React from "react";
import styled from "styled-components";
import Tab from "../Molecules/Tab";


const TabBarContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 64px;
`;

export const tabList = ["시", "작가"];

export default function TabBar({ state, setState }) {

  const handleTabClick = (selectedTab) => {
    setState(selectedTab);
  };

  return (
    <TabBarContainer>
      {tabList.map((tab, index) => (
        <li key={index}>
          <div onClick={() => handleTabClick(tab)}>
          <Tab matchWord={tab} index={2} state={state} handleTabClick={handleTabClick}>
            {tab}
          </Tab>
          </div>
        </li>
      ))}
    </TabBarContainer>
  );
}
