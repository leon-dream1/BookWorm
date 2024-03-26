import { useLoaderData } from "react-router-dom";
import { getReadBooks, getWishListBooks } from "../../utility/storage";
import ReadBook from "./ReadBook";
import WishListBook from "./WishListBook";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

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

  const [sortBy, setSortBy] = useState("");

  if (sortBy === "rating") {
    readBooks.sort((a, b) => {
      if (a.rating > b.rating) {
        return -1;
      }
      if (a.rating < b.rating) {
        return 1;
      }
      return 0;
    });
  } else if (sortBy === "numberOfPages") {
    readBooks.sort((a, b) => {
      if (a.totalPages > b.totalPages) {
        return -1;
      }
      if (a.totalPages < b.totalPages) {
        return 1;
      }
      return 0;
    });
  } else if (sortBy === "publisherYear") {
    readBooks.sort((a, b) => {
      if (a.yearOfPublishing > b.yearOfPublishing) {
        return -1;
      }
      if (a.yearOfPublishing < b.yearOfPublishing) {
        return 1;
      }
      return 0;
    });
  }

  if (sortBy === "rating") {
    wishListBooks.sort((a, b) => {
      if (a.rating > b.rating) {
        return -1;
      }
      if (a.rating < b.rating) {
        return 1;
      }
      return 0;
    });
  } else if (sortBy === "numberOfPages") {
    wishListBooks.sort((a, b) => {
      if (a.totalPages > b.totalPages) {
        return -1;
      }
      if (a.totalPages < b.totalPages) {
        return 1;
      }
      return 0;
    });
  } else if (sortBy === "publisherYear") {
    wishListBooks.sort((a, b) => {
      if (a.yearOfPublishing > b.yearOfPublishing) {
        return -1;
      }
      if (a.yearOfPublishing < b.yearOfPublishing) {
        return 1;
      }
      return 0;
    });
  }

  console.log("sort", sortBy);
  return (
    <div className="container mx-auto mt-10">
      <h3 className="bg-[#1313130D] rounded-lg text-[#131313] text-[28px] font-bold font-work-sans text-center py-[30px]">
        Books
      </h3>

      <div className="text-center">
        <details className="dropdown  mt-[20px]">
          <summary className="m-1 btn">
            Sort By <IoIosArrowDown />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={() => setSortBy("rating")}>
              <a>Rating</a>
            </li>
            <li onClick={() => setSortBy("numberOfPages")}>
              <a>Number of pages</a>
            </li>
            <li onClick={() => setSortBy("publisherYear")}>
              <a>Publisher year</a>
            </li>
          </ul>
        </details>
      </div>
      <div role="tablist" className="tabs tabs-lifted mt-[70px]">
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
