import styled from "styled-components";

const SocialUrlStyle = styled.a`
  color: ${(props) => (props.color ? props.color : "#5470ff")};
  width: 100%;
  font-size: 12px;
  text-decoration: none;
`;

export default function SocialURL({ url, color }) {
  return (
    <SocialUrlStyle href={`${url}`} color={color}>
      {url}
    </SocialUrlStyle>
  );
}
