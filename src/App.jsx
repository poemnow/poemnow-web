import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login";
import Register from "./pages/register";
import MyPage from "./pages/myPage";
import Poem from "./pages/poem";
import NotFound from "./pages/404";
import Search from "./pages/Search";
import TagSearchList from "./components/etc/TagSearchList";
import Detail from "./components/etc/Detail";
import "./styles/mvp.css";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/myPage" element={<MyPage />} />
					<Route path="/poem" element={<Poem />} />
					<Route path="/register" element={<Register />} />
					{/* <Route path="/updateProfile" element={<UpdateProfile />} /> */}
					{/* search 페이지를 위한 라우팅 */}
					<Route path="/search" element={<Search />}>
						<Route path="tag" element={<TagSearchList />}>
							<Route path="detail" element={<Detail />}></Route>
						</Route>
						{/* <Route path="/poem"></Route>
						<Route path="/write"></Route>
						<Route path="/book"></Route> */}
					</Route>
					<Route path="/*" element={<NotFound />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
