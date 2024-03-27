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

  console.log("cart", cartBooks);
  return (
    <div>
      {cartBooks.map((book) => (
        <CartBook key={book.bookId} book={book} />
      ))}
    </div>
  );
};

export default CartBooks;
