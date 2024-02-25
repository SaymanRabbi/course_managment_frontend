import { useEffect, useState } from "react";

import { FaCheck } from "react-icons/fa6";

import Button from "../Button/Button";
import { useUserStore } from "../../Store/UserStore";
import { useParams } from "react-router-dom";
interface Props {
  id: any;
}
const HeroIq: React.FC<Props> = () => {
  const { id } = useParams<{ id: string }>();
  // get state---
  const { getQuiz, courseId, quiz, token, updateQuiz, user } = useUserStore(
    (state) => state
  );

  // get state---
  const getQuizs = async () => {
    await getQuiz(id, courseId, token);
  };
  useEffect(() => {
    getQuizs();
  }, [id, courseId, getQuiz, token]);
  const [click, setClick] = useState<any>({});
  const [index, setIndex] = useState<any>(
    localStorage.getItem("index")
      ? JSON.parse(localStorage.getItem("index") as string)
      : {}
  );
  const [score, setScore] = useState<number>(0);
  const [yourAnswer, setYourAnswer] = useState<number>();
  const [finish, setFinish] = useState<boolean>(
    localStorage.getItem("finish")
      ? JSON.parse(localStorage.getItem("finish") as string)
      : false
  );
  const [nextIndex, setNextIndex] = useState(0);
  useEffect(() => {
    const ScoreCheck = async () => {
      let scores = 0;
      if (quiz?.length) {
        quiz[0]?.quizDetails.questions.forEach(
          (question: any, questionIndex: any) => {
            if (
              index[questionIndex] ===
              question.options.findIndex(
                (option: any) => option.answer === true
              )
            ) {
              scores++;
            }
          }
        );

        setScore(scores);
        return scores;
      }
    };
    ScoreCheck();
  }, [finish]);
  if (quiz?.length === 0 || !quiz) {
    return <div className=" text-error font-bold text-xl">loading...</div>;
  }
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

    // setClick(false)
  };
  const OnClickPrev = () => {
    setNextIndex(nextIndex - 1);

    // setClick(false)
  };
  const Finish = async () => {
    let scores = 0;
    if (quiz?.length) {
      quiz[0]?.quizDetails.questions.forEach(
        (question: any, questionIndex: any) => {
          if (
            index[questionIndex] ===
            question.options.findIndex((option: any) => option.answer === true)
          ) {
            scores++;
          }
        }
      );
      setScore(scores);
    }
    const avg = (scores * 100) / quiz[0]?.quizDetails.questions.length;
    const title = quiz[0]?.title;
    const quizLength = quiz[0]?.quizDetails.questions.length;
    await updateQuiz(token, id, avg, courseId, index, title, quizLength);
    setFinish(true);
    setIndex({ ...index, [nextIndex]: yourAnswer });
  };

  return (
    <>
      {user?.quizs && user?.quizs.find((item: any) => item.quizId === id) ? (
        <div className="text-center font-bold text-xl text-success">
          You have already taken this quiz and your score is {""}
          {user?.quizs &&
            user?.quizs.find((item: any) => item.quizId === id)?.score}
        </div>
      ) : finish ? (
        <div className="block w-full h-full">
          <div className="w-[100%] mx-auto">
            <span className="block text-center font-[800] text-textPrimary md:text-[30px] text-[25px] pb-8">
              Your Score is{" "}
              <span className="font-bold text-rgbFrom">{score}</span> out of{" "}
              <span className="font-bold text-rgbTo">
                {quiz[0]?.quizDetails.questions.length}
              </span>
            </span>
            <div className="grid grid-cols-12 lg:gap-x-4 gap-x-[5px]">
              {quiz[0]?.quizDetails.questions.map(
                (question: any, questionIndex: any) => (
                  <div
                    className={`lg:col-span-6 col-span-12 pt-3 pb-3 shadow-xl rounded-[15px] mb-[20px] ${
                      index[questionIndex] ===
                      question.options.findIndex(
                        (option: any) => option.answer === true
                      )
                        ? "bg-bgPrimary"
                        : "bg-bgPrimary"
                    }`}
                    key={questionIndex}
                  >
                    <p className="px-4 font-[500] text-textPrimary">
                      {question.title}
                    </p>
                    <div className="px-4 border-gray-200">
                      <p className="font-[600] text-textPrimary">
                        Correct Answer:{" "}
                        {
                          question.options[
                            question.options.findIndex(
                              (option: any) => option.answer === true
                            )
                          ].text
                        }
                      </p>
                    </div>
                    {index[questionIndex] ===
                    question.options.findIndex(
                      (option: any) => option.answer === true
                    ) ? (
                      <div className="px-4 border-gray-200">
                        <p className="font-[600] text-success">
                          Your Answer:{" "}
                          {question.options[index[questionIndex]].text}
                        </p>
                      </div>
                    ) : (
                      <p className="px-4 font-[600] text-error">
                        Your Answer:{" "}
                        {question.options[index[questionIndex]]?.text}
                      </p>
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-no-repeat  relative overflow-hidden">
          <div className=" mb-[150px]">
            <div>
              <div className="lg:px-[4px] px-0  text-textPrimary font-bold text-[16px] gap-2 inline-block">
                Question {nextIndex + 1} :
                <h2>{quiz[0]?.quizDetails.questions[nextIndex].title}</h2>
              </div>
              <div className=" mt-[20px]">
                <div className=" lg:w-[95%] w-[100%] mx-auto">
                  <div className=" grid grid-cols-12 lg:gap-8 gap-2">
                    {/* quiz question--- */}
                    {quiz[0]?.quizDetails.questions[nextIndex].options.map(
                      (item: any, i: any) => (
                        <div
                          key={i}
                          onClick={() => OnClick(i)}
                          className={`lg:col-span-6 col-span-12 py-3 pl-[10px] flex lg:gap-4 gap-2  cursor-pointer ${
                            click && index[nextIndex] === i
                              ? "border-rgbFrom  bg-transparent "
                              : ""
                          }`}
                        >
                          <div
                            className={` w-[30px] h-[30px] rounded-[8px] ${
                              click[nextIndex] === true &&
                              index[nextIndex] === i
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
                              click[nextIndex] === true &&
                              index[nextIndex] === i
                                ? "text-textPrimary"
                                : "text-gray-500"
                            }`}
                          >
                            <span>{item.text}</span>
                          </div>
                        </div>
                      )
                    )}

                    {/* quiz question--- */}
                  </div>
                </div>
              </div>
              {/* ----render quiz--- */}
              <div className=" absolute bottom-[30px] w-[100%] pb-[20px]">
                <div className="w-[50%] mx-auto">
                  <span className=" text-center block font-[800] text-gray-600 text-[16px]">
                    {`Question ${nextIndex + 1}/${
                      quiz[0]?.quizDetails.questions.length
                    }`}
                  </span>
                  <div className=" w-[100%] rounded-[15px] h-[10px] bg-gray-300">
                    <div
                      className={`bg-rgbTo h-full rounded-[15px]`}
                      style={{
                        width: `${
                          ((nextIndex + 1) * 100) /
                          quiz[0]?.quizDetails.questions.length
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" absolute bottom-0 right-0 ">
              {nextIndex === quiz[0]?.quizDetails.questions.length - 1 ? (
                <Button
                  className={`relative z-[5] !py-2 ${
                    click[nextIndex] === undefined
                      ? " bg-gray-200 cursor-not-allowed text-gray-500 !px-[4px] lg:!px-[10px]"
                      : "text-textPrimary bg-gradient-to-r from-rgbFrom to-rgbTo !px-[4px] lg:!px-[10px]"
                  }`}
                  onClick={Finish}
                  disabled={click[nextIndex] === undefined}
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
        </div>
      )}
    </>
  );
};

export default HeroIq;
