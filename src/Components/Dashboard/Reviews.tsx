import { useState } from "react";
import DashboardCard from "./DashboardCard";
// import { FaRegPenToSquare } from "react-icons/fa6";
// import { FaRegTrashCan } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import Button from "../Button/Button";
import toast from "react-hot-toast";
import { useUserStore } from "../../Store/UserStore";

const Reviews = () => {
  const { addReview } = useUserStore((state) => state);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const handleRatingClick = (index: any) => {
    setRating(index + 1);
  };
  const handleSubmitReview = async (e: any) => {
    e.preventDefault();

    if (rating === 0) {
      return toast.error("Please Select Rating");
    }
    if (review === "") {
      return toast.error("Please Write Review");
    }

    e.target.reset();
    setRating(0);
    toast.success("Review Submitted Successfully");
    addReview(rating - 1, review);
  };
  return (
    <DashboardCard title="Reviews">
      {/* Rating */}
      <form onSubmit={handleSubmitReview} className=" mt-3">
        <div>
          <p className=" text-[16px] text-yellow-500 font-bold">Your Rating</p>
          <div className=" flex gap-2 mt-3">
            {
              // Rating
              [1, 2, 3, 4, 5].map((index) => (
                <FaStar
                  key={index}
                  onClick={() => handleRatingClick(index)}
                  className={`text-2xl cursor-pointer font-bold ${
                    index < rating ? "text-yellow-500" : "text-gray-300"
                  }`}
                />
              ))
            }
          </div>
        </div>
        {/* Rating */}
        {/* review box */}
        <div className=" mt-4">
          <textarea
            className=" primary_input text-gray-400 resize-none font-bold"
            name="answer"
            rows={3}
            placeholder="Write Your Review Here..."
            onChange={(e: any) => setReview(e?.target?.value)}
          />
        </div>
        {/* review box */}
        {/* submit button */}
        <div className=" mt-3">
          <Button
            className="w-[30%]  bg-gradient-to-r from-rgbFrom to-rgbTo"
            type="submit"
          >
            Submit Review
          </Button>
        </div>
      </form>
      {/* submit button */}
    </DashboardCard>
  );
};

export default Reviews;
