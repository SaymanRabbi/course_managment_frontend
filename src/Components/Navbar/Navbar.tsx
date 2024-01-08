const Navbar = () => {
  return (
    <nav className=" flex flex-col w-[100%] shrink-0 fixed z-[1100] top-0 left-auto right-0 bg-transparent backdrop-blur-[9px] text-white shadow-sm">
      {/* conatiner */}
      <div className=" container px-[16px] sm:px-[24px] mx-auto py-4">
        <div className=" xl:mx-[40px] min-h-[48px] sm:min-h-[64px] relative pt-[8px] pb-[12px] flex items-center justify-between ">
          {/* ------logo */}
          <a
            href=""
            className=" flex justify-center items-center mt-[-6px] cursor-pointer no-underline"
          >
            Logo
          </a>
          {/* ------logo */}
          {/* navbar item */}
          <div className=" flex items-center gap-x-3">
            <a href="" className=" px-5">
              home
            </a>
            <a href="" className=" px-5">
              {" "}
              home{" "}
            </a>
            <a href="" className=" px-5">
              {" "}
              home{" "}
            </a>
            <a href="" className=" px-5">
              {" "}
              home{" "}
            </a>
          </div>
          {/* navbar item */}
        </div>
      </div>
      {/* conatiner */}
    </nav>
  );
};

export default Navbar;
