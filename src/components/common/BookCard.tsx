import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { Book } from "../../lib/types/Book";

interface BookCardProps {
  book: Book;
  onCardClick?: (id: string) => void;
}

const BookCard: React.FC<BookCardProps> = ({
  book,
  onCardClick,
}) => {
  return (
    <Card onClick={() => onCardClick && onCardClick(book?.id)}>
      <CardContent>
        <Typography variant="h5" component="div">
          {book.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {book.author?.name || "Author not found"}
        </Typography>
        <Typography variant="body2">ISBN: {book.isbn}</Typography>
        <Typography variant="body2">Genre: {book.genre}</Typography>
        <Typography variant="body2">Status: {book.status}</Typography>
      </CardContent>
    </Card>
  );
};

export default BookCard;
