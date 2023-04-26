import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login";
import Register from "./pages/register";
import MyPage from "./pages/myPage";
import Poem from "./pages/poem";
import NotFound from "./pages/404";
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
					<Route path="/*" element={<NotFound />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
