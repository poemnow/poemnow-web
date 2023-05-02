import styled from "styled-components";

const BookCoverOuterStyled = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 400px;
	height: 800px;
	background-color: red;
`;

const BookCoverInnerStyled = styled.div`
	width: 300px;
	height: 600px;
	background-color: blue;

	display: flex;
	padding-top: 64px;
	color: white;
	justify-content: center;
`;

export default function BookCover({ title, writer }) {
	return (
		<BookCoverOuterStyled>
			<BookCoverInnerStyled>
				<div>{title}</div>
				<div>{writer}</div>
			</BookCoverInnerStyled>
		</BookCoverOuterStyled>
	);
}
