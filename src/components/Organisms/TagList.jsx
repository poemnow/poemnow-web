import styled from "styled-components";
import H6 from "../Atoms/H6";
import Tag from "../Atoms/Tag";
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

export default function TagList({ id }) {
  const [data, setData] = useState();
  useEffect(() => {
    api("poem/poemDetail/" + id, "GET").then((res) => setData(res));
  }, []);

  {
    data
      ? Array.isArray(data)
        ? data.map((e, i) => {
            return (
              <div key={i}>
                <span key={`${i}${e}`}>{<Tag text={e.name} />}</span>
              </div>
            );
          })
        : null
      : null;
  }
}
