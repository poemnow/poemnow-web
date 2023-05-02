import { useEffect, useState } from "react";
import styled from "styled-components";
import Icon from "../Atoms/Icon";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Navigation = styled.ul`
  width: ${(props) => props.size};
  display: flex;
  justify-content: space-between;
`;

function Header() {
  // state
  // [state, modifier] = useState();
  let [value, setValue] = useState(0);

  useEffect(() => {
    console.log(value);
  }, [value]);

  function plusOne() {
    setValue(value + 1);
  }

  return (
    <HeaderContainer>
      <div>Logo</div>
      <div>
        <Navigation size={"900px"}>
          <li>home</li>
          <li>poem</li>
          <li>myprofile</li>
        </Navigation>
      </div>
      <div>login</div>
      <button onClick={plusOne}>click me</button>
      <Icon value={value} />
      <button type="" />
      <button type="lg" />
      <button type="medium" />
    </HeaderContainer>
  );
}

export default Header;
