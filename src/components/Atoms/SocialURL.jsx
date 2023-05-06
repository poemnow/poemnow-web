import styled from "styled-components";

const SocialUrlStyle = styled.a`
  color: #5470ff;
  width: 100%;
  font-size: 12px;
  text-decoration: none;
`;

export default function SocialURL({ url }) {
  return <SocialUrlStyle href={`${url}`}>{url}</SocialUrlStyle>;
}
