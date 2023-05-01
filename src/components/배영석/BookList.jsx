import { useState, useEffect } from "react";

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/api/bookList?keyword={user.id}")
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      {books &&
        books.map((book) => (
          <div>
            <div key={book.id}>
              <div>
                <h3>{book.title}</h3>
              </div>
              <div>
                <p>{book.content}</p>
              </div>
              <div>
                {/* 책은 색만 정해놨는데... 이미지를 어떻게 만들어서 가져오지? */}
                <img />
                <p>{book.user_id}</p>
                <p>{book.created_at}</p>
              </div>
              <div>
                <p>{book.like_cnt}</p>
              </div>
            </div>
            <div>
              <img />
            </div>
          </div>
        ))}
    </div>
  );
}

export default BookList;
