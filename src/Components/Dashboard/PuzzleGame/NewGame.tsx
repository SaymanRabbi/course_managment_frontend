import React from "react";

interface NewGameProps {
  onClick?: () => void;
}
const NewGame: React.FC<NewGameProps> = ({ onClick }) => {
  return (
    <div
      className="flex items-center justify-center w-[100%] my-3 text-white rounded-[10px]"
      onClick={onClick}
    >
      <button className="  py-3 bg-[#5753E3] px-3 ">New game</button>
    </div>
  );
};

export default NewGame;
