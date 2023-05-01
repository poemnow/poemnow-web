import { useState, useEffect } from "react";

function PoemList() {
  const [poems, setPoems] = useState([]);

  useEffect(() => {
    fetch("/api/poemList?keyword={user.id}")
      .then((response) => response.json())
      .then((data) => setPoems(data));
  }, []);

  return (
    <div>
      {poems &&
        poems.map((poem) => (
          <div key={poem.id}>
            <div>
              <h3>{poem.title}</h3>
            </div>
            <div>
              <p>{poem.content}</p>
            </div>
            <div>
              <img />
              <p>{poem.user_id}</p>
              <p>{poem.created_at}</p>
            </div>
            <div>
              <p>{poem.like_cnt}</p>
              <p>{poem.commentCount}</p>
              <p>{poem.firstTag}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default PoemList;
