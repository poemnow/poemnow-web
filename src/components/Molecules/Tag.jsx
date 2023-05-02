import styled from "styled-components";
import H6 from "../Atoms/H6";

const ATag = styled.a`
	color: black;
	background-color: #7e7e7e;
	text-decoration: none;
	width: 40px;
	height: 20px;
	border-radius: 50%;
	&:hover {
		background-color: #7e7e7e;
	}
`;

export default function Tag({ text }) {
	return (
		<>
			<ATag href={"search/tag?keyword=" + text}>
				<H6 children={"# " + text}></H6>
			</ATag>
		</>
	);
}
