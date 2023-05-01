import { Outlet } from "react-router-dom";
import SearchBar from "../components/etc/SearchBar";
import ChoiceBar from "../components/etc/ChoiceBar";
import ConditionBar from "../components/etc/ConditionBar";
import Tab from "../components/Molecules/Tag";

export default function Search() {
	return (
		<div>
			<Tab matchWord={"tag"} index={2}>
				태그
			</Tab>
			<SearchBar />
			<ChoiceBar />
			<ConditionBar />
			<Outlet />
		</div>
	);
}
