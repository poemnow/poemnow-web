import styled from "styled-components";
import Tab from "../Molecules/Tab";

const TabBarContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 64px;
`;

export default function TabBar({ children }) {
  return (
    <TabBarContainer>
      {children}
      {/* {TabList &&
        TabList.map((tab, index) => {
          return (
            <li key={index}>
              <Tab matchWord={tab} index={2}>
                {tab}
              </Tab>
            </li>
          );
        })} */}
    </TabBarContainer>
  );
}
