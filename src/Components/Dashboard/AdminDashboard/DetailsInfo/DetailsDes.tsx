import { BiSolidVideos } from "react-icons/bi";
import { MdQuiz } from "react-icons/md";
import { PiNotepadFill } from "react-icons/pi";
import { useUserStore } from "../../../../Store/UserStore";
import DynamicHedding from "../../../DynamicHedding/DynamicHedding";

const DetailsDes = () => {
  const { courses } = useUserStore((state: any) => state);
  return (
    <>
      <div className="text-textSecondary mt-8"></div>
      <DynamicHedding>
        <h4 className="text-textPrimary mt-8 text-lg">Course Info</h4>
      </DynamicHedding>
      <div className="h-[350px] overflow-y-scroll px-8">
        <div className="flex gap-4 text-textPrimary mt-8 relative">
          <div className="w-[2px] bg-white"></div>
          <div>
            {courses[0]?.modules.map((module: any, moduleIndex: number) => (
              <div className="mb-6" key={module._id}>
                <div className="h-5 w-5 rounded-full bg-textPrimary absolute text-red-950 ml-[-27px] text-center text-sm">
                  {moduleIndex + 1}
                </div>
                <h4 className="text-lg font-semibold">{module?.title}</h4>
                <div className="flex items-center gap-2">
                  <BiSolidVideos />
                  <p>
                    {
                      module.lessons.filter(
                        (lesson: any) => lesson.type === "video"
                      ).length
                    }{" "}
                    videos
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <MdQuiz />
                  <p>
                    {
                      module.lessons.filter(
                        (lesson: any) => lesson.type === "quiz"
                      ).length
                    }{" "}
                    quizzes
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <PiNotepadFill />
                  <p>
                    {
                      module.lessons.filter(
                        (lesson: any) => lesson.type === "assignment"
                      ).length
                    }{" "}
                    assignments
                  </p>
                </div>
                {module.lessons.map((lesson: any, lessonIndex: number) => (
                  <div
                    key={lessonIndex}
                    className="mt-3 md:flex items-center gap-4"
                  >
                    <p className="border border-textSecondary px-4 py-1 rounded-full mb-2">
                      {/* Display additional details based on lesson type */}
                      {lesson.type === "video" && `Video: ${lesson.title}`}
                      {lesson.type === "quiz" && `Quiz: ${lesson.title}`}
                      {lesson.type === "assignment" &&
                        `Assignment: ${lesson.title}`}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsDes;
