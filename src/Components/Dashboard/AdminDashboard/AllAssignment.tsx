import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useUserStore } from "../../../Store/UserStore";
import DashboardCard from "../DashboardCard";

const AllAssignment = () => {
  const [search, setSearch] = useState("");
  const { getAllAssignments, allAssignments } = useUserStore((state) => state);
  const [filteredAssignments, setFilteredAssignments] =
    useState(allAssignments);

  useEffect(() => {
    const fetchAssignments = async () => {
      getAllAssignments();
    };
    fetchAssignments();
  }, []);

  useEffect(() => {
    if (search === "") {
      setFilteredAssignments(allAssignments);
    } else {
      setFilteredAssignments(
        allAssignments.filter((item: any) =>
          item?.userId?.email.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, allAssignments]);
  return (
    <DashboardCard title="All Assignments" className=" relative">
      <div className=" absolute top-[5%] right-[4%]">
        {/* search func */}
        <input
          type="text"
          placeholder="Search by email"
          className=" w-[300px] h-[40px] border border-[#ccc] rounded-md px-4 py-1  outline-none"
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* search func */}
      </div>
      <div className=" grid grid-cols-12">
        <div className=" col-span-12">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left ">
              <thead className=" font-bold text-textPrimary text-[16px]">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    User Photo
                  </th>
                  <th scope="col" className="px-6 py-3 rounded-s-lg">
                    User Email
                  </th>
                  <th scope="col" className="px-6 py-3 rounded-e-lg">
                    Assignment Name
                  </th>

                  <th scope="col" className="px-6 py-3 rounded-e-lg">
                    See Details
                  </th>
                </tr>
              </thead>
              <tbody className=" w-[100%]">
                {filteredAssignments?.length === 0 ? (
                  <div className=" w-[100%] flex justify-center">
                    <p
                      className=" text-center text-error  mt-3 font-bold text-[20px]
                    w-[100%]
                  "
                    >
                      Not Found Anything!
                    </p>
                  </div>
                ) : (
                  filteredAssignments?.map((item: any, index: any) => (
                    <tr className=" text-textPrimary" key={index}>
                      <td className="px-6 py-4">
                        <img
                          src={item?.userId?.ProfileImage}
                          className=" w-[40px] h-[40px] rounded-full object-cover"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <p className="font-semibold">{item?.userId?.email}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="font-semibold">{item?.AssignmentName}</p>
                      </td>
                      <td className="px-6 py-4">
                        {item?.adminSeen ? (
                          <button
                            className="bg-gray-500 text-[#fff] px-4 py-1 rounded-md"
                            disabled
                          >
                            Seen
                          </button>
                        ) : (
                          <Link
                            to={`/dashboard/assignment-details/${item?._id}`}
                          >
                            <button className="bg-gradient-to-r from-rgbFrom to-rgbTo text-[#fff] px-4 py-1 rounded-md">
                              See Details
                            </button>
                          </Link>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardCard>
  );
};

export default AllAssignment;
