import { useLoaderData } from "react-router-dom";
import { getReadBooks, getWishListBooks } from "../../utility/storage";
import ReadBook from "./ReadBook";
import WishListBook from "./WishListBook";

const ListedBooks = () => {
  const booksData = useLoaderData();

  //Get the read books from Local storage
  const readBookId = getReadBooks();

  //Get the wishList books from Local storage
  const wishListBookId = getWishListBooks();

  //Find readBooks from all books
  const readBooks = [];
  for (const bookID of readBookId) {
    const matchingReadBooks = booksData.find(
      (book) => book.bookId === parseInt(bookID)
    );
    readBooks.push(matchingReadBooks);
  }

  //Find WishListBooks from all books
  const wishListBooks = [];
  for (const bookID of wishListBookId) {
    const matchingWishListBooks = booksData.find(
      (book) => book.bookId === parseInt(bookID)
    );
    wishListBooks.push(matchingWishListBooks);
  }

  return (
    <div className="container mx-auto mt-10">
      <h3 className="bg-[#1313130D] rounded-lg text-[#131313] text-[28px] font-bold font-work-sans text-center py-[30px]">
        Books
      </h3>

      <div role="tablist" className="tabs tabs-lifted mt-[50px]">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab text-[#131313CC] font-normal font-work-sans"
          aria-label="Read Books"
          checked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6 "
        >
          {readBooks.map((book) => (
            <ReadBook key={book.bookId} book={book} />
          ))}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab text-[#131313CC] font-normal font-work-sans"
          aria-label=" WishList Books"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6 "
        >
          {wishListBooks.map((book) => (
            <WishListBook key={book.bookId} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
