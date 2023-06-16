import { Outlet, Link } from "react-router-dom";
import Mypage_like_Tabbar from "../Organisms/Mypage_like_Tabbar";
import Header from "../Organisms/Header";

export default function LikeTop() {
  return (
    <div>
      <Header isBack={true} isX={false} isHome={true} isEllipsis={false}>
        Like
      </Header>
      <Mypage_like_Tabbar />
      <Link href="ew"></Link>
      <Outlet />
    </div>
  );
}
