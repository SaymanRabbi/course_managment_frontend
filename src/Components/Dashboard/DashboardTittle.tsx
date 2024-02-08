import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}
const DashboardTittle: React.FC<Props> = ({ className, children }) => {
  return (
    <div
      className={` mb-[24px] pb-[20px] border-b-[2px] flex justify-between items-center border-gray-700  ${className}`}
    >
      {children}
    </div>
  );
};

export default DashboardTittle;
