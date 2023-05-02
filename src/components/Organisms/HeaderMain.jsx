import styled from "styled-components";
import Icon from "../Atoms/Icon";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeaderFlexBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeaderFirst = styled.div`
  display: flex;
`;

const HeaderSecond = styled.div`
  display: flex;
`;

const ImgStyled = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
`;

function HeaderMain({ isLogin, userInfo }) {
  return (
    <HeaderContainer>
      <HeaderFirst>logo</HeaderFirst>
      <HeaderSecond>
        <Icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="100%"
            height="100%"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </Icon>
        <Icon>
          {isLogin ? (
            <ImgStyled src={userInfo.profilePic}></ImgStyled>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="100%"
              height="100%"
            >
              <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
            </svg>
          )}
        </Icon>
      </HeaderSecond>
    </HeaderContainer>
  );
}

export default HeaderMain;
