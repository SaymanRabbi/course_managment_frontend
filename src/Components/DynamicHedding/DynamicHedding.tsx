import React, { ReactNode } from "react";
interface TitleProps {
  children: ReactNode;
  className?: string;
}
const DynamicHedding: React.FC<TitleProps> = ({ children, className }) => {
  return <div className={`font-bold mb-4 ${className}`}>{children}</div>;
};

export default DynamicHedding;
