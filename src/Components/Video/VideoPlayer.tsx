import ReactPlayer from "react-player";
import Container from "../Container/Container";
import { BiSearch } from "react-icons/bi";
import { CiVideoOn } from "react-icons/ci";
import { useEffect, useState } from "react";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { Link } from "react-router-dom";
import { dummyData } from "../../dummyData/DummyData";
import { useUserStore } from "../../Store/UserStore";
import { MdAssignment } from "react-icons/md";

const VideoPlayer = () => {
  const [moduleIndex, setmoduleIndex] = useState(
    JSON.parse(localStorage.getItem("ind") || "{}").moduleIndex || 0
  );
  const [index, setIndex] = useState(
    JSON.parse(localStorage.getItem("ind") || "{}").videoindex || 0
  );
  const { courses, getCourses, courseId } = useUserStore((state) => state);

  const [video, setVideo] = useState(
    courses[0]?.modules[moduleIndex].lessons[index].url
  );
  const ChangesVideoUrl = (module: any, ind: any, videoIndx: number) => {
    setVideo(module.url);
    setIndex(videoIndx);
    setmoduleIndex(ind);
    localStorage.setItem(
      "ind",
      JSON.stringify({ moduleIndex: ind, videoindex: videoIndx })
    );
  };
  useEffect(() => {
    const getCourse = async () => {
      await getCourses();
    };
    getCourse();
  }, [video, setVideo, dummyData]);

  return (
    <Container>
      <div className=" pt-[200px] w-[95%] lg:w-[90%] mx-auto grid-cols-12 grid gap-x-6 ">
        <div
          className=" lg:col-span-7  col-span-12  bg-bgPrimary/10 rounded-md   
        lg:h-[80%] h-[100%] relative  p-4 w-[100%]"
        >
          <ReactPlayer
            url={video}
            controls
            width="100%"
            height="100%"
            config={{
              file: {
                attributes: {
                  controlsList: "nodownload",
                },
              },
            }}
          />
        </div>
        {/* -------module name---- */}
        <div className="lg:col-span-5 col-span-12 mt-6 md:mt-0">
          {/* ----heading--- */}
          <div className=" flex text-textPrimary font-bold gap-4 items-center w-[100%]  md:mt-0">
            <h2 className=" w-[40%]">Running Module : {courses.length}</h2>
            <div className=" flex items-center gap-x-2 w-[60%]">
              <div className=" w-[100%] bg-gradient-to-r from-rgbFrom to-rgbTo h-[10px] rounded-md"></div>
              <h2>{courses.length}/9</h2>
            </div>
          </div>
          {/* ----heading--- */}
          {/* Module Name----- */}
          <div className=" w-[100%] px-3 mt-3 overflow-y-auto max-h-[550px] h-[100%]  rounded-md p-3">
            {/* -----search--- */}
            <div className=" w-[100%] bg-bgPrimary rounded relative">
              <BiSearch className=" absolute top-1/2 left-2 transform -translate-y-1/2 text-textPrimary  font-bold" />
              <input
                type="text"
                name=""
                id=""
                className=" w-[100%] rounded py-3 px-8 bg-transparent outline-none border-none text-textPrimary"
                placeholder="Search Module"
              />
            </div>
            {/* -----search--- */}
            {/* ----module list---- */}
            {courses?.map((data: any) =>
              data.modules.map((data: any, ind: any) => (
                <div
                  className=" bg-bgPrimary p-3 rounded mt-4 w-[100%] overflow-hidden"
                  key={ind}
                >
                  <h2 className=" text-textPrimary">
                    <span className=" font-bold">01 :</span> {data?.title}
                  </h2>
                  {/* video */}
                  {data.lessons.map((module: any, i: any) =>
                    module.type === "video" ? (
                      <div
                        className={`mt-2 flex w-[100%] cursor-pointer rounded py-2 ${
                          index === i && moduleIndex === ind ? " bg-rgbTo" : ""
                        }`}
                        key={i}
                        onClick={() => ChangesVideoUrl(module, ind, i)}
                      >
                        <CiVideoOn
                          className={` text-[30px] w-[10%] font-[600] ${
                            index === i && moduleIndex === ind
                              ? "text-bgPrimary"
                              : " text-textSecondary"
                          }`}
                        />
                        <h2 className=" text-textPrimary ml-2 w-[80%]">
                          {module.title}
                        </h2>
                      </div>
                    ) : module.type === "quiz" ? (
                      <div>
                        <Link
                          to={`/dashboard/quiz/${data._id}`}
                          className={`mt-2 flex w-[100%] cursor-pointer rounded py-2 
                  `}
                        >
                          <MdOutlineQuestionAnswer
                            className={` text-[30px] w-[10%] font-[600] ${
                              index === i && moduleIndex === ind
                                ? "text-bgPrimary"
                                : " text-textSecondary"
                            }`}
                          />
                          <h2 className=" text-textPrimary ml-2 w-[80%]">
                            {module.title}
                          </h2>
                        </Link>
                      </div>
                    ) : module.type === "assignment" ? (
                      <Link
                        to={`/dashboard/assignment/${data._id}`}
                        className={`mt-2 flex w-[100%] cursor-pointer rounded py-2 
                  `}
                      >
                        <MdAssignment
                          className={` text-[30px] w-[10%] font-[600] ${
                            index === i && moduleIndex === ind
                              ? "text-bgPrimary"
                              : " text-textSecondary"
                          }`}
                        />
                        <h2 className=" text-textPrimary ml-2 w-[80%]">
                          {module.title}
                        </h2>
                      </Link>
                    ) : (
                      ""
                    )
                  )}
                </div>
              ))
            )}

            {/* ----module list---- */}
          </div>
          {/* Module Name----- */}
        </div>
        {/* -------module name---- */}
      </div>
    </Container>
  );
};

export default VideoPlayer;
