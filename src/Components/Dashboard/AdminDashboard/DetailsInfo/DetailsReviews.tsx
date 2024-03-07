import { Line } from "rc-progress";
import { IoStar } from "react-icons/io5";

const DetailsReviews = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-textPrimary mt-8">
      <div>
        <p className="text-6xl font-bold">5.0</p>
        <div className="flex items-center gap-2 text-rgbTo my-2">
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
        </div>
        <p>(17 Reviews)</p>
      </div>
      <div>
        <div className="flex items-center gap-4">
          <p className="text-lg">5</p>
          <IoStar className="text-[#945BEF]" size={25} />
          <Line
            percent={100}
            strokeWidth={2}
            trailWidth={2}
            strokeColor="#945BEF"
          />
          <p className="text-lg">10</p>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-lg">4</p>
          <IoStar className="text-[#945BEF]" size={25} />
          <Line
            percent={80}
            strokeWidth={2}
            trailWidth={2}
            strokeColor="#945BEF"
          />
          <p className="text-lg">5</p>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-lg">3</p>
          <IoStar className="text-[#945BEF]" size={25} />
          <Line
            percent={60}
            strokeWidth={2}
            trailWidth={2}
            strokeColor="#945BEF"
          />
          <p className="text-lg">3</p>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-lg">2</p>
          <IoStar className="text-[#945BEF]" size={25} />
          <Line
            percent={40}
            strokeWidth={2}
            trailWidth={2}
            strokeColor="#945BEF"
          />
          <p className="text-lg">2</p>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-lg">1</p>
          <IoStar className="text-[#945BEF]" size={25} />
          <Line
            percent={20}
            strokeWidth={2}
            trailWidth={2}
            strokeColor="#945BEF"
          />
          <p className="text-lg">1</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsReviews;
