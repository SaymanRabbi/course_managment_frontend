import DashboardCard from "./DashboardCard";

import { useUserStore } from "../../Store/UserStore";

const QuizAttempts = () => {
  const { user } = useUserStore((state) => state);

  return (
    <DashboardCard title="My Quiz Attempts">
      <div className=" grid grid-cols-12">
        <div className=" col-span-12">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left ">
              <thead className=" font-bold text-textPrimary text-[16px]">
                <tr>
                  <th scope="col" className="px-6 py-3 rounded-s-lg">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total Questions
                  </th>
                  <th scope="col" className="px-6 py-3 rounded-e-lg">
                    Score Avg
                  </th>
                  <th scope="col" className="px-6 py-3 rounded-e-lg">
                    Reasut
                  </th>
                  <th scope="col" className="px-6 py-3 rounded-e-lg"></th>
                </tr>
              </thead>
              <tbody>
                {user?.quizs?.length &&
                  user?.quizs.map((item, index) => (
                    <tr className=" text-textPrimary" key={index}>
                      <td className="px-6 py-4">
                        <p>{item.title}</p>
                      </td>
                      <td className="px-6 py-4">
                        {" "}
                        <p>{item.quizLength}</p>
                      </td>
                      <td className="px-6 py-4">{item.score.toFixed(2)}</td>
                      <td className="px-6 py-4">
                        {" "}
                        {(item.score * 100) / item.quizLength > 60 ? (
                          <span className="text-green-500 font-bold">Pass</span>
                        ) : (
                          <span className="text-red-500 font-bold">Fail</span>
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardCard>
  );
};

export default QuizAttempts;
