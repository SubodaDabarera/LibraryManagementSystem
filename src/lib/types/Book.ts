export type BookStatus = 'available' | 'reserved' | 'unavailable';

interface Author{
    id: string;
    name: string;
    image: string
}

export interface Book {
  id: string;
  title: string;
  author: Author;
  isbn: string;
  publishedDate: string;
  genre: string;
  status: BookStatus;
}
