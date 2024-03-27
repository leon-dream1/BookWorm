import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#23BE0A] font-semibold border border-[#23BE0A] rounded-lg font-work-sans text-[18px] px-5 py-[14px]"
                    : "text-[#131313CC] text-[18px] font-normal font-work-sans px-5 py-[14px]"
                }
              >
                Home
              </NavLink>
              <NavLink
                to={"/listedBooks"}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#23BE0A] font-semibold border border-[#23BE0A] rounded-lg font-work-sans text-[18px] px-5 py-[14px]"
                    : "text-[#131313CC] text-[18px] font-normal font-work-sans px-5 py-[14px]"
                }
              >
                Listed Books
              </NavLink>
              <NavLink
                to={"/pagesToRead"}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#23BE0A] font-semibold border border-[#23BE0A] rounded-lg font-work-sans text-[18px] px-5 py-[14px]"
                    : "text-[#131313CC] text-[18px] font-normal font-work-sans px-5 py-[14px]"
                }
              >
                Pages to Read
              </NavLink>
            </ul>
          </div>
          <Link
            to={"/"}
            className="text-[#131313] text-[28px] font-bold font-work-sans"
          >
            Book<span className="text-[#f75454] font-playfair">W</span>orm
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-8">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "text-[#23BE0A] font-semibold border border-[#23BE0A] rounded-lg font-work-sans text-[18px] px-5 py-[14px]"
                  : "text-[#131313CC] text-[18px] font-normal font-work-sans px-5 py-[14px]"
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/listedBooks"}
              className={({ isActive }) =>
                isActive
                  ? "text-[#23BE0A] font-semibold border border-[#23BE0A] rounded-lg font-work-sans text-[18px] px-5 py-[14px]"
                  : "text-[#131313CC] text-[18px] font-normal font-work-sans px-5 py-[14px]"
              }
            >
              Listed Books
            </NavLink>
            <NavLink
              to={"/pagesToRead"}
              className={({ isActive }) =>
                isActive
                  ? "text-[#23BE0A] font-semibold border border-[#23BE0A] rounded-lg font-work-sans text-[18px] px-5 py-[14px]"
                  : "text-[#131313CC] text-[18px] font-normal font-work-sans px-5 py-[14px]"
              }
            >
              Pages to Read
            </NavLink>
            <NavLink
              to={"/cart"}
              className={({ isActive }) =>
                isActive
                  ? "text-[#23BE0A] font-semibold border border-[#23BE0A] rounded-lg font-work-sans text-[18px] px-5 py-[14px]"
                  : "text-[#131313CC] text-[18px] font-normal font-work-sans px-5 py-[14px]"
              }
            >
              Cart
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end space-x-5">
          <a className="bg-[#23BE0A] rounded-lg py-[10px] px-[28px] text-[18px] text-white font-semibold font-work-sans cursor-pointer">
            Sign in
          </a>
          <a className="bg-[#59C6D2;] rounded-lg py-[10px] px-[28px] text-[18px] text-white font-semibold font-work-sans cursor-pointer">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
