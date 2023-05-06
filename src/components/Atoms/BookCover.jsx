import styled from "styled-components";
import H4 from "./H4";
import Text from "./Text";

const BookCoverOuterStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.color};
`;

const BookCoverInnerStyled = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.color};

  display: flex;
  padding-top: 64px;
  justify-content: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export default function BookCover({
  title,
  writer,
  outWidth,
  outHeight,
  inWidth,
  inHeight,
  outColor,
  inColor,
}) {
  return (
    <BookCoverOuterStyled width={outWidth} height={outHeight} color={outColor}>
      <BookCoverInnerStyled width={inWidth} height={inHeight} color={inColor}>
        <ContentContainer>
          <H4>{title}</H4>
          <Text>{writer}</Text>
        </ContentContainer>
      </BookCoverInnerStyled>
    </BookCoverOuterStyled>
  );
}
