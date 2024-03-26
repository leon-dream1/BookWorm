import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])

  return (
    <div className="my-[100px]">
      <h2 className="text-[#131313] text-[40px] font-playfair font-bold text-center">
        Books: {books.length}
      </h2>

      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-6">
            {
                books.map(book => <Book key={book.bookId} book={book}></Book>)
            }
        </div>
      </div>
    </div>
  );
};

export default Books;
