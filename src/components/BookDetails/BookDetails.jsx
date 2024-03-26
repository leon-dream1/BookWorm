import { useLoaderData, useParams } from "react-router-dom";

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
      <div className="grid grid-cols-2 gap-8 items-center">
        <div className="bg-[#1313130D] rounded-2xl h-[650px] flex items-center justify-center object-cover p-[70px]">
          <img src={image} alt={bookName} className="w-[60%] h-[80%]" />
        </div>
        <div className="">
          <h4 className="text-[#131313] text-[40px] font-bold font-playfair">
            {bookName}
          </h4>
          <span className="text-[#131313CC] text-xl font-medium font-work-sans">
            By: {author}
          </span>
          <div className="border-y border-[#13131326] p-[30px] mt-6">
            <span className="text-xl font-medium font-work-sans">
              {category}
            </span>
          </div>
          <p className="text-[16px] text-[#131313] font-bold my-6">
            Review:{" "}
            <span className="text-[#131313B2] text-[16px] font-normal">
              {review}
            </span>
          </p>

          <div className="space-x-4 mt-6 border-b border-[#13131326] pb-[30px]">
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
          <div className="my-6 space-y-4 w-[60%]">
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
          <div className="space-x-6">
            <button className="border border-[#1313134D] px-[20px] py-[15px] text-[#131313] text-[18px] font-semibold rounded-lg">
              Read
            </button>
            <button className="border border-[#1313134D] px-[20px] py-[15px] text-white text-[18px] font-semibold bg-[#50B1C9] rounded-lg">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
