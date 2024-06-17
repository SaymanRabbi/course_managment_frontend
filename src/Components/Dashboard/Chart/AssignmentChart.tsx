import React, { useEffect, useState } from "react";
import { MdError } from "react-icons/md";
import { useUserStore } from "../../../Store/UserStore";
interface chartInterface {
  title?: string;
  ClassName?: string;
}
const AssignmentChart: React.FC<chartInterface> = ({ title, ClassName }) => {
  const { user, courses } = useUserStore((state) => state);
  const [totalAssignments, setTotalAssignments] = useState(0);
  console.log(courses);
  const [avgScore, setavgScore] = useState(0);
  useEffect(() => {
    let Totalquiz = 0;
    courses?.map((item: any) =>
      item?.modules?.map((item: any) =>
        item?.lessons?.map((item: any) => {
          if (item?.type === "assignment" && item?.title) {
            Totalquiz++;
          }
        })
      )
    );
    setTotalAssignments(Totalquiz);
  }, [courses]);
  useEffect(() => {
    let totalScore = 0;
    let totalAssignment = 0;

    // Calculate total score and total number of quizzes
    user?.assignment?.forEach((item) => {
      totalScore += Number(item);
      totalAssignment++;
    });

    const averageScore = totalAssignment > 0 ? totalScore / totalAssignment : 0;
    const maxPossibleScore = 60; // Assuming each quiz has a maximum score of 100
    const averageScorePercentage = (averageScore / maxPossibleScore) * 60;
    setavgScore(averageScorePercentage);
  }, [user, courses]);
  return (
    <div
      className={`min-h-[300px] max-h-[300px] h-[100%]  bg-[#0B0C20]/40 rounded-[10px] shadow-md text-white px-4 py-6 w-[100%]
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
        <div className=" h-[180px] w-[180px] bg-[#2EB2FF] rounded-full px-5 flex items-center justify-center">
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
            <h2>Complete Assignment</h2>
            <span>{user?.assignment?.length || 0}</span>
          </div>
          <div className=" my-3">
            <h2>Incomplete Assignment</h2>
            <span>{totalAssignments - (user?.assignment?.length || 0)}</span>
          </div>
          <div>
            <h2>Total Assignment</h2>
            <span>{totalAssignments || 0}</span>
          </div>
        </div>
        {/* ------- */}
      </div>
      {/* content */}
    </div>
  );
};

export default AssignmentChart;
