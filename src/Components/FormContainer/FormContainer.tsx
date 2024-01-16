import React, { ReactNode } from "react";
import Container from "../Container/Container";
interface TitleProps {
  children: ReactNode;
  className?: string;
  title?: string;
}
const FormContainer: React.FC<TitleProps> = ({
  children,
  className,
  title,
}) => {
  return (
    <div
      className={`h-[100%] min-h-[87vh] bg-[url(../../../public/images/register/background.svg)] bg-no-repeat ${className}`}
      style={{ backgroundPosition: "100% 15%" }}
    >
      <Container className="pt-[200px] h-[100%] ">
        <div className=" flex flex-wrap mx-[15px] lg:px-14">
          <div className=" grid grid-cols-12 w-[100%] pt-[40px]">
            <div className=" col-span-12 xl:col-span-6 md:col-span-10">
              <h2 className=" pb-[20px] font-[700] lg:text-[64px] text-[50px] leading-[82px] capitalize text-[#b5acff]">
                {title}
              </h2>
              {children}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FormContainer;
