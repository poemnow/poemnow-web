import { useLocation } from "react-router-dom";

export default function ChoiceBar() {
	const location = useLocation();
	const curState = location.pathname.split("/").at(2);
	console.log(curState);
	return (
		<div>
			<div>시</div>
			{curState === "tag" ? <div>아래줄 태그</div> : <div>태그</div>}
			<div>시집</div>
			<div>작가</div>
		</div>
	);
}
