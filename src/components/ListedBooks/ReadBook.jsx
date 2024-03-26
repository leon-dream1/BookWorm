import PropTypes from "prop-types";

import { FaMapMarkerAlt } from "react-icons/fa";
import { MdPeopleOutline } from "react-icons/md";
import { BiSolidBook } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const ReadBook = ({ book }) => {
  const {
    bookId,
    image,
    bookName,
    tags,
    author,
    yearOfPublishing,
    publisher,
    totalPages,
    category,
    rating,
  } = book;
  const navigate =  useNavigate();

  return (
    <div className="flex flex-row justify-between gap-6 my-4 border border-[#13131326] rounded-2xl p-6 ">
      <div className="w-[20%] bg-[#1313130D] rounded-2xl flex items-center">
        <img src={image} alt={bookName} className="w-[80%] h-[80%] mx-auto" />
      </div>
      <div className="w-[80%]">
        <div className="">
          <h2 className="text-[#131313] font-playfair text-[24px] font-bold my-6">
            {bookName}
          </h2>
          <p className="border-b border-[#13131326] text-[#131313CC] font-work-sans text-[16px] font-medium pb-[20px]">
            By: {author}
          </p>
        </div>
        <div className="space-x-4 mt-6">
          <span>Tag</span>
          {tags.map((tag, index) => (
            <span
              className="bg-[#23BE0A0D] rounded-[30px] text-[#23BE0A] text-[16px] font-medium font-work-sans py-[10px] px-[15px]"
              key={index}
            >
              #{tag}
            </span>
          ))}

          <span className="text-[#131313CC] text-[16px] font-normal font-work-sans ">
            <FaMapMarkerAlt size={20} className="inline mx-4"></FaMapMarkerAlt>
            Year of Publishing: {yearOfPublishing}
          </span>
        </div>
        <div className="space-x-4 mt-5 pb-[20px]">
          <span className="text-[#131313CC] text-[16px] font-normal font-work-sans ">
            <MdPeopleOutline
              size={20}
              className="inline mr-4"
            ></MdPeopleOutline>
            Publisher: {publisher}
          </span>
          <span className="text-[#131313CC] text-[16px] font-normal font-work-sans ">
            <BiSolidBook size={20} className="inline mx-4"></BiSolidBook>
            Page: {totalPages}
          </span>
        </div>
        <div className="border-t border-[#13131326] pt-[40px] space-x-5">
          <span className="px-[20px] py-[11px] bg-[#328EFF26] rounded-[30px] text-[#328EFF] text-[16px]font-work-sans">
            Category: {category}
          </span>
          <span className="px-[20px] py-[11px] bg-[#FFAC3326] rounded-[30px] text-[#FFAC33] text-[16px]font-work-sans">
            Rating: {rating}
          </span>
          <button
            onClick={() => navigate(`/book/${bookId}`)}
            className="px-[20px] py-[11px] bg-[#23BE0A] rounded-[30px] text-[#fff] text-[18px] font-medium font-work-sans"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

ReadBook.propTypes = {
  book: PropTypes.object,
};
export default ReadBook;
