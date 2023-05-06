import React from "react";
import styled from "styled-components";
import BookCard from "../Molecules/BookCard";

const BookCardListStyle = styled.ul``;

export default function BookCardList({ bookList }) {
  return (
    <BookCardListStyle>
      {bookList &&
        bookList.map((book, index) => (
          <li key={index}>
            <BookCard book={book}></BookCard>
          </li>
        ))}
    </BookCardListStyle>
  );
}
