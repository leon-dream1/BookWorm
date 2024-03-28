import banner from "../../../images/banner.png";

const Banner = () => {
  return (
    <div className="container mx-auto mt-[50px]">
      <div className="hero bg-base-200 rounded-3xl h-[600px] text-center lg:text-start">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={banner} className="max-w-[250px] lg:max-w-sm rounded-lg" />
          <div>
            <h1 className="text-[20px] lg:text-[56px] text-[#131313] font-playfair font-bold">
              Breathe New Energy into Your Reading List with These Unmissable
              Books
            </h1>
            <button className="mt-[50px] bg-[#23BE0A] rounded-lg py-[10px] px-[15px] lg:px-[28px] text-[18px] text-white font-semibold font-work-sans cursor-pointer">
              View The List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
