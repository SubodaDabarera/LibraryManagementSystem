import React, { useState, useEffect } from "react";
import useBookHandler from "../hooks/handlers/useBookHandler";
import { Book } from "../lib/types/Book";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

const BookDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getBookById } = useBookHandler();
  const [bookDetails, setBookDetails] = useState<Book | null>(null);

  useEffect(() => {
    const BookDetails = async () => {
      const details = await getBookById(id || "");
      setBookDetails(details);
    };
    BookDetails();
  }, []);

  if (!bookDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
  
      <Typography variant="h3" component="div">
        {bookDetails.title}
      </Typography>
      <Typography component="div">{bookDetails.author?.name}</Typography>
      <Typography>ISBN: {bookDetails.isbn}</Typography>
      <Typography>Published on: {bookDetails.publishedDate}</Typography>
      <Typography>{bookDetails.genre}</Typography>
    </div>
  );
};

export default BookDetails;
