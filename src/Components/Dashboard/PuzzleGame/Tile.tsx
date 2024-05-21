import React from "react";
import "./Tile.css";
interface TileProps {
  value: number;
  onClick: () => void;
  position: number;
}

const Tile: React.FC<TileProps> = ({ value, onClick, position }) => {
  return (
    <div
      onClick={onClick}
      className={`text-white text-[50px] font-bold flex justify-center items-center  cursor-pointer w-[100px] h-[100px] bg-[#342956] absolute number slot--${position} tile ${
        value === position + 1 ? "bg-[#8158EB]" : ""
      }
    ${value === 16 ? "disabled bg-[#8158EB]/50" : ""}
   `}
    >
      <div>{value === 16 ? "" : value}</div>
    </div>
  );
};

export default Tile;
