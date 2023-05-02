import styled from "styled-components";

const ProfileImageStyle = styled.img`
	width: 32px;
	height: 32px;
`;

export default function ProfileImage({ src, alt, size }) {
	return (
		<ProfileImageStyle src={src} alt={alt} size={size}></ProfileImageStyle>
	);
}
