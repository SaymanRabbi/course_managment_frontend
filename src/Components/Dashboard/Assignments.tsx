import DashboardCard from "./DashboardCard";
import { AssignmentsData } from "../../dummyData/DummyData";
import { FaRegPenToSquare } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { IoMdDownload } from "react-icons/io";

const Assignments = () => {
  return (
    <DashboardCard title="Assignments">
      <div className=" grid grid-cols-12">
        <div className=" col-span-12">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left ">
              <thead className=" font-bold text-textPrimary text-[16px]">
                <tr>
                  <th scope="col" className="px-6 py-3 rounded-s-lg">
                    Assignment Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total Marks
                  </th>
                  <th scope="col" className="px-6 py-3 rounded-e-lg">
                    Total Submit
                  </th>
                  <th scope="col" className="px-6 py-3 rounded-e-lg"></th>
                </tr>
              </thead>
              <tbody>
                {AssignmentsData.map((item, index) => (
                  <tr className=" text-textPrimary" key={index}>
                    <td className="px-6 py-4">
                      <p className="font-semibold">{item.title}</p>
                      <p>{item.courseName}</p>
                    </td>
                    <td className="px-6 py-4">{item.marks}</td>
                    <td className="px-6 py-4">{item.submit}</td>
                    <td className="px-6 py-4">
                      <div className=" ">
                        <button className="flex items-center gap-2 bg-gradient-to-r from-rgbFrom to-rgbTo px-12 py-1 rounded-md my-2">
                          <FaRegPenToSquare className="text-[15px]" />
                          <span>Edit</span>
                        </button>
                        <button className="flex items-center gap-2 bg-pink-700 px-9 py-1 rounded-md">
                          <IoIosSend className="text-[15px] " />
                          <span>Submit</span>
                        </button>
                        <button className="flex items-center gap-2 bg-gradient-to-r from-rgbFrom to-rgbTo px-7 py-1 rounded-md my-2">
                          <IoMdDownload className="text-[15px] " />
                          <span>Download</span>
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

export default Assignments;
