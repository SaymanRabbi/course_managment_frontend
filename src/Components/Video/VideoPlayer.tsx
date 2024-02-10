import ReactPlayer from "react-player";
import Container from "../Container/Container";
import { BiSearch } from "react-icons/bi";
import { FaCheck } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { Link } from "react-router-dom";
import { dummyData } from "../../dummyData/DummyData";

const VideoPlayer = () => {
  const [moduleIndex, setmoduleIndex] = useState(
    JSON.parse(localStorage.getItem("ind") || "{}").moduleIndex || 0
  );
  const [index, setIndex] = useState(
    JSON.parse(localStorage.getItem("ind") || "{}").videoindex || 0
  );
  const [video, setVideo] = useState(dummyData[moduleIndex].module[index].url);

  const ChangesVideoUrl = (module: any, ind: any, videoIndx: number) => {
    setVideo(module.url);
    setIndex(videoIndx);
    setmoduleIndex(ind);
    localStorage.setItem(
      "ind",
      JSON.stringify({ moduleIndex: ind, videoindex: videoIndx })
    );
  };
  useEffect(() => {}, [video, setVideo, dummyData]);
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
            <h2 className=" w-[40%]">Running Module :01</h2>
            <div className=" flex items-center gap-x-2 w-[60%]">
              <div className=" w-[100%] bg-gradient-to-r from-rgbFrom to-rgbTo h-[10px] rounded-md"></div>
              <h2>9/9</h2>
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
            {dummyData.map((data, ind) => (
              <div
                className=" bg-bgPrimary p-3 rounded mt-4 w-[100%] overflow-hidden"
                key={ind}
              >
                <h2 className=" text-textPrimary">
                  <span className=" font-bold">01 :</span> {data.name}
                </h2>
                {/* video */}
                {data.module.map((module, i) =>
                  module.type === "video" ? (
                    <div
                      className={`mt-2 flex w-[100%] cursor-pointer rounded py-2 ${
                        index === i && moduleIndex === ind ? " bg-rgbTo" : ""
                      }`}
                      key={i}
                      onClick={() => ChangesVideoUrl(module, ind, i)}
                    >
                      <FaCheck className=" text-success text-[30px] w-[10%]" />
                      <h2 className=" text-textPrimary ml-2 w-[80%]">
                        {module.name}
                      </h2>
                    </div>
                  ) : module.type === "quiz" ? (
                    <div>
                      <Link
                        to={`/dashboard/quiz/${module.id}`}
                        className={`mt-2 flex w-[100%] cursor-pointer rounded py-2 
                      `}
                      >
                        <MdOutlineQuestionAnswer className=" text-success text-[30px] w-[10%]" />
                        <h2 className=" text-textPrimary ml-2 w-[80%]">
                          {module.name}
                        </h2>
                      </Link>
                    </div>
                  ) : (
                    ""
                  )
                )}
              </div>
            ))}

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
