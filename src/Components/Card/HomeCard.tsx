import img from "../../../public/images/card/rnext-thumb.png";
import { FiVideo } from "react-icons/fi";
import { AiTwotoneExclamationCircle } from "react-icons/ai";

const HomeCard = () => {
  const data = [
    {
      name: "React Next",
    },
    {
      name: "React Next",
    },
  ];
  return (
    <>
      {data.map((item, index) => {
        return (
          <div className="relative z-10 flex flex-col border-[.5px] border-bgPrimary p-4 bg-bgPrimary/20 rounded-[10px] w-full hover:scale-105 transition duration-700 ease-in-out">
            {/* Add your code here */}
            {/* ---image--- */}
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className=" relative min-h-[300px] w-[100%]">
                <img
                  src={img}
                  alt=""
                  className="absolute top-0 left-0 bottom-0 right-0 p-0 border-none m-auto block w-0 h-0 min-h-[100%] min-w-[100%] max-w-[100%] max-h-[100%] object-fill rounded-[10px]"
                />
              </div>
              {/* ---image--- */}
              {/* -------text for course */}
              <p className="mt-4 !text-center lg:text-left text-textSecondary">
                ডকুমেন্টেশন থেকে রিয়্যাক্ট ও নেক্সট জে.এস-এর মৌলিক ও আবশ্যিক
                বিষয়সমূহ বুঝার পাশাপাশি এই কোর্সের প্রজেক্ট ভিত্তিক শেখানোর
                পদ্ধতি আপনাকে একজন দক্ষ রিয়্যাক্ট ফ্রন্ট-এন্ড ডেভেলপার হয়ে উঠতে
                সাহায্য করবে বলে আমাদের বিশ্বাস।
              </p>
              {/* -------text for course */}
              <div className="mt-6 flex flex-col justify-center gap-4 lg:max-0 lg:flex-row"></div>
              <div className="w-full space-y-4 text-center">
                <div className=" flex justify-center">
                  <button className=" text-textSecondary flex border-[.5px] border-bgPrimary rounded-[30px] px-[20px] py-[10px] gap-x-3 hover:bg-bgPrimary/80 transition duration-700 ease-in-out">
                    <FiVideo className="text-2xl" />
                    Course Details
                  </button>
                </div>
                <div className="mt-3 flex w-full justify-center">
                  {/* show some text is that available or not */}
                  <div className="flex space-x-1 text-sm text-textSecondary items-center">
                    <AiTwotoneExclamationCircle className="text-[20px]" />
                    <p>
                      কোর্সে এনরোল করার সময় শেষ হয়ে গিয়েছে, আপনি এখন এনরোল করতে
                      পারবেন না।
                    </p>
                  </div>
                  {/* show some text is that available or not */}
                </div>
              </div>
            </div>{" "}
          </div>
        );
      })}
    </>
  );
};

export default HomeCard;
