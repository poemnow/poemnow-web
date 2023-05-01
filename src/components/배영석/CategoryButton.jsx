import { useState } from "react";
import BookList from "./BookList";
import PoemList from "./PoemList";

function CategoryButton() {
  const [activeButton, setActiveButton] = useState("poem");
  const [isActivePoem, setIsActivePoem] = useState(true);

  const handleButtonToggle = (buttonName) => {
    setActiveButton(buttonName);
    setIsActivePoem(buttonName === "poem");
  };

  return (
    <div>
      <div>
        <button
          className={activeButton === "poem" ? "active" : ""}
          onClick={() => handleButtonToggle("poem")}
        >
          시
        </button>
        <button
          className={activeButton === "book" ? "active" : ""}
          onClick={() => handleButtonToggle("book")}
        >
          시집
        </button>
      </div>
      {activeButton === "poem" ? <PoemList /> : <BookList />}
    </div>
  );
}

export default CategoryButton;
