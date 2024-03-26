import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="my-[100px]">
      <h2 className="text-[#131313] text-[40px] font-playfair font-bold text-center">
        Books:
      </h2>

      {books.length < 1 && (
        <div className="flex flex-row w-full justify-center items-center">
          <span className="loading loading-bars loading-xs"></span>
          <span className="loading loading-bars loading-sm"></span>
          <span className="loading loading-bars loading-md"></span>
          <span className="loading loading-bars loading-lg"></span>
        </div>
      )}

      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-6">
          {books.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
