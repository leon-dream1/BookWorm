import { useLoaderData } from "react-router-dom";
import { getCartBooks } from "../../../utility/storage";
import CartBook from "../CartBook/CartBook";
import { useState } from "react";
import { useEffect } from "react";

const CartBooks = () => {
  const [cartBooks, setCartBooks] = useState([]);

  const booksData = useLoaderData();
  const cartBookId = getCartBooks();

  useEffect(() => {
    const matchingBooks = booksData.filter((book) =>
      cartBookId.includes(book.bookId.toString())
    );
    setCartBooks(matchingBooks);
  }, [cartBookId]);

  return (
    <div>
        {cartBooks.length < 1 && <p className="text-center text-xl font-bold font-playfair mt-[100px]">No data Found....</p>}
      {cartBooks.map((book) => (
        <CartBook key={book.bookId} book={book} />
      ))}
    </div>
  );
};

export default CartBooks;
