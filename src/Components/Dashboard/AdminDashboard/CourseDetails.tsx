import { useEffect } from "react";
import { GiBuyCard } from "react-icons/gi";
import { GrUserManager } from "react-icons/gr";

import { useUserStore } from "../../../Store/UserStore";
import DynamicHedding from "../../DynamicHedding/DynamicHedding";
import ButtonPages from "./ButtonPages";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
interface Review {
  rating: number;
}
const CourseDetails = () => {
  const { courses, insTructor, getInstructor, allusers } = useUserStore(
    (state: any) => state
  );
  useEffect(() => {
    getInstructor(courses[0]?.teacherID);
  }, [courses[0]?.teacherID]);
  const getStarRating = (reviews: Review[]) => {
    if (!reviews || reviews.length === 0) return { stars: [], rating: 0 };

    // Calculate average rating
    const total = reviews.reduce((acc: any, item: any) => acc + item.rating, 0);
    const averageRating = Number((total / reviews.length).toFixed(1));

    // Round to the nearest half
    const roundedRating = Math.round(averageRating * 2) / 2;

    // Generate stars
    const fullStars = Math.floor(roundedRating);
    const halfStar = roundedRating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    const stars = [
      ...Array(fullStars).fill(<IoStar />),
      ...(halfStar ? [<IoStarHalf />] : []),
      ...Array(emptyStars).fill(<IoStarOutline />),
    ];

    return { stars, rating: roundedRating };
  };
  const { stars } = getStarRating(courses[0]?.reviews);
  return (
    <div className=" mt-[130px] md:w-[70%] mx-auto px-[20px]">
      <img
        className="min-h-[100%] min-w-[100%] max-w-[100%] max-h-[430px]  rounded-[10px] object-cover"
        src={courses[0]?.image}
        alt=""
      />
      <div>
        <DynamicHedding>
          <h2 className="mt-2 font-bold text-3xl text-textPrimary">
            {courses[0]?.title}
          </h2>
        </DynamicHedding>
        <div className="text-textPrimary md:flex items-center gap-8">
          <div className="flex items-center gap-2">
            <GiBuyCard className="" />
            <p>{allusers?.length || 0} Students</p>
          </div>
          <div className="flex items-center gap-2">
            <GrUserManager />
            <p>Author - {insTructor?.name}</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 text-rgbTo">
              <div className="flex items-center gap-1">
                {stars.map((star: any, index: any) => (
                  <span key={index} className=" text-[20px]">
                    {star}
                  </span>
                ))}
              </div>
            </div>
            <div>({courses[0]?.reviews?.length})</div>
          </div>
        </div>
      </div>
      <div className="text-textPrimary mt-4">
        <p>{courses[0]?.description}</p>
      </div>
      <ButtonPages insTructor={insTructor} />
    </div>
  );
};

export default CourseDetails;
