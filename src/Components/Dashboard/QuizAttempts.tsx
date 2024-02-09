import DashboardCard from "./DashboardCard";
import { QuizData } from "../../dummyData/DummyData";
import { FaRegEye } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const QuizAttempts = () => {
  return (
    <DashboardCard title="My Quiz Attempts">
      <div className=" grid grid-cols-12">
        <div className=" col-span-12">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left ">
              <thead className=" font-bold text-textPrimary text-[16px]">
                <tr>
                  <th scope="col" className="px-6 py-3 rounded-s-lg">
                    Quiz
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Qus
                  </th>
                  <th scope="col" className="px-6 py-3 rounded-e-lg">
                    TM
                  </th>
                  <th scope="col" className="px-6 py-3 rounded-e-lg">
                    CA
                  </th>
                  <th scope="col" className="px-6 py-3 rounded-e-lg">
                    Reasut
                  </th>
                  <th scope="col" className="px-6 py-3 rounded-e-lg"></th>
                </tr>
              </thead>
              <tbody>
                {QuizData.map((item, index) => (
                  <tr className=" text-textPrimary" key={index}>
                    <td className="px-6 py-4">
                      <p>{item.date}</p>
                      <p>{item.des}</p>
                      <p>{item.name}</p>
                    </td>
                    <td className="px-6 py-4">{item.qus}</td>
                    <td className="px-6 py-4">{item.tm}</td>
                    <td className="px-6 py-4">{item.ca}</td>
                    <td className={`px-6 py-4 ${item.res === 'cancel' ? 'text-red-500' : item.res === 'over' ? 'text-blue-500' : item.res === 'pass' ? 'text-green-500' : ''}`}>{item.res}</td>
                    <td className="px-6 py-4">
                      <div className=" ">
                        <button className="flex items-center gap-2 bg-gradient-to-r from-rgbFrom to-rgbTo px-10 py-2 rounded-md my-2">
                          <FaRegEye className="text-[20px]" />
                          <span>view</span>
                        </button>
                          <button className="flex items-center gap-2 bg-pink-700 px-9 py-2 rounded-md">
                            <RiDeleteBin6Line className="text-[20px] " />
                            <span>Delete</span>
                          </button>
                      </div>
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
