import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import api from "../utils/api";

import styles from "./bookId.module.css";

function BookDetail() {
  const [data, setData] = useState();
  const { id } = useParams;

  useEffect(() => {
    api(`book/bookDetail/${id}`, "GET").then((res) => setData(res));
  }, [id]);

  useEffect(() => {
    const stringy = JSON.stringify(data);
    if (stringy !== undefined) {
      console.log(JSON.parse(stringy));
    }
  }, [data]);

  return (
    <>
      <Header />
      <div className={styles["container"]}>
        <div className={styles["bookId"]}>
          <span className={styles["text"]}>
            <span>책 상세보기</span>
          </span>
          <img
            src="/playground_assets/rectangle226823-aybi-400h.png"
            alt="Rectangle226823"
            className={styles["rectangle22"]}
          />
          <img
            src="/playground_assets/rectangle236824-ipvc-300w.png"
            alt="Rectangle236824"
            className={styles["rectangle23"]}
          />
          <span className={styles["text02"]}>
            <span>시집 제목</span>
          </span>
          <span className={styles["text04"]}>
            <span>저자</span>
          </span>
          <img
            src="/playground_assets/favorite6827-hc84.svg"
            alt="Favorite6827"
            className={styles["favorite"]}
          />
          <span className={styles["text06"]}>
            <span>시집 제목</span>
          </span>
          <span className={styles["text08"]}>
            <span>
              <span>
                시집 설명 시집 설명 시집 설명 시집 설명
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
              <br></br>
              <span>
                시집 설명 시집 설명 시집 설명 시집 설명
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
              <br></br>
              <span>
                시집 설명 시집 설명 시집 설명 시집 설명
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
              <br></br>
              <span>
                시집 설명 시집 설명 시집 설명 시집 설명
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
              <br></br>
              <span>
                시집 설명 시집 설명 시집 설명 시집 설명
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
              <br></br>
              <span>
                시집 설명 시집 설명 시집 설명 시집 설명
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
              <br></br>
              <span>
                시집 설명 시집 설명 시집 설명 시집 설명
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
              <br></br>
              <span>
                시집 설명 시집 설명 시집 설명 시집 설명
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
              <br></br>
              <span></span>
            </span>
          </span>
          <img
            src="/playground_assets/line126835-fndw.svg"
            alt="Line126835"
            className={styles["line12"]}
          />
          <span className={styles["text27"]}>
            <span>박미정</span>
          </span>
          <img
            src="/playground_assets/face6837-v6b.svg"
            alt="Face6837"
            className={styles["face"]}
          />
          <span className={styles["text29"]}>
            <span>
              저자설명저자설명저자설명저자설명저자설명저자설명저자설명
            </span>
          </span>
          <div className={styles["dashboardcard"]}>
            <div className={styles["content"]}>
              <div className={styles["value"]}>
                <span className={styles["text31"]}>
                  <span>시 제목</span>
                </span>
              </div>
              <span className={styles["text33"]}>
                <span>시 내용 시 내용 시 내용 시 내용</span>
              </span>
            </div>
            <img
              src="/playground_assets/favorite6873-31q.svg"
              alt="Favorite6873"
              className={styles["favorite1"]}
            />
            <img
              src="/playground_assets/vector6876-fgw.svg"
              alt="Vector6876"
              className={styles["vector"]}
            />
            <span className={styles["text35"]}>3</span>
            <span className={styles["text36"]}>3</span>
            <span className={styles["text37"]}>
              <span>2023.04.27</span>
            </span>
          </div>
          <div className={styles["dashboardcard1"]}>
            <div className={styles["content1"]}>
              <div className={styles["value1"]}>
                <span className={styles["text39"]}>
                  <span>시 제목</span>
                </span>
              </div>
              <span className={styles["text41"]}>
                <span>시 내용 시 내용 시 내용 시 내용</span>
              </span>
            </div>
            <img
              src="/playground_assets/favorite6885-4aeo.svg"
              alt="Favorite6885"
              className={styles["favorite2"]}
            />
            <img
              src="/playground_assets/vector6888-iexo.svg"
              alt="Vector6888"
              className={styles["vector1"]}
            />
            <span className={styles["text43"]}>3</span>
            <span className={styles["text44"]}>3</span>
            <span className={styles["text45"]}>
              <span>2023.04.27</span>
            </span>
          </div>
          <span className={styles["text47"]}>
            <span>3k</span>
          </span>
        </div>
      </div>
    </>
  );
}

// const bookId = (props) => {
//   return (
//     <div className={styles["container"]}>
//       <div className={styles["bookId"]}>
//         <span className={styles["text"]}>
//           <span>책 상세보기</span>
//         </span>
//         <img
//           src="/playground_assets/rectangle226823-aybi-400h.png"
//           alt="Rectangle226823"
//           className={styles["rectangle22"]}
//         />
//         <img
//           src="/playground_assets/rectangle236824-ipvc-300w.png"
//           alt="Rectangle236824"
//           className={styles["rectangle23"]}
//         />
//         <span className={styles["text02"]}>
//           <span>시집 제목</span>
//         </span>
//         <span className={styles["text04"]}>
//           <span>저자</span>
//         </span>
//         <img
//           src="/playground_assets/favorite6827-hc84.svg"
//           alt="Favorite6827"
//           className={styles["favorite"]}
//         />
//         <span className={styles["text06"]}>
//           <span>시집 제목</span>
//         </span>
//         <span className={styles["text08"]}>
//           <span>
//             <span>
//               시집 설명 시집 설명 시집 설명 시집 설명
//               <span
//                 dangerouslySetInnerHTML={{
//                   __html: " ",
//                 }}
//               />
//             </span>
//             <br></br>
//             <span>
//               시집 설명 시집 설명 시집 설명 시집 설명
//               <span
//                 dangerouslySetInnerHTML={{
//                   __html: " ",
//                 }}
//               />
//             </span>
//             <br></br>
//             <span>
//               시집 설명 시집 설명 시집 설명 시집 설명
//               <span
//                 dangerouslySetInnerHTML={{
//                   __html: " ",
//                 }}
//               />
//             </span>
//             <br></br>
//             <span>
//               시집 설명 시집 설명 시집 설명 시집 설명
//               <span
//                 dangerouslySetInnerHTML={{
//                   __html: " ",
//                 }}
//               />
//             </span>
//             <br></br>
//             <span>
//               시집 설명 시집 설명 시집 설명 시집 설명
//               <span
//                 dangerouslySetInnerHTML={{
//                   __html: " ",
//                 }}
//               />
//             </span>
//             <br></br>
//             <span>
//               시집 설명 시집 설명 시집 설명 시집 설명
//               <span
//                 dangerouslySetInnerHTML={{
//                   __html: " ",
//                 }}
//               />
//             </span>
//             <br></br>
//             <span>
//               시집 설명 시집 설명 시집 설명 시집 설명
//               <span
//                 dangerouslySetInnerHTML={{
//                   __html: " ",
//                 }}
//               />
//             </span>
//             <br></br>
//             <span>
//               시집 설명 시집 설명 시집 설명 시집 설명
//               <span
//                 dangerouslySetInnerHTML={{
//                   __html: " ",
//                 }}
//               />
//             </span>
//             <br></br>
//             <span></span>
//           </span>
//         </span>
//         <img
//           src="/playground_assets/line126835-fndw.svg"
//           alt="Line126835"
//           className={styles["line12"]}
//         />
//         <span className={styles["text27"]}>
//           <span>박미정</span>
//         </span>
//         <img
//           src="/playground_assets/face6837-v6b.svg"
//           alt="Face6837"
//           className={styles["face"]}
//         />
//         <span className={styles["text29"]}>
//           <span>저자설명저자설명저자설명저자설명저자설명저자설명저자설명</span>
//         </span>
//         <div className={styles["dashboardcard"]}>
//           <div className={styles["content"]}>
//             <div className={styles["value"]}>
//               <span className={styles["text31"]}>
//                 <span>시 제목</span>
//               </span>
//             </div>
//             <span className={styles["text33"]}>
//               <span>시 내용 시 내용 시 내용 시 내용</span>
//             </span>
//           </div>
//           <img
//             src="/playground_assets/favorite6873-31q.svg"
//             alt="Favorite6873"
//             className={styles["favorite1"]}
//           />
//           <img
//             src="/playground_assets/vector6876-fgw.svg"
//             alt="Vector6876"
//             className={styles["vector"]}
//           />
//           <span className={styles["text35"]}>3</span>
//           <span className={styles["text36"]}>3</span>
//           <span className={styles["text37"]}>
//             <span>2023.04.27</span>
//           </span>
//         </div>
//         <div className={styles["dashboardcard1"]}>
//           <div className={styles["content1"]}>
//             <div className={styles["value1"]}>
//               <span className={styles["text39"]}>
//                 <span>시 제목</span>
//               </span>
//             </div>
//             <span className={styles["text41"]}>
//               <span>시 내용 시 내용 시 내용 시 내용</span>
//             </span>
//           </div>
//           <img
//             src="/playground_assets/favorite6885-4aeo.svg"
//             alt="Favorite6885"
//             className={styles["favorite2"]}
//           />
//           <img
//             src="/playground_assets/vector6888-iexo.svg"
//             alt="Vector6888"
//             className={styles["vector1"]}
//           />
//           <span className={styles["text43"]}>3</span>
//           <span className={styles["text44"]}>3</span>
//           <span className={styles["text45"]}>
//             <span>2023.04.27</span>
//           </span>
//         </div>
//         <span className={styles["text47"]}>
//           <span>3k</span>
//         </span>
//       </div>
//     </div>
//   );
// };

export default BookDetail;
