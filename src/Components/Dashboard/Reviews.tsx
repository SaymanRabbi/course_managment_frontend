import DashboardCard from "./DashboardCard";
import { ReviewData } from "../../dummyData/DummyData";
import { IoStar } from "react-icons/io5";
import { FaRegPenToSquare } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";

const Reviews = () => {
  const reviewButton = [
    {
      icon: <FaRegPenToSquare className="text-[20px] " />,
      text: "Edit",
    },
    {
      icon: <FaRegTrashCan className="text-[20px] " />,
      text: "Delete",
    },
  ];
  return (
    <DashboardCard title="Reviews">
      <div className=" grid grid-cols-12">
        <div className=" col-span-12">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left ">
              <thead className=" font-bold text-textPrimary text-[16px]">
                <tr>
                  <th scope="col" className="px-6 py-3 rounded-s-lg">
                    Course Title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Review
                  </th>
                  <th scope="col" className="px-6 py-3 rounded-e-lg"></th>
                </tr>
              </thead>
              <tbody>
                {ReviewData.map((item, index) => (
                  <tr className=" text-textPrimary" key={index}>
                    <td className="px-6 py-4">{item.name}</td>
                    <td className="px-6 py-4 flex gap-x-1 font-bold items-center">
                      {[...Array(item.rating)].map((_, i) => {
                        return (
                          <span key={i}>
                            {i < item.rating ? (
                              <IoStar className="text-rgbTo" />
                            ) : (
                              <IoStar className="text-textSecondary" />
                            )}
                          </span>
                        );
                      })}
                      {item.rating < 5 ? <h2>Good</h2> : <h2>Excellent</h2>}
                    </td>
                    <td className="px-6 py-4">
                      <div className=" flex items-center gap-3">
                        {reviewButton.map((item, index) => (
                          <button
                            className=" flex font-bold gap-1 
                            hover:text-rgbTo hover:underline transition duration-300 ease-in-out
                            "
                            key={index}
                          >
                            <span>{item.icon}</span>

                            {item.text}
                          </button>
                        ))}
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

export default Reviews;
