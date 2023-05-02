import styled from "styled-components";

const ErrorStyle = styled.div`
	color: red;
`;

export default function ErrorComponent({ message }) {
	return message ? <ErrorStyle>{message}</ErrorStyle> : null;
}
