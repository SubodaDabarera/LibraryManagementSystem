import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import BookCard from "../components/common/BookCard";

import useBookHandler from "../hooks/handlers/useBookHandler";
import { Book } from "../lib/types/Book";
import { useNavigate } from "react-router-dom";

const BookList: React.FC = () => {
  const navigate = useNavigate();
  const { getBooks, books } = useBookHandler();

  useEffect(() => {
    getBooks();
  }, []);

  const handleCardClick = async (bookId: string) => {
    navigate("/" + bookId);
  };

  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Book Catalog
      </Typography>
      <Grid container spacing={3}>
        {books.map((book: Book) => (
          <Grid item xs={12} sm={6} md={2}>
            <BookCard book={book} onCardClick={handleCardClick} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default BookList;
