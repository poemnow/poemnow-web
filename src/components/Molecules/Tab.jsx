import { useLocation } from "react-router-dom";
import styled from "styled-components";
import H6 from "../Atoms/H6";

const TabContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 128px;
	border-bottom: ${(props) => props.isHere};
`;

/*
 * Tag에 밑줄이 있으려면 matchWord와 index의 값을 조정해야 한다.
 * matchWord에 url에서 찾고 싶은 글자 입력
 * index에는 찾고 싶은 글자가 몇 번째에 있는지 확인
 * e.g. /search/tag에 있을 때만 밑줄이 생기게 하고 싶다.
 * matchWord={tag} , index={2}로 정하면 된다.
 */

export default function Tab({ children, matchWord, index }) {
	const location = useLocation();
	const curUrl = location.pathname.split("/").at(index);
	return (
		<TabContainer isHere={curUrl === matchWord ? "1px solid black" : null}>
			<H6>{children}</H6>
		</TabContainer>
	);
}
