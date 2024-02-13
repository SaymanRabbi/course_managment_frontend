import { useEffect, useState } from "react";

import { FaCheck } from "react-icons/fa6";
import { quizData } from "../../dummyData/DummyData";
import Button from "../Button/Button";
import { useUserStore } from "../../Store/UserStore";
interface Props {
  id: string;
}
const HeroIq: React.FC<Props> = ({ id }) => {
  const { getQuiz, courseId, quiz, token } = useUserStore((state) => state);
  const [data, setData] = useState(quizData);
  useEffect(() => {
    const getQuizs = async () => {
      await getQuiz(id, courseId, token);
    };
    getQuizs();
  }, [id]);
  const [click, setClick] = useState<any>({});
  const [index, setIndex] = useState<any>(
    localStorage.getItem("index")
      ? JSON.parse(localStorage.getItem("index") as string)
      : {}
  );
  const [score, setScore] = useState<number>(0);
  const [next, setNext] = useState<boolean>(false);
  const [yourAnswer, setYourAnswer] = useState<number>();
  const [finish, setFinish] = useState<boolean>(
    localStorage.getItem("finish")
      ? JSON.parse(localStorage.getItem("finish") as string)
      : false
  );
  const [nextIndex, setNextIndex] = useState<number>(0);

  const OnClick = (i: any) => {
    setIndex({ ...index, [nextIndex]: i });
    setClick({
      ...click,
      [nextIndex]: true,
    });
    setYourAnswer(i);
  };
  const OnClickNext = () => {
    setNextIndex(nextIndex + 1);
    setNext(true);
    // setClick(false)
  };
  const OnClickPrev = () => {
    setNextIndex(nextIndex - 1);
    setNext(false);
    // setClick(false)
  };
  const Finish = () => {
    console.log(data.length - 1);
    setFinish(true);
    setIndex({ ...index, [nextIndex]: yourAnswer });
    localStorage.setItem("index", JSON.stringify(index));
    localStorage.setItem("finish", JSON.stringify(true));
  };
  useEffect(() => {
    const ScoreCheck = () => {
      let score = 0;
      data.map((item, ind) => {
        item.map((item) => {
          if (
            index[ind] ==
            item.quiz.findIndex((item: any) => item.answer === true)
          ) {
            score = score + 1;
          }
        });
        setScore(score);
      });
      return score;
    };
    ScoreCheck();
  }, [finish]);

  if (!data) {
    return <p> No Data Available</p>;
  }
  return (
    <div className="bg-no-repeat  relative overflow-hidden">
      {finish ? (
        //  ------amswer page---
        <div className=" block  w-full  h-full ">
          <div className=" w-[100%] mx-auto">
            <span className=" block text-center font-[800] text-textPrimary md:text-[30px] text-[25px]  pb-8">
              Your Score is{" "}
              <span className=" font-bold text-rgbFrom">{score}</span> out of{" "}
              <span className=" font-bold text-rgbTo">{data.length}</span>
            </span>
            <div className=" grid grid-cols-12 lg:gap-x-4 gap-x-[5px]">
              {data.map((item, ind) =>
                item?.map((item, i) => (
                  <div
                    className={`lg:col-span-6 col-span-12 pt-3 pb-3 shadow-xl rounded-[5px] mb-[20px] ${
                      index[ind] ==
                      item.quiz.findIndex((item: any) => item.answer === true)
                        ? " bg-bgPrimary"
                        : "bg-error/60"
                    }`}
                    key={i}
                  >
                    <p className=" px-4 font-[500] text-textPrimary">
                      {item.tittle}
                    </p>
                    {item?.quiz.map((item, i) =>
                      item?.answer && item.text ? (
                        <div className=" px-4 py-1 border-gray-200" key={i}>
                          <p className=" font-[600] text-textPrimary">
                            Right Answer: {item.text}
                          </p>
                        </div>
                      ) : null
                    )}
                    {index[ind] ==
                    item.quiz.findIndex((item: any) => item.answer === true) ? (
                      <div className=" px-4   border-gray-200">
                        <p className=" font-[600] text-success">
                          Your Answer: {item.quiz[index[ind]].text}
                        </p>
                      </div>
                    ) : (
                      <p className="px-4 font-[600] text-textPrimary">
                        Your Answer: {item.quiz[index[ind]]?.text}
                      </p>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      ) : (
        //  ------amswer page---
        <div className=" mb-[150px]">
          {data[nextIndex]?.map((item) => (
            <div key={item.id}>
              <div className="lg:px-[4px] px-0  text-textPrimary font-bold text-[16px] gap-2 inline-block">
                Question {nextIndex + 1} :<h2>{item.tittle}</h2>
              </div>
              <div className=" mt-[20px]">
                <div className=" lg:w-[95%] w-[100%] mx-auto">
                  <div className=" grid grid-cols-12 lg:gap-8 gap-2">
                    {/* quiz question--- */}
                    {item.quiz.map((item, i) => (
                      <div
                        key={i}
                        onClick={() => OnClick(i)}
                        className={`lg:col-span-6 col-span-12 py-3 pl-[10px] flex lg:gap-4 gap-2 border-2 border-b-[3px] rounded-[10px] cursor-pointer ${
                          click && index[nextIndex] === i
                            ? "border-rgbFrom  bg-transparent "
                            : ""
                        }`}
                      >
                        <div
                          className={` w-[30px] h-[30px] rounded-[8px] ${
                            click[nextIndex] === true && index[nextIndex] === i
                              ? "bg-rgbFrom text-textPrimary"
                              : "bg-rgbTo text-textPrimary font-[500]"
                          } flex justify-center items-center`}
                        >
                          {click[nextIndex] === true &&
                          index[nextIndex] === i ? (
                            <FaCheck size={16} />
                          ) : (
                            i + 1
                          )}
                        </div>
                        <div
                          className={`font-[800] text-[16px] mt-[5px] ${
                            click[nextIndex] === true && index[nextIndex] === i
                              ? "text-textPrimary"
                              : "text-gray-500"
                          }`}
                        >
                          <span>{item.text}</span>
                        </div>
                      </div>
                    ))}

                    {/* quiz question--- */}
                  </div>
                </div>
              </div>
              {/* ----render quiz--- */}
              <div className=" absolute bottom-[30px] w-[100%] pb-[20px]">
                <div className="w-[50%] mx-auto">
                  <span className=" text-center block font-[800] text-gray-600 text-[16px]">
                    {`Question ${nextIndex + 1}/${data.length}`}
                  </span>
                  <div className=" w-[100%] rounded-[15px] h-[10px] bg-gray-300">
                    <div
                      className={`bg-rgbTo h-full rounded-[15px]`}
                      style={{
                        width: `${((nextIndex + 1) * 100) / data.length}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className=" absolute bottom-0 right-0 ">
            {nextIndex === data.length - 1 ? (
              <Button
                className="relative z-[5] bg-gradient-to-r from-rgbFrom to-rgbTo !py-2 rounded-[3px]"
                onClick={Finish}
              >
                Finish
              </Button>
            ) : (
              <Button
                className={` rounded-[3px] !py-2 ${
                  click[nextIndex] === undefined
                    ? " bg-gray-200 cursor-not-allowed text-gray-500 !px-[4px] lg:!px-[10px]"
                    : "text-textPrimary bg-gradient-to-r from-rgbFrom to-rgbTo !px-[4px] lg:!px-[10px]"
                }`}
                onClick={OnClickNext}
                disabled={click[nextIndex] === undefined}
              >
                Next Question
              </Button>
            )}
          </div>
          <div className=" absolute bottom-0 left-0 ">
            <Button
              className={`relative z-[5]  !py-2 rounded-[3px] ${
                nextIndex === 0
                  ? " bg-gray-200 cursor-not-allowed text-gray-500 !px-[4px] lg:!px-[10px]"
                  : "text-textPrimary bg-gradient-to-r from-rgbFrom to-rgbTo !px-[4px] lg:!px-[10px]"
              }`}
              onClick={OnClickPrev}
              disabled={nextIndex === 0}
            >
              Previous Question
            </Button>
          </div>
        </div>
      )}
      {/* ----render quiz--- */}
    </div>
  );
};

export default HeroIq;
