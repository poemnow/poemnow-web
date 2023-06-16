import React from "react";
import styled from "styled-components";
import BookCard from "../Molecules/BookCard";
import { useEffect, useState } from "react";

const BookCardListStyle = styled.ul``;

export default function BookCardList({ bookList }) {
  return (
    <BookCardListStyle>
      {bookList &&
        bookList.map((book, index) => (
          <div key={index}>
            <BookCard
              title={book.title}
              book_detail={book.book_detail}
              user_nickname={book.user_nickname}
              like_cnt={book.like_cnt}
              created_at={book.created_at}
              inner_color={book.inner_color}
              outer_color={book.outer_color}
            ></BookCard>
          </div>
        ))}
    </BookCardListStyle>
  );
}
