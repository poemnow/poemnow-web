import { Outlet } from "react-router";
import Mypage_like_Tabbar from "../Organisms/Mypage_like_Tabbar";

export default function LikeTop() {
  return (
    <div>
      <Mypage_like_Tabbar />
      <Outlet />
    </div>
  );
}
