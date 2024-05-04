import React, { useEffect, useState } from "react";
import { MdError } from "react-icons/md";
import { useUserStore } from "../../../Store/UserStore";
interface chartInterface {
  title?: string;
  ClassName?: string;
}
const QuizChart: React.FC<chartInterface> = ({ title, ClassName }) => {
  const { user, courses } = useUserStore((state) => state);
  const [totalquiz, setTotalQuiz] = useState(0);
  const [avgScore, setavgScore] = useState(0);
  useEffect(() => {
    let Totalquiz = 0;
    courses?.map((item: any) =>
      item?.modules?.map((item: any) =>
        item?.lessons?.map((item: any) => {
          if (item?.type === "quiz") {
            Totalquiz++;
          }
        })
      )
    );
    setTotalQuiz(Totalquiz);
  }, [courses]);
  useEffect(() => {
    let totalScore = 0;
    let totalQuizzes = 0;

    // Calculate total score and total number of quizzes
    user?.quizs?.forEach((item) => {
      totalScore += Number(item?.score);
      totalQuizzes++;
    });

    const averageScore = totalQuizzes > 0 ? totalScore / totalQuizzes : 0;
    const maxPossibleScore = 100; // Assuming each quiz has a maximum score of 100
    const averageScorePercentage = (averageScore / maxPossibleScore) * 100;

    setavgScore(averageScorePercentage);
  }, [user, courses]);

  return (
    <div
      className={`min-h-[300px] max-h-[300px] h-[100%]  bg-[#0B0C20]/70 rounded-[10px] shadow-md text-white px-4 py-6 w-[100%]
    ${ClassName}
    
    `}
    >
      {/* title */}
      <div className=" flex justify-between items-center">
        <h2 className=" font-bold text-[25px]">{title}</h2>
        <MdError className=" font-bold text-[25px]" />
      </div>
      {/* title */}
      {/* content */}
      <div className=" flex mt-6 gap-x-8">
        <div className=" h-[180px] w-[180px] bg-[#6E39FE] rounded-full px-5 flex items-center justify-center">
          <div className=" w-[120px] h-[120px] rounded-full bg-[#0D0D21] text-white flex justify-center items-center">
            <div className="text-center">
              <h2 className=" font-bold text-[22px]">{avgScore}%</h2>
              <span>Avg mark</span>
            </div>
          </div>
        </div>
        {/* ------- */}
        <div className=" py-2 px-4">
          <div>
            <h2>Complete Quiz</h2>
            <span>{user?.quizs?.length || 0}</span>
          </div>
          <div className=" my-3">
            <h2>Incomplete Quiz</h2>
            <span>{totalquiz - (user?.quizs?.length || 0)}</span>
          </div>
          <div>
            <h2>Total Quiz</h2>
            <span>{totalquiz || 0}</span>
          </div>
        </div>
        {/* ------- */}
      </div>
      {/* content */}
    </div>
  );
};

export default QuizChart;
