import { useEffect, useMemo, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { CiVideoOn } from "react-icons/ci";
import { MdAssignment, MdOutlineQuestionAnswer } from "react-icons/md";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { useUserStore } from "../../Store/UserStore";
import Container from "../Container/Container";
import Modal from "./Modal";

const VideoPlayer = () => {
  const activeModuleRef = useRef<HTMLDivElement>(null);
  const parentDivRef = useRef<HTMLDivElement>(null);
  const [moduleIndex, setmoduleIndex] = useState(
    JSON.parse(localStorage.getItem("ind") || "{}").moduleIndex || 0
  );
  const [open, setOpen] = useState<boolean>(false);
  const [modalIndex, setModalIndex] = useState<number>(2);
  const [assignment, setAssignment] = useState<any>({});
  const [search, setSearch] = useState("");
  const [filterModule, setFilterModule] = useState([] as any);
  const [index, setIndex] = useState(
    JSON.parse(localStorage.getItem("ind") || "{}").videoindex || 0
  );
  const { courses, getCourses, updateProfileProgress } = useUserStore(
    (state) => state
  );

  const [video, setVideo] = useState(
    courses[0]?.modules[moduleIndex].lessons[index].url
  );
  useEffect(() => {
    if (moduleIndex !== undefined && index !== undefined) {
      const currentVideo =
        courses[0]?.modules[moduleIndex]?.lessons[index]?.url;
      setVideo(currentVideo);
    }
  }, [moduleIndex, index]);
  useEffect(() => {
    if (activeModuleRef.current && parentDivRef.current) {
      activeModuleRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [moduleIndex, index]);
  const ChangesVideoUrl = async (
    module: any,
    ind: any,
    videoIndx: number,
    data: any
  ) => {
    const lessonId = data._id;

    const title = module.title;
    await updateProfileProgress(lessonId, title);
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
  }, [video, setVideo, search]);
  // func to prev and next video

  const filteredModules = useMemo(() => {
    if (search) {
      return (
        courses[0]?.modules
          ?.map((data: any) => ({
            ...data,
            modules: data?.modules?.filter((module: any) =>
              module?.title?.toLowerCase()?.includes(search.toLowerCase())
            ),
          }))
          .filter((data: any) => data?.modules?.length > 0) || []
      );
    } else {
      return courses;
    }
  }, [search, courses]);
  useEffect(() => {
    setFilterModule(filteredModules);
  }, [filteredModules]);

  // useEffect to load the video where the user left off after window refresh
  const ModalIndex = (i: any, module: any) => {
    console.log(i);
    setOpen(true);
    setModalIndex(i);
    setAssignment(module);
  };
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
            height="93%"
            config={{
              file: {
                attributes: {
                  controlsList: "nodownload",
                },
              },
            }}
          />
          {/* button for next and previous video */}

          {/* button for next and previous video */}
        </div>
        {/* -------module name---- */}
        <div className="lg:col-span-5 col-span-12 mt-6 md:mt-0">
          {/* ----heading--- */}
          <div className=" flex text-textPrimary font-bold gap-4 items-center w-[100%]  md:mt-0">
            <h2 className=" w-[40%]">Running Module : {moduleIndex + 1}</h2>
            <div className=" flex items-center gap-x-2 w-[60%]">
              <div className=" w-[100%] bg-gradient-to-r from-rgbFrom to-rgbTo h-[10px] rounded-md"></div>
              <h2>{courses[0]?.modules?.length}/9</h2>
            </div>
          </div>
          {/* ----heading--- */}
          {/* Module Name----- */}
          <div className=" w-[100%] px-3 mt-3 overflow-y-auto max-h-[550px] h-[100%]  rounded-md p-3">
            {/* -----search--- */}
            <div className=" w-[100%] bg-bgPrimary rounded sticky top-[-3%]">
              <BiSearch className=" absolute top-1/2 left-2 transform -translate-y-1/2 text-textPrimary  font-bold" />
              <input
                type="text"
                name=""
                id=""
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className=" w-[100%] rounded py-3 px-8 bg-transparent outline-none border-none text-textPrimary"
                placeholder="Search Module"
              />
            </div>
            {/* -----search--- */}
            {/* ----module list---- */}
            {filterModule?.map((data: any) =>
              data?.modules?.map((data: any, ind: any) => (
                <div
                  className=" bg-bgPrimary p-3 rounded mt-4 w-[100%] overflow-hidden"
                  key={ind}
                  ref={parentDivRef}
                >
                  <h2 className=" text-textPrimary">
                    <span className=" font-bold">{ind + 1} :-</span>{" "}
                    {data?.title}
                  </h2>
                  {/* video */}
                  {data.lessons.map((module: any, i: any) =>
                    module.type === "video" ? (
                      <div
                        className={`mt-2 flex w-[100%] cursor-pointer rounded py-2 ${
                          index === i && moduleIndex === ind ? " bg-rgbTo" : ""
                        }`}
                        ref={
                          index === i && moduleIndex === ind
                            ? activeModuleRef
                            : null
                        }
                        key={i}
                        onClick={() => ChangesVideoUrl(module, ind, i, data)}
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
                            {module.title}{" "}
                            <span className=" text-rgbTo font-bold">
                              "Quiz"
                            </span>
                          </h2>
                        </Link>
                      </div>
                    ) : module.type === "assignment" ? (
                      <div>
                        <div
                          /* to={`/dashboard/assignment/${data._id}`} */
                          className={` flex w-[100%] cursor-pointer rounded py-2 
                        `}
                        >
                          <MdAssignment
                            className={` text-[30px] w-[10%] font-[600] ${
                              index === i && moduleIndex === ind
                                ? "text-bgPrimary"
                                : " text-textSecondary"
                            }`}
                          />
                          <div
                            className=" text-textPrimary ml-2 w-[80%]"
                            onClick={() => ModalIndex(i, module)}
                          >
                            {module.title}{" "}
                          </div>
                        </div>
                      </div>
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
      {open && assignment ? (
        <Modal modals={assignment} setOpen={setOpen} />
      ) : (
        ""
      )}
    </Container>
  );
};

export default VideoPlayer;
