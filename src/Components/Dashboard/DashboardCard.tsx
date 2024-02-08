import React from "react";
import DashboardTittle from "./DashboardTittle";
interface Props {
  children: React.ReactNode;
  title: string;
  className?: string;
}
const DashboardCard: React.FC<Props> = ({ children, title, className }) => {
  return (
    <div
      className={`shadow-lg bg-bgPrimary/10 mb-[30px] px-[40px] py-[50px] rounded-[10px] ${className}`}
    >
      {/* -------dashboard tittel---- */}
      <DashboardTittle>
        <h4 className=" font-[700] text-textPrimary text-[20px]">{title}</h4>
      </DashboardTittle>
      {children}
    </div>
  );
};

export default DashboardCard;
