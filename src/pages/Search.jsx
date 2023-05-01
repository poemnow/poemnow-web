import { Outlet } from "react-router-dom";
import SearchBar from "../components/Sangho/SearchBar";
import ChoiceBar from "../components/Sangho/ChoiceBar";
import ConditionBar from "../components/Sangho/ConditionBar";

export default function Search() {
	return (
		<div>
			<SearchBar />
			<ChoiceBar />
			<ConditionBar />
			<Outlet />
		</div>
	);
}
