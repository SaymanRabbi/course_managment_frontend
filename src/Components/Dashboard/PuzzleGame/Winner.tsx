import React from "react";
import NewGame from "./NewGame";

interface WinnerProps {
  onClick?: () => void;
  boards: { value: number; position: number }[];
}
const Winner: React.FC<WinnerProps> = ({ boards, onClick }) => {
  if (!boards.every((item) => item.value === item.position + 1)) {
    return null;
  }
  return (
    <div className=" absolute  top-0 right-0 bottom-0 left-0 rounded-[10px] bg-[#8158EB] text-white justify-center items-center flex z-[100] flex-col">
      <p>You Won</p>
      <NewGame onClick={onClick} />
    </div>
  );
};

export default Winner;
