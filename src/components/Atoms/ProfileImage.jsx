import styled from "styled-components";

const ProfileImageContainer = styled.div`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 70%;
  overflow: hidden;
`;
const ProfileImageStyle = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default function ProfileImage({ src, alt, size }) {
  console.log(size);
  return (
    <ProfileImageContainer size={size}>
      <ProfileImageStyle src={src} alt={alt}></ProfileImageStyle>
    </ProfileImageContainer>
  );
}
