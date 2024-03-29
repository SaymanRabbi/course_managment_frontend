import { useEffect } from "react";
import { useUserStore } from "../../Store/UserStore";
import DashboardCard from "./DashboardCard";

const Assignments = () => {
  const { getAssignmentswithID, assignments } = useUserStore((state) => state);

  useEffect(() => {
    const fetchAssignments = async () => {
      await getAssignmentswithID();
    };
    fetchAssignments();
  }, []);
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
                    Your Mark
                  </th>
                  <th scope="col" className="px-6 py-3 rounded-e-lg"></th>
                </tr>
              </thead>
              <tbody>
                {assignments?.map((item: any, index: any) => (
                  <tr className=" text-textPrimary" key={index}>
                    <td className="px-6 py-4">
                      <p className="font-semibold">{item?.AssignmentName}</p>
                    </td>
                    {!item?.adminSeen ? (
                      <>
                        <td className="px-6 py-4 text-error">In Progress</td>
                        <td className="px-6 py-4 text-error">In Progress</td>
                      </>
                    ) : (
                      <>
                        <td className="px-6 py-4">60</td>
                        <td className="px-6 py-4">{item?.AssignmentMarks}</td>
                      </>
                    )}
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
