import PropTypes from "prop-types";

import { CiStar } from "react-icons/ci";

const Book = ({ book }) => {
  const { image, bookName, author, tags, category, rating } = book;
  return (
    <div className="card w-96 border border-[#13131326] rounded-2xl p-6 cursor-pointer">
      <figure className="bg-[#F3F3F3] rounded-[16px] h-[50%]">
        <img src={image} alt={bookName} className="w-[70%] h-[70%] mx-auto" />
      </figure>
      <div className="space-x-4 mt-6">
        {tags.map((tag, index) => (
          <span
            className="bg-[#23BE0A0D] rounded-[30px] text-[#23BE0A] text-[16px] font-medium font-work-sans py-[10px] px-[15px]"
            key={index}
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="">
        <h2 className="text-[#131313] font-playfair text-[24px] font-bold my-6">
          {bookName}
        </h2>
        <p className="border-b border-[#13131326] text-[#131313CC] font-work-sans text-[16px] font-medium pb-[20px]">
          By: {author}
        </p>
      </div>
      <div className="pt-5 flex justify-between">
        <span className="text-[#131313CC] text-[16px] font-medium font-work-sans ">
          {category}
        </span>
        <div className="flex flex-row items-center space-x-3">
          <span className="text-[#131313CC] text-[16px] font-medium font-work-sans ">
            {rating}
          </span>
          <CiStar size={20}></CiStar>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object,
};
export default Book;
