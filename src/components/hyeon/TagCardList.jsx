import styled from "styled-components";
import H6 from "../Sangho/H6";
import TagCard from "../hyeon/Tagcard";
import api from "../../utils/api";

const ATag = styled.a`
  color: black;
  background-color: #7e7e7e;
  text-decoration: none;
  width: 40px;
  height: 20px;
  border-radius: 50%;
  &:hover {
    background-color: #7e7e7e;
  }
`;

export default function TagCardList({ text }) {
  const [data, setData] = useState();
  useEffect(() => {
    api("search/tag?keyword=" + text, "GET").then((res) => setData(res));
  }, []);

  {
    data
      ? Array.isArray(data)
        ? data.map((e, i) => {
            return (
              <div key={i}>
                <span key={`${i}${e}`}>
                  {<TagCard text={e.name} count={e.cnt} />}
                </span>
              </div>
            );
          })
        : null
      : null;
  }
}
