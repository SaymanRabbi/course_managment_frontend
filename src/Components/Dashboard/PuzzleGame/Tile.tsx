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
      className={`text-white text-[50px] font-bold flex justify-center items-center  cursor-pointer lg:w-[200px] lg:h-[200px] w-[100px] h-[100px] bg-[#342956] absolute number
      ${
        position === 0
          ? " left-0 top-0"
          : position === 1
          ? " lg:left-[200px] top-0 left-[100px]"
          : position === 2
          ? "lg:left-[calc(200px*2)] top-0 left-[calc(100px*2)]"
          : position === 3
          ? "lg:left-[calc(200px*3)] top-0 left-[calc(100px*3)]"
          : position === 4
          ? "left-0 lg:top-[200px] top-[100px]"
          : position === 5
          ? "lg:left-[200px] left-[100px] lg:top-[200px] top-[100px]"
          : position === 6
          ? "lg:left-[calc(200px*2)] left-[calc(100px*2)]  lg:top-[200px] top-[100px]"
          : position === 7
          ? "lg:left-[calc(200px*3)] left-[calc(200px*3)] lg:top-[200px] top-[100px]"
          : position === 8
          ? "left-0 lg:top-[calc(200px*2)] top-[calc(100px*2)]"
          : position === 9
          ? "lg:left-[200px] left-[100px] lg:top-[calc(200px*2)] top-[calc(100px*2)]"
          : position === 10
          ? "lg:left-[calc(200px*2)] left-[calc(100px*2)] lg:top-[calc(200px*2)] top-[calc(100px*2)]"
          : position === 11
          ? "lg:left-[calc(200px*3)] left-[calc(100px*3)] lg:top-[calc(200px*2)] top-[calc(100px*2)]"
          : position === 12
          ? "left-0 lg:top-[calc(200px*3)] top-[calc(100px*3)]"
          : position === 13
          ? "lg:left-[200px] left-[100px] lg:top-[calc(200px*3)] top-[calc(100px*3)]"
          : position === 14
          ? "lg:left-[calc(200px*2)] left-[calc(100px*2)] lg:top-[calc(200px*3)] top-[calc(100px*3)]"
          : position === 15
          ? "lg:left-[calc(200px*3)] left-[calc(100px*3)] lg:top-[calc(200px*3)] top-[calc(100px*3)]"
          : ""
      }





      tile ${value === position + 1 ? "bg-[#8158EB]" : ""}
    ${value === 16 ? "disabled bg-[#8158EB]/50" : ""}
   `}
    >
      <div>{value === 16 ? "" : value}</div>
    </div>
  );
};

export default Tile;
