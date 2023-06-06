import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login";
import Register from "./pages/register";
import MyPage from "./pages/myPage";
import Poem from "./pages/poem";
import NotFound from "./pages/404";
import Search from "./pages/Search";
import Withdraw from "./pages/withdraw1";
import TagSearchList from "./components/etc/TagSearchList";
import Detail from "./components/etc/Detail";
import PoemCardList from "./components/Organisms/PoemCardList";
import BookCardList from "./components/Organisms/BookCardList";
import CommentCardList from "./components/Organisms/CommentCardList";
import LikeTop from "./components/Templates/LikeTop";
import FollowComponent from "./pages/followComponent";
import LikeTab from "./components/Templates/LikeTab";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/followList" element={<FollowComponent />} />
          <Route path="/followList/:id" element={<FollowComponent />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/myPage" element={<MyPage />}>
            <Route path="like" element={<LikeTab />} />
          </Route>
          <Route path="/poem" element={<Poem />} />
          <Route path="/register" element={<Register />} />
          <Route path="/withdraw1" element={<Withdraw />} />
          <Route path="/withdraw2" element={<Withdraw />} />
          {/* <Route path="/updateProfile" element={<UpdateProfile />} /> */}
          {/* search 페이지를 위한 라우팅 */}
          {/* <Route path="/search" element={<Search />}>
            <Route path="tag" element={<TagSearchList />}>
              <Route path="detail" element={<Detail />}></Route>
            </Route> */}
          {/* <Route path="/poem"></Route>
						<Route path="/write"></Route>
						<Route path="/book"></Route> */}
          {/* </Route> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
