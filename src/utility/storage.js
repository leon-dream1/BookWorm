import { toast } from "react-toastify";

export const getReadBooks = () => {
  const readBooks = localStorage.getItem("read-books");

  if (readBooks) {
    return JSON.parse(readBooks);
  }
  return [];
};

export const saveReadBooks = (bookID) => {
  const storedReadBooks = getReadBooks();

  const isExist = storedReadBooks.includes(bookID);
  console.log(isExist);
  if (isExist) {
    toast.error("You have Already read this Book");
  } else {
    storedReadBooks.push(bookID);
    localStorage.setItem("read-books", JSON.stringify(storedReadBooks));
    toast.success("Congratulation!!! You just finished the book........");
  }
};

export const getWishListBooks = () => {
  const wishListBooks = localStorage.getItem("wish-list");

  if (wishListBooks) {
    return JSON.parse(wishListBooks);
  }
  return [];
};

export const saveWishListBooks = (bookID) => {
  const storedReadBooks = getReadBooks();
  const alreadyRead = storedReadBooks.includes(bookID);
  if (alreadyRead) {
    toast.error("You have Already read this Book");
  } else {
    const storedWishListBooks = getWishListBooks();

    const isExist = storedWishListBooks.includes(bookID);
    console.log(isExist);
    if (isExist) {
      toast.error("The Books already has been added in your Wishlist!!!!!!");
    } else {
      storedWishListBooks.push(bookID);
      localStorage.setItem("wish-list", JSON.stringify(storedWishListBooks));
      toast.success("This Books has been added successfully in your Wishlist........");
    }
  }
};
