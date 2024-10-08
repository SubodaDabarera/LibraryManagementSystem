import React, { useEffect, useMemo, useState } from "react";
import useBookAPI from "../../api/useBookAPI";
import { Book } from "../../lib/types/Book";

function useBookHandler() {
  const { getBooksApi, getBookByIdApi } = useBookAPI();
  const [books, setBooks] = useState([])

  const getBooks = async () : Promise<Book[]> => {
    // retrieve all books
    const books = await getBooksApi();
    setBooks(books.data)
    return books.data
  };

  const getBookById = async(bookId: string): Promise<Book> => {
    const bookDetails = await getBookByIdApi(bookId)
    return bookDetails.data
  }


  return { books, getBooks, getBookById };
}

export default useBookHandler;
