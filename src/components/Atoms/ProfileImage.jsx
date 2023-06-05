import styled from "styled-components";

const ProfileImageStyle = styled.img`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
`;

export default function ProfileImage({ src, alt, size }) {
  return (
    <ProfileImageStyle size={size} src={src} alt={alt}></ProfileImageStyle>
  );
}
