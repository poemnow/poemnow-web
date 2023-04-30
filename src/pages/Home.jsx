import { useEffect, useState } from "react";
import Header from "../components/Header";
import api from "../utils/api";
import Icon from "../components/Sangho/Icon";

function Home() {
	const [data, setData] = useState();

	useEffect(() => {
		api("poem/poemList", "GET").then((res) => setData(res));
	}, []);

	useEffect(() => {
		const stringy = JSON.stringify(data);
		if (stringy !== undefined) {
			console.log(JSON.parse(stringy));
		}
	}, [data]);

	return (
		<>
			<Header />
			<div>This is Home</div>
			<button>click me</button>
			<form>
				<label htmlFor="id">id</label>
				<input id="id" type="text" placeholder="id를 입력해주세요" />
				<label htmlFor="id">id</label>
				<input id="id" type="text" placeholder="id를 입력해주세요" />
				<label htmlFor="id">id</label>
				<input id="id" type="text" placeholder="id를 입력해주세요" />
				<label htmlFor="id">id</label>
				<input id="id" type="text" placeholder="id를 입력해주세요" />
				<label htmlFor="id">id</label>
				<input id="id" type="text" placeholder="id를 입력해주세요" />
			</form>
			<a href="/">link to home</a>
			{data
				? Array.isArray(data)
					? data.map((e, i) => {
							return (
								<ul key={i}>
									<li key={`${i}${e}`}>{e.id}</li>
									<li key={`${i}${e}2`}>{e.title}</li>
								</ul>
							);
					  })
					: null
				: null}
		</>
	);
}

export default Home;
