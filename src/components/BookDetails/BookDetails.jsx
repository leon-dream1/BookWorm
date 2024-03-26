import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const booksData = useLoaderData();

  const { bookId } = useParams();
  const selectedBook = booksData.find(
    (book) => book.bookId === parseInt(bookId)
  );

  return (
    <div>
      <h1>Book Clicked: {selectedBook.bookId}</h1>
    </div>
  );
};

export default BookDetails;
