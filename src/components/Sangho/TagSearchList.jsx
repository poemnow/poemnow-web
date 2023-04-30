import TagSearchCard from "./TagSearchCard";
import { Outlet } from "react-router-dom";

export default function TagSearchResult() {
	return (
		<div>
			<ul>
				{[1, 2, 3, 4, 5, 6].map(() => (
					<TagSearchCard />
				))}
			</ul>
			<Outlet />
		</div>
	);
}
