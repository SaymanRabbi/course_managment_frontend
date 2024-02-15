import { HiUsers } from "react-icons/hi2";
import { manageroles } from "../../../dummyData/DummyData";
import DashboardCard from "../DashboardCard";

const ManageRole = () => {
  return (
    <DashboardCard title="Manage Roles">
      <div className=" grid grid-cols-12">
        <div className=" col-span-12">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left ">
              <thead className=" font-bold text-textPrimary text-[16px]">
                <tr>
                  <th scope="col" className="px-6 py-3 rounded-s-lg">
                    image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 rounded-e-lg">
                    Designation
                  </th>
                  <th scope="col" className="px-6 py-3 rounded-e-lg">Role Change</th>
                </tr>
              </thead>
              <tbody>
                {manageroles.map((item, index) => (
                  <tr className="text-textPrimary" key={index}>
                    <td className="px-6 py-4">
                      <img className="h-12" src={item.img} alt="" />
                    </td>
                    <td className="px-6 py-4">
                      <p>{item.name}</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <HiUsers />
                        <p>{item.designation}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className=" ">
                        <button className="flex items-center gap-2 bg-gradient-to-r from-rgbFrom to-rgbTo px-10 py-2 rounded-md my-2">
                          <span>Make Admin</span>
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

export default ManageRole;
