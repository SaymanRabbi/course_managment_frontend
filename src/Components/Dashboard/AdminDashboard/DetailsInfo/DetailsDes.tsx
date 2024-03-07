import { BiSolidVideos } from "react-icons/bi";
import { PiNotepadFill } from "react-icons/pi";
import { MdQuiz } from "react-icons/md";
import { courseInfo } from "../../../../dummyData/DummyData";
import DynamicHedding from "../../../DynamicHedding/DynamicHedding";
const DetailsDes = () => {
  return (
    <>
      <div className="text-textSecondary mt-8">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          blanditiis adipisci cumque similique nobis ducimus vel itaque incidunt
          inventore sequi, repudiandae eaque modi placeat enim repellat ea
          cupiditate sed tenetur!
        </p>
      </div>
      <DynamicHedding><h4 className="text-textPrimary mt-8 text-lg">Course Info</h4></DynamicHedding>
      <div className="h-[350px] overflow-y-scroll px-8">
        <div className="flex gap-4 text-textPrimary mt-8 relative">
          <div className="w-[2px] bg-white"></div>
          <div>
            {courseInfo.map((item) => {
              return (
                <div className="mb-6">
                  <div className="h-5 w-5 rounded-full bg-textPrimary absolute text-red-950 ml-[-27px] text-center text-sm">
                    {item.moduleNo}
                  </div>
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <div className="flex items-center gap-2">
                    <BiSolidVideos />
                    <p>{item.videos}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <PiNotepadFill />
                    <p>{item.assignment}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MdQuiz />
                    <p>{item.quizes}</p>
                  </div>
                  <div className="mt-3 md:flex items-center gap-4">
                    <p className="border border-textSecondary px-4 py-1 rounded-full mb-2">
                      topic name
                    </p>
                    <p className="border border-textSecondary px-4 py-1 rounded-full mb-2">
                      topic name
                    </p>
                    <p className="border border-textSecondary px-4 py-1 rounded-full mb-2">
                      topic name
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsDes;
