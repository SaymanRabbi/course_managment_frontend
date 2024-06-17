import { useEffect, useState } from "react";
import DashboardCard from "../DashboardCard";
import Overly from "./Overly";
import "./PuzzleGame.css";
import Tile from "./Tile";
import Winner from "./Winner";
import NewGame from "./NewGame";
const PuzzleGame = () => {
  const Shuffle = () =>
    new Array(16)
      .fill(0)
      .map((_, i) => i + 1)
      .sort(() => Math.random() - 0.5)
      .map((item, index) => ({
        value: item,
        position: index,
      }));
  const [boards, setBoards] = useState(Shuffle());
  const [animating, setAnimating] = useState(false);
  const moveTile = (position: number) => {
    const i16 = boards.find((n) => n.value === 16)?.position || 0;
    if (![i16 - 1, i16 + 1, i16 - 4, i16 + 4].includes(position) || animating)
      return;

    const newBoards = [...boards].map((item) => {
      if (item.position !== i16 && item.position !== position) return item;
      else if (item.value === 16) return { value: 16, position: position };
      return { value: item.value, position: i16 };
    });
    setAnimating(true);
    setBoards(newBoards);
    setTimeout(() => {
      setAnimating(false);
    }, 400);
  };
  const handleKeyDown = (e: any) => {
    const i16 = boards.find((n) => n.value === 16)?.position || 0;
    if (animating) return;
    if (e.key === "ArrowUp" && i16 + 4 < 16) moveTile(i16 + 4);
    if (e.key === "ArrowDown" && i16 - 4 >= 0) moveTile(i16 - 4);
    if (e.key === "ArrowLeft" && i16 + 1 < 16 && i16 % 4 !== 3)
      moveTile(i16 + 1);
    if (e.key === "ArrowRight" && i16 - 1 >= 0 && i16 % 4 !== 0)
      moveTile(i16 - 1);
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [boards, animating]);
  const handleNewGame = () => {
    setBoards(Shuffle());
  };
  useEffect(() => {
    handleNewGame();
  }, []);
  return (
    <DashboardCard title="Solve Puzzles">
      <div className="flex justify-center items-center">
        {/* ------board */}
        <div className="relative p-5">
          <div className="  grid board rounded-[10px] relative overflow-hidden border-[5px] border-solid border-[#8158EB] grid-cols-custom grid-rows-custom lg:grid-cols-customs lg:grid-rows-customs">
            <Overly />
            {boards.map((item, index) => (
              <Tile
                key={index}
                value={item?.value}
                position={item?.position}
                onClick={() => moveTile(item?.position)}
              />
            ))}
          </div>
          <Winner boards={boards} onClick={() => handleNewGame()} />
          <NewGame onClick={() => handleNewGame()} />
        </div>
        {/* ------board */}
      </div>
    </DashboardCard>
  );
};

export default PuzzleGame;
