import { Line } from "rc-progress";
import { IoStar } from "react-icons/io5";
import { useUserStore } from "../../../../Store/UserStore";
const DetailsReviews = () => {
  const { courses } = useUserStore((state) => state);
  const ratingCounts = [0, 0, 0, 0, 0]; // Array to store counts for ratings 1 to 5

  courses[0]?.reviews?.forEach((review: any) => {
    // Increment the count for the corresponding rating level
    ratingCounts[review.rating - 1]++;
  });
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-textPrimary mt-8">
      <div>
        <p className="text-6xl font-bold">
          {/* avg review */}
          {(
            courses[0]?.reviews?.reduce(
              (acc: any, item: any) => acc + item.rating,
              0
            ) / courses[0]?.reviews?.length
          ).toFixed(1)}
          {/* avg review */}
        </p>
        <div className="flex items-center gap-2 text-rgbTo my-2">
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
        </div>
        <p>{courses[0]?.reviews?.length} Reviews</p>
      </div>
      <div>
        {/* Display each rating level with its count and progress bar */}
        {[5, 4, 3, 2, 1].map((rating, index) => (
          <div key={index} className="flex items-center gap-4">
            <p className="text-lg">{rating}</p>
            <IoStar className="text-[#945BEF]" size={25} />
            <Line
              percent={
                (ratingCounts[rating - 1] / courses[0]?.reviews?.length) * 100
              }
              strokeWidth={2}
              trailWidth={2}
              strokeColor="#945BEF"
            />
            <p className="text-lg">{ratingCounts[rating - 1]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsReviews;
