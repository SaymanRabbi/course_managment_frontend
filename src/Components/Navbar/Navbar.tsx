import { useState } from "react";
import { FiAlignLeft, FiAlignRight } from "react-icons/fi";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className=" flex flex-col w-[100%] shrink-0 fixed z-[1100] top-0 left-auto right-0 bg-transparent backdrop-blur-[9px] text-white shadow-sm">
      {/* conatiner */}
      <div className=" container px-[30px] sm:px-[24px] mx-auto py-4 relative">
        <div className=" xl:mx-[40px] min-h-[48px] sm:min-h-[64px] relative pt-[8px] pb-[12px] flex items-center justify-between ">
          {/* ------logo */}
          <a
            href=""
            className=" flex justify-center items-center mt-[-6px] cursor-pointer no-underline font-[500] text-[18px]"
          >
            Logo
          </a>
          {/* ------logo */}
          {/* navbar item */}
          <div className=" md:flex items-center hidden">
            <a href="" className=" px-6 capitalize no-underline">
              Home
            </a>
            <a href="" className=" px-6 capitalize no-underline">
              {" "}
              Products{" "}
            </a>
            <a href="" className=" px-6 capitalize no-underline">
              {" "}
              About{" "}
            </a>
            <a href="" className=" px-6 capitalize no-underline">
              {" "}
              Success{" "}
            </a>
          </div>
          {/*----mobile menu----*/}
          <div className=" md:hidden block ml-[-12px] mr-[18px] z-[100]">
            {navbar ? (
              <FiAlignRight
                onClick={() => setNavbar(!navbar)}
                className=" text-[24px] cursor-pointer"
              />
            ) : (
              <FiAlignLeft
                onClick={() => setNavbar(!navbar)}
                className=" text-[24px] cursor-pointer"
              />
            )}
          </div>
          {navbar && (
            <div className=" md:hidden block w-[100%] h-[100vh] top-[0px] left-0 right-0 bottom-0 fixed z-[10]  bg-black bg-opacity-50">
              <div className="w-[calc(100%-40px)] top-[80px] mr-[20px] fixed backdrop-blur-[12.5px] rounded-[14px] pb-[24px] bg-[#070723bf] mx-[16px] my-0 py-[8px]">
                <div className=" flex flex-col mx-[16px] my-0 py-[8px] px-6">
                  <div className=" pb-[8px]">
                    <a href="" className="  capitalize no-underline">
                      Home
                    </a>
                    <div className=" h-[.5px] w-[100%] bg-gray-600" />
                  </div>
                  <div className=" pb-[8px]">
                    <a href="" className="  capitalize no-underline">
                      {" "}
                      Products{" "}
                    </a>
                    <div className=" h-[.5px] w-[100%] bg-gray-600" />
                  </div>
                  <div className=" pb-[8px]">
                    <a href="" className="  capitalize no-underline">
                      {" "}
                      About{" "}
                    </a>
                    <div className=" h-[.5px] w-[100%] bg-gray-600" />
                  </div>
                  <a href="" className="  capitalize no-underline">
                    {" "}
                    Success{" "}
                  </a>
                </div>
              </div>
            </div>
          )}

          {/*----mobile menu----*/}
          {/* navbar item */}
        </div>
      </div>
      {/* conatiner */}
    </nav>
  );
};

export default Navbar;
