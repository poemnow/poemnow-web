import styled from "styled-components";
import Icon from "../Atoms/Icon";

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 48px;
`;

const HeaderFlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const HeaderFirst = styled.div`
  display: flex;
  flex: 1;
  justify-content: start;
  align-items: center;
`;

const HeaderCenter = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const HeaderSecond = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
  align-items: center;
`;

function Header({ isBack, isX, isHome, isEllipsis, title }) {
  return (
    <HeaderContainer>
      {isX ? (
        <HeaderFlexBox>
          <HeaderFirst>
            <Icon outSize="24px" inSize="12px">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                width="100%"
                height="100%"
              >
                <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
              </svg>
            </Icon>
          </HeaderFirst>
          <HeaderCenter>{title}</HeaderCenter>
          <HeaderSecond>
            <Icon outSize="24px" inSize="12px">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width="100%"
                height="100%"
              >
                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
              </svg>
            </Icon>
          </HeaderSecond>
        </HeaderFlexBox>
      ) : (
        <HeaderFlexBox>
          <HeaderFirst>
            {isBack && (
              <Icon outSize="24px" inSize="12px">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  width="100%"
                  height="100%"
                >
                  <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                </svg>
              </Icon>
            )}
            {isHome && (
              <Icon outSize="24px" inSize="12px">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  width="100%"
                  height="100%"
                >
                  <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                </svg>
              </Icon>
            )}
          </HeaderFirst>
          <HeaderCenter>{title}</HeaderCenter>
          <HeaderSecond>
            {isEllipsis && (
              <Icon outSize="24px" inSize="12px">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 512"
                  width="100%"
                  height="100%"
                >
                  <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
                </svg>
              </Icon>
            )}
          </HeaderSecond>
        </HeaderFlexBox>
      )}
    </HeaderContainer>
  );
}

export default Header;
