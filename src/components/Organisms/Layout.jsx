import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const LayoutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const LayoutBody = styled.div`
  min-height: 100vh;

  padding: 0px 16px;
  padding-top: 128px;
`;

export default function Layout({ children }) {
  return (
    <LayoutContainer>
      <Header />
      <LayoutBody>{children}</LayoutBody>
      <Footer />
    </LayoutContainer>
  );
}
