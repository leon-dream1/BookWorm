import { useLoaderData, useParams } from "react-router-dom";
import { saveCartBooks, saveReadBooks, saveWishListBooks } from "../../utility/storage";

const BookDetails = () => {
  const booksData = useLoaderData();

  const { bookId } = useParams();
  const selectedBook = booksData.find(
    (book) => book.bookId === parseInt(bookId)
  );
  const {
    image,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = selectedBook;

  return (
    <div className="container mx-auto my-[50px]">
      {!selectedBook && (
        <div className="flex flex-row w-full justify-center items-center">
          <span className="loading loading-bars loading-xs"></span>
          <span className="loading loading-bars loading-sm"></span>
          <span className="loading loading-bars loading-md"></span>
          <span className="loading loading-bars loading-lg"></span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="bg-[#1313130D] rounded-2xl h-auto lg:h-[650px] flex items-center justify-center object-cover p-[70px]">
          <img src={image} alt={bookName} className="w-[60%] h-[80%]" />
        </div>
        <div className="">
          <h4 className="text-[#131313] text-[40px] font-bold font-playfair text-center lg:text-start">
            {bookName}
          </h4>
          <span className="text-[#131313CC] text-xl font-medium font-work-sans block lg:inline text-center lg:text-start">
            By: {author}
          </span>
          <div className="border-y border-[#13131326] p-[30px] mt-6 text-center lg:text-start">
            <span className="text-xl font-medium font-work-sans">
              {category}
            </span>
          </div>
          <p className="text-[16px] text-[#131313] font-bold my-6 mx-2 lg:mx-0">
            Review:{" "}
            <span className="text-[#131313B2] text-[16px] font-normal">
              {review}
            </span>
          </p>

          <div className="space-x-4 mt-6 border-b border-[#13131326] pb-[30px] text-center lg:text-start">
            <span>Tag</span>
            {tags.map((tag, index) => (
              <span
                className="bg-[#23BE0A0D] rounded-[30px] text-[#23BE0A] text-[16px] font-medium font-work-sans py-[10px] px-[15px]"
                key={index}
              >
                #{tag}
              </span>
            ))}
          </div>
          <div className="my-6 space-y-4 w-[60%] mx-auto lg:mx-0">
            <div className="flex flex-row justify-between text-right">
              <span className="text-[#131313B2] text-[16px] font-work-sans">
                Number Of Pages
              </span>
              <span className="text-[#131313] text-[16px] font-work-sans font-semibold">
                {totalPages}
              </span>
            </div>
            <div className="flex flex-row justify-between text-left">
              <span className="text-[#131313B2] text-[16px] font-work-sans">
                Publisher
              </span>
              <span className="text-[#131313] text-[16px] font-work-sans font-semibold">
                {publisher}
              </span>
            </div>
            <div className="flex flex-row justify-between">
              <span className="text-[#131313B2] text-[16px] font-work-sans">
                Year of Publishing:
              </span>
              <span className="text-[#131313] text-[16px] font-work-sans font-semibold">
                {yearOfPublishing}
              </span>
            </div>
            <div className="flex flex-row justify-between">
              <span className="text-[#131313B2] text-[16px] font-work-sans">
                Rating
              </span>
              <span className="text-[#131313] text-[16px] font-work-sans font-semibold">
                {rating}
              </span>
            </div>
          </div>
          <div className="lg:space-x-6 space-y-4 lg:space-y-0 flex flex-col lg:flex-row w-[50%] lg:w-[100%] mx-auto">
            <button
              onClick={() => saveReadBooks(bookId)}
              className="border border-[#1313134D] px-[20px] py-[15px] text-[#131313] text-[18px] font-semibold rounded-lg"
            >
              Read
            </button>
            <button
              onClick={() => saveWishListBooks(bookId)}
              className="border border-[#1313134D] px-[20px] py-[15px] text-white text-[18px] font-semibold bg-[#50B1C9] rounded-lg"
            >
              Wishlist
            </button>
            <button
            onClick={() => saveCartBooks(bookId)}
              className="border border-[#1313134D] px-[20px] py-[15px] text-white text-[18px] font-semibold bg-[#50c97a] rounded-lg"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
