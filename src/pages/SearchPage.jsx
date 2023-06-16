import { Outlet, Link, useParams } from "react-router-dom";
import Mypage_like_Tabbar from "../components/Organisms/Mypage_like_Tabbar";
import Header from "../components/Organisms/Header";
import { useEffect, useState } from "react";
import Search from "../components/Molecules/Search";
import BookCardList from "../components/Organisms/BookCardList";
import api from "../utils/api";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";

export default function LikeTop() {
  const [data, setData] = useState();

  const location = useLocation();
  const queryParams = queryString.parse(location.search);

  const keyword = queryParams.keyword;
  const sortOrder = queryParams.sortOrder;
  console.log("dsdssdd" + keyword);
  console.log("dsdssdd" + sortOrder);
  useEffect(() => {
    axios
      .get("http://localhost:8080/bookSearch/bookSearchByTitle", {
        params: {
          keyword: keyword,
          sortOrder: sortOrder,
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
      })
      .then((res) => res.data)
      .then((res) => setData(res));
  }, []);

  useEffect(() => {
    const bookList = JSON.stringify(data);
    if (bookList != null) {
      const temp = JSON.parse(bookList);
      console.log(temp);
      console.log(keyword);
    }
  }, [data]);

  const [searchWord, setSearchWord] = useState("");
  useEffect(() => {
    console.log(searchWord);
  }, [searchWord]);
  return (
    <div>
      <Header
        isBack={true}
        isX={false}
        isHome={true}
        isEllipsis={false}
      ></Header>
      <Search state={searchWord} setter={setSearchWord} />
      <Mypage_like_Tabbar />
      <BookCardList bookList={data}></BookCardList>
      <Outlet />
    </div>
  );
}
