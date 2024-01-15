import { useState } from "react";
import { FiAlignLeft, FiAlignRight } from "react-icons/fi";
import Container from "../Container/Container";
interface Route {
  name: string;
  link: string;
}
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const route: Route[] = [
    {
      name: "Home",
      link: "",
    },
    {
      name: "Products",
      link: "",
    },
    {
      name: "About",
      link: "",
    },
    {
      name: "Success",
      link: "",
    },
  ];
  return (
    <nav className=" flex flex-col w-[100%] shrink-0 fixed z-[1100] top-0 left-auto right-0 bg-transparent backdrop-blur-[9px] text-white shadow-sm">
      {/* conatiner */}
      <Container className="pt-4 pb-2 relative">
        <div className=" xl:mx-[40px] min-h-[48px] sm:min-h-[64px] relative pt-[8px] pb-[12px] flex items-center justify-between ">
          {/* ------logo */}
          <a
            href=""
            className=" flex justify-center items-center mt-[-6px] cursor-pointer no-underline font-[500] text-[18px] text-primary"
          >
            Logo
          </a>
          {/* ------logo */}
          {/* navbar item */}
          <div className=" md:flex items-center hidden">
            {route.map((item, index) => {
              return (
                <div
                  className=" px-6 capitalize no-underline text-textSecondary"
                  key={index}
                >
                  {item.name}
                </div>
              );
            })}
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
                  {route.map((item, index) => {
                    return (
                      <div className=" pb-[8px]" key={index}>
                        <a
                          href=""
                          className="  capitalize no-underline text-textSecondary"
                        >
                          {item.name}
                        </a>
                        {item.name === "Success" ? (
                          ""
                        ) : (
                          <div className=" h-[.5px] w-[100%] bg-gray-600" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/*----mobile menu----*/}
          {/* navbar item */}
        </div>
      </Container>
      {/* conatiner */}
    </nav>
  );
};

export default Navbar;
