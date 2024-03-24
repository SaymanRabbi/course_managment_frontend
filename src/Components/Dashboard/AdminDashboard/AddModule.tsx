import axios from "axios";
import { useState } from "react";
// import { FormData } from "../../../Types";
import toast from "react-hot-toast";
import { useUserStore } from "../../../Store/UserStore";
import { Video } from "../../../Types";
import Button from "../../Button/Button";
import DashboardCard from "../DashboardCard";
const AddModule = () => {
  const { addModule } = useUserStore((state) => state);
  const [formChange, setFormChange] = useState(0);
  const [title, setTitle] = useState("");
  const [video, setVideo] = useState<Video[]>([]);
  const [quiz, setQuiz] = useState({
    title: "",
    type: "quiz",
    isWatched: false,
    quizDetails: {
      questions: [],
    },
  });
  const [assignment, setAssignment] = useState({
    title: "",
    type: "assignment",
    isWatched: false,
    assignmentDetails: {},
  });
  const [quizIndex, setQuizIndex] = useState(1);

  const [loading, setLoading] = useState(false);
  const addQuiz = (e: any) => {
    e.preventDefault();
    const questionTitle = e.target.questionTitle.value;
    if (questionTitle === "" || questionTitle.length < 10) {
      return toast.error(
        "Please fill all the fields and question length should be greater than 10 characters"
      );
    }
    const option1Text = e.target.option1Text.value;
    const option2Text = e.target.option2Text.value;
    const option3Text = e.target.option3Text.value;
    const option4Text = e.target.option4Text.value;
    const option1Checkbox = e.target.option1Checkbox.checked;
    const option2Checkbox = e.target.option2Checkbox.checked;
    const option3Checkbox = e.target.option3Checkbox.checked;
    const option4Checkbox = e.target.option4Checkbox.checked;
    const CorrectAnswer = [
      option1Checkbox,
      option2Checkbox,
      option3Checkbox,
      option4Checkbox,
    ].filter((item) => item === true).length;
    if (CorrectAnswer !== 1) {
      return toast.error("Please select only one correct answer");
    }
    if (
      questionTitle === "" ||
      option1Text === "" ||
      option2Text === "" ||
      option3Text === "" ||
      option4Text === ""
    ) {
      return toast.error("Please fill all the fields");
    }
    const options = [
      { id: 1, text: option1Text, answer: option1Checkbox },
      { id: 2, text: option2Text, answer: option2Checkbox },
      { id: 3, text: option3Text, answer: option3Checkbox },
      { id: 4, text: option4Text, answer: option4Checkbox },
    ];
    setQuiz((prev: any) => ({
      ...prev,
      quizDetails: {
        ...prev?.quizDetails,
        title: prev.title,
        questions: [
          ...prev?.quizDetails?.questions,
          {
            id: quizIndex,
            title: questionTitle,
            options: options,
          },
        ],
      },
    }));
    e.target.reset();

    setQuizIndex((prev) => prev + 1);
  };
  // ------AddVideo Function------- //

  const addVideo = async (e: any) => {
    const dataform = new FormData();
    e.preventDefault();
    const videoTitle = e.target.videoTitle.value;
    const videoUrl = e.target.videoUrl.files[0];

    if (videoTitle === "" || videoTitle.length < 10) {
      return toast.error(
        "Please fill all the fields and title length should be greater than 10 characters"
      );
    }
    if (videoUrl === "") {
      return toast.error("Please Add Video File");
    }
    dataform.append("file", e.target.videoUrl.files[0]);
    try {
      setLoading(true);
      const api = "https://api.cloudinary.com/v1_1/dnr5u3jpb/video/upload";
      const uploadPreset = "byni9vwa";
      const res = await axios.post(api, dataform, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        params: {
          upload_preset: uploadPreset,
        },
      });
      const { secure_url } = res?.data;
      setVideo((prev) => [
        ...prev,
        { title: videoTitle, url: secure_url, type: "video", isWatched: false },
      ]);

      setLoading(false);
    } catch (error) {}
    e.target.reset();
  };

  // ------AddVideo Function------- //
  // module titel
  const moduleTitle = (e: any) => {
    e.preventDefault();
    const title = e.target.moduleTitle.value;
    if (title === "" || title.length < 10) {
      return toast.error(
        "Please fill all the fields and title length should be greater than 10 characters"
      );
    }
    setTitle(title);
    setFormChange(1);
  };
  // module titel
  // assignment

  const addAssignment = async (e: any) => {
    e.preventDefault();
    const assignmentTitle = e.target.assignmentTitle.value;
    const assignmentDeadLine = e.target.assignmentDeadLine.value;
    const instructions = e.target.assignmentInstructions.value;
    if (assignmentTitle === "" || assignmentTitle.length < 10) {
      return toast.error(
        "Please fill all the fields and title length should be greater than 10 characters"
      );
    }
    if (instructions === "") {
      return toast.error("Please Add Assignment instructions");
    }
    if (assignmentDeadLine === "") {
      return toast.error("Please Add Assignment Deadline");
    }

    setFormChange(9);
    // e.target.reset();
  };
  const PublishModule = async () => {
    setLoading(true);
    const data = {
      title,
      lessons: [...video, quiz, assignment],
    };
    await addModule(data);
    setLoading(false);
    toast.success("Module Added Successfully");
  };
  // assignment
  return (
    <DashboardCard title="Add Module">
      <div className="bg-bgPrimary md:px-[40px] py-[40px] rounded-[20px] px-[20px]">
        {/* module tittle */}
        {formChange === 0 && (
          <form
            onSubmit={(e) => {
              moduleTitle(e);
            }}
          >
            <input
              type="text"
              placeholder="Module Tittle"
              className="primary_input"
              name="moduleTitle"
            />

            <Button
              className="bg-gradient-to-r from-rgbFrom to-rgbTo"
              type="submit"
            >
              Next
            </Button>
          </form>
        )}
        {/* module tittle */}
        {/* ------module video------- */}
        {formChange === 1 && (
          <form
            onSubmit={(e) => {
              addVideo(e);
            }}
          >
            <input
              type="text"
              placeholder="Video Title"
              className="primary_input"
              name="videoTitle"
            />

            <input
              type="file"
              placeholder="Upload Video File"
              className="primary_input"
              name="videoUrl"
              accept="video/mp4"
            />
            <div className=" flex gap-x-6">
              <Button
                className="bg-gradient-to-r from-rgbFrom to-rgbTo"
                type="submit"
                disabled={loading}
              >
                {loading ? "Uploading..." : "Add More Video"}
              </Button>

              <Button
                className={`${
                  video.length === 0
                    ? "bg-gray-400"
                    : "bg-gradient-to-r from-rgbFrom to-rgbTo"
                }`}
                onClick={() => setFormChange(2)}
                disabled={video.length === 0}
              >
                Add Quiz
              </Button>
            </div>
          </form>
        )}
        {/* ------module video------- */}
        {/* -----quiz section------- */}
        {formChange === 2 && (
          <form>
            <input
              type="text"
              placeholder="Quiz Title"
              className="primary_input"
              onChange={(e) => {
                setQuiz((prev) => ({ ...prev, title: e.target.value }));
              }}
            />

            <div className=" flex gap-x-6">
              <Button
                className="bg-gradient-to-r from-rgbFrom to-rgbTo"
                onClick={() => setFormChange(8)}
              >
                Skip
              </Button>
              <Button
                className="bg-gradient-to-r from-rgbFrom to-rgbTo"
                onClick={() => setFormChange(3)}
              >
                Quiz Question
              </Button>
            </div>
          </form>
        )}
        {/* -----quiz section------- */}
        {/* quiz question */}
        {formChange === 3 && (
          <form onSubmit={(e) => addQuiz(e)}>
            <input
              type="text"
              placeholder="Question Title"
              className="primary_input"
              name="questionTitle"
              // onChange={(e) => {
              //   setQuiz((prev: any) => ({
              //     ...prev,
              //     quizDetails: {
              //       ...prev.quizDetails,
              //       questions: prev.quizDetails.questions.map(
              //         (question: any, index: any) =>
              //           index === quizIndex - 1
              //             ? {
              //                 ...question,
              //                 title: e.target.value,
              //                 id: quizIndex,
              //               }
              //             : question
              //       ),
              //     },
              //   }));
              // }}
            />
            {/* ------option part --------- */}
            <div className=" w-[100%]">
              <div className=" flex gap-x-4">
                <div className=" flex items-center gap-x-4  md:w-[50%] w-[100%]">
                  <input
                    type="checkbox"
                    name="option1Checkbox"
                    className=" h-[20px] w-[20px]"
                    // onChange={(e) => {
                    //   setQuiz((prev: any) => ({
                    //     ...prev,
                    //     quizDetails: {
                    //       ...prev.quizDetails,
                    //       questions: prev.quizDetails.questions.map(
                    //         (question: any, index: any) =>
                    //           index === quizIndex - 1
                    //             ? {
                    //                 ...question,
                    //                 options:
                    //                   question.options.length === 0 // Check if options are empty
                    //                     ? [
                    //                         {
                    //                           id: 1,
                    //                           text: "",
                    //                           answer: e.target.checked,
                    //                         },
                    //                         { id: 2, text: "", answer: false },
                    //                         { id: 3, text: "", answer: false },
                    //                         {
                    //                           id: 4,
                    //                           text: "",
                    //                           answer: false,
                    //                         },
                    //                       ]
                    //                     : question.options.map(
                    //                         (option: any, optionIndex: any) =>
                    //                           optionIndex === 0 // Update the third option
                    //                             ? {
                    //                                 ...option,
                    //                                 answer: e.target.checked,
                    //                               }
                    //                             : option
                    //                       ),
                    //               }
                    //             : question
                    //       ),
                    //     },
                    //   }));
                    // }}
                  />
                  <input
                    type="text"
                    placeholder="Option One"
                    className="primary_input"
                    name="option1Text"
                    // onChange={(e) => {
                    //   setQuiz((prev: any) => ({
                    //     ...prev,
                    //     quizDetails: {
                    //       ...prev.quizDetails,
                    //       questions: prev.quizDetails.questions.map(
                    //         (question: any, index: any) =>
                    //           index === quizIndex - 1
                    //             ? {
                    //                 ...question,
                    //                 options:
                    //                   question.options.length === 0 // Check if options are empty
                    //                     ? [
                    //                         {
                    //                           id: 1,
                    //                           text: e.target.value,
                    //                           answer: false,
                    //                         },
                    //                         { id: 2, text: "", answer: false },
                    //                         { id: 3, text: "", answer: false },
                    //                         {
                    //                           id: 4,
                    //                           text: "",
                    //                           answer: false,
                    //                         },
                    //                       ]
                    //                     : question.options.map(
                    //                         (option: any, optionIndex: any) =>
                    //                           optionIndex === 0 // Update the third option
                    //                             ? {
                    //                                 ...option,
                    //                                 text: e.target.value,
                    //                               }
                    //                             : option
                    //                       ),
                    //               }
                    //             : question
                    //       ),
                    //     },
                    //   }));
                    // }}
                  />
                </div>
                <div className=" flex items-center gap-x-4 md:w-[50%] w-[100%]">
                  <input
                    type="checkbox"
                    className=" h-[20px] w-[20px]"
                    name="option2Checkbox"
                    // onChange={(e) => {
                    //   setQuiz((prev: any) => ({
                    //     ...prev,
                    //     quizDetails: {
                    //       ...prev.quizDetails,
                    //       questions: prev.quizDetails.questions.map(
                    //         (question: any, index: any) =>
                    //           index === quizIndex - 1
                    //             ? {
                    //                 ...question,
                    //                 options:
                    //                   question.options.length === 0 // Check if options are empty
                    //                     ? [
                    //                         {
                    //                           id: 1,
                    //                           text: "",
                    //                           answer: false,
                    //                         },
                    //                         {
                    //                           id: 2,
                    //                           text: "",
                    //                           answer: e.target.checked,
                    //                         },
                    //                         { id: 3, text: "", answer: false },
                    //                         {
                    //                           id: 4,
                    //                           text: "",
                    //                           answer: false,
                    //                         },
                    //                       ]
                    //                     : question.options.map(
                    //                         (option: any, optionIndex: any) =>
                    //                           optionIndex === 1 // Update the third option
                    //                             ? {
                    //                                 ...option,
                    //                                 answer: e.target.checked,
                    //                               }
                    //                             : option
                    //                       ),
                    //               }
                    //             : question
                    //       ),
                    //     },
                    //   }));
                    // }}
                  />
                  <input
                    type="text"
                    placeholder="Option Tow"
                    className="primary_input"
                    name="option2Text"
                    // onChange={(e) => {
                    //   setQuiz((prev: any) => ({
                    //     ...prev,
                    //     quizDetails: {
                    //       ...prev.quizDetails,
                    //       questions: prev.quizDetails.questions.map(
                    //         (question: any, index: any) =>
                    //           index === quizIndex - 1
                    //             ? {
                    //                 ...question,
                    //                 options:
                    //                   question.options.length === 0 // Check if options are empty
                    //                     ? [
                    //                         { id: 1, text: "", answer: false },
                    //                         {
                    //                           id: 2,
                    //                           text: e.target.value,
                    //                           answer: false,
                    //                         },
                    //                         { id: 3, text: "", answer: false },
                    //                         { id: 4, text: "", answer: false },
                    //                       ]
                    //                     : question.options.map(
                    //                         (option: any, optionIndex: any) =>
                    //                           optionIndex === 1 // Update the third option
                    //                             ? {
                    //                                 ...option,
                    //                                 text: e.target.value,
                    //                               }
                    //                             : option
                    //                       ),
                    //               }
                    //             : question
                    //       ),
                    //     },
                    //   }));
                    // }}
                  />
                </div>
              </div>
              <div className=" flex gap-x-4">
                <div className=" flex items-center gap-x-4  md:w-[50%] w-[100%]">
                  <input
                    type="checkbox"
                    name="option3Checkbox"
                    className=" h-[20px] w-[20px]"
                    // onChange={(e) => {
                    //   setQuiz((prev: any) => ({
                    //     ...prev,
                    //     quizDetails: {
                    //       ...prev.quizDetails,
                    //       questions: prev.quizDetails.questions.map(
                    //         (question: any, index: any) =>
                    //           index === quizIndex - 1
                    //             ? {
                    //                 ...question,
                    //                 options:
                    //                   question.options.length === 0 // Check if options are empty
                    //                     ? [
                    //                         {
                    //                           id: 1,
                    //                           text: "",
                    //                           answer: false,
                    //                         },
                    //                         { id: 2, text: "", answer: false },
                    //                         {
                    //                           id: 3,
                    //                           text: "",
                    //                           answer: e.target.checked,
                    //                         },
                    //                         {
                    //                           id: 4,
                    //                           text: "",
                    //                           answer: false,
                    //                         },
                    //                       ]
                    //                     : question.options.map(
                    //                         (option: any, optionIndex: any) =>
                    //                           optionIndex === 2 // Update the third option
                    //                             ? {
                    //                                 ...option,
                    //                                 answer: e.target.checked,
                    //                               }
                    //                             : option
                    //                       ),
                    //               }
                    //             : question
                    //       ),
                    //     },
                    //   }));
                    // }}
                  />
                  <input
                    type="text"
                    placeholder="Option There"
                    className="primary_input"
                    name="option3Text"
                    // onChange={(e) => {
                    //   setQuiz((prev: any) => ({
                    //     ...prev,
                    //     quizDetails: {
                    //       ...prev.quizDetails,
                    //       questions: prev.quizDetails.questions.map(
                    //         (question: any, index: any) =>
                    //           index === quizIndex - 1
                    //             ? {
                    //                 ...question,
                    //                 options:
                    //                   question.options.length === 0 // Check if options are empty
                    //                     ? [
                    //                         {
                    //                           id: 1,
                    //                           text: "",
                    //                           answer: false,
                    //                         },
                    //                         { id: 2, text: "", answer: false },
                    //                         {
                    //                           id: 3,
                    //                           text: e.target.value,
                    //                           answer: false,
                    //                         },
                    //                         { id: 4, text: "", answer: false },
                    //                       ]
                    //                     : question.options.map(
                    //                         (option: any, optionIndex: any) =>
                    //                           optionIndex === 2 // Update the third option
                    //                             ? {
                    //                                 ...option,
                    //                                 text: e.target.value,
                    //                               }
                    //                             : option
                    //                       ),
                    //               }
                    //             : question
                    //       ),
                    //     },
                    //   }));
                    // }}
                  />
                </div>
                {/* option four */}
                <div className="flex items-center gap-x-4  md:w-[50%] w-[100%]">
                  <input
                    type="checkbox"
                    className=" h-[20px] w-[20px]"
                    name="option4Checkbox"
                    // onChange={(e) => {
                    //   setQuiz((prev: any) => ({
                    //     ...prev,
                    //     quizDetails: {
                    //       ...prev.quizDetails,
                    //       questions: prev.quizDetails.questions.map(
                    //         (question: any, index: any) =>
                    //           index === quizIndex - 1
                    //             ? {
                    //                 ...question,
                    //                 options:
                    //                   question.options.length === 0 // Check if options are empty
                    //                     ? [
                    //                         {
                    //                           id: 1,
                    //                           text: "",
                    //                           answer: false,
                    //                         },
                    //                         { id: 2, text: "", answer: false },
                    //                         { id: 3, text: "", answer: false },
                    //                         {
                    //                           id: 4,
                    //                           text: "",
                    //                           answer: e.target.checked,
                    //                         },
                    //                       ]
                    //                     : question.options.map(
                    //                         (option: any, optionIndex: any) =>
                    //                           optionIndex === 3 // Update the third option
                    //                             ? {
                    //                                 ...option,
                    //                                 answer: e.target.checked,
                    //                               }
                    //                             : option
                    //                       ),
                    //               }
                    //             : question
                    //       ),
                    //     },
                    //   }));
                    // }}
                  />
                  <input
                    type="text"
                    placeholder="Option Four"
                    className="primary_input"
                    name="option4Text"
                    // onChange={(e) => {
                    //   setQuiz((prev: any) => ({
                    //     ...prev,
                    //     quizDetails: {
                    //       ...prev.quizDetails,
                    //       questions: prev.quizDetails.questions.map(
                    //         (question: any, index: any) =>
                    //           index === quizIndex - 1
                    //             ? {
                    //                 ...question,
                    //                 options:
                    //                   question.options.length === 0 // Check if options are empty
                    //                     ? [
                    //                         {
                    //                           id: 1,
                    //                           text: "",
                    //                           answer: false,
                    //                         },
                    //                         { id: 2, text: "", answer: false },
                    //                         { id: 3, text: "", answer: false },
                    //                         {
                    //                           id: 4,
                    //                           text: e.target.value,
                    //                           answer: false,
                    //                         },
                    //                       ]
                    //                     : question.options.map(
                    //                         (option: any, optionIndex: any) =>
                    //                           optionIndex === 3 // Update the third option
                    //                             ? {
                    //                                 ...option,
                    //                                 text: e.target.value,
                    //                               }
                    //                             : option
                    //                       ),
                    //               }
                    //             : question
                    //       ),
                    //     },
                    //   }));
                    // }}
                  />
                </div>
                {/* option four */}
              </div>
            </div>
            {/* ------option part --------- */}

            <div className=" flex gap-x-6">
              <Button
                className={`${
                  quiz.quizDetails.questions.length === 0
                    ? "bg-gray-400"
                    : "bg-gradient-to-r from-rgbFrom to-rgbTo"
                }`}
                onClick={() => setFormChange(8)}
                disabled={quiz.quizDetails.questions.length === 0}
              >
                Add Assignment
              </Button>
              <Button
                className={` ${"bg-gradient-to-r from-rgbFrom to-rgbTo"}`}
                type="submit"
                // disabled={!nextQuestion}
              >
                Add More Question
              </Button>
            </div>
          </form>
        )}
        {
          //  assignment
          formChange === 8 && (
            <form
              onSubmit={(e) => {
                addAssignment(e);
              }}
            >
              <input
                type="text"
                placeholder="Assignment Title"
                className="primary_input"
                name="assignmentTitle"
                onChange={(e) => {
                  setAssignment((prev) => ({
                    ...prev,
                    title: e.target.value,
                  }));
                }}
              />
              <textarea
                placeholder="Assignment Instructions"
                className="primary_input"
                onChange={(e) => {
                  setAssignment((prev) => ({
                    ...prev,
                    assignmentDetails: {
                      ...prev.assignmentDetails,
                      instructions: e.target.value,
                    },
                  }));
                }}
                name="assignmentInstructions"
              />
              <input
                type="datetime-local"
                placeholder="Assignment File"
                className="primary_input"
                name="assignmentDeadLine"
                onChange={(e) => {
                  setAssignment((prev) => ({
                    ...prev,
                    assignmentDetails: {
                      ...prev.assignmentDetails,
                      deadline: e.target.value,
                    },
                  }));
                }}
              />
              <div className=" flex gap-x-6">
                <Button
                  className="bg-gradient-to-r from-rgbFrom to-rgbTo"
                  onClick={() => setFormChange(9)}
                >
                  Skip
                </Button>
                <Button
                  className="bg-gradient-to-r from-rgbFrom to-rgbTo"
                  type="submit"
                >
                  Save
                </Button>
              </div>
            </form>
          )

          //  assignment
        }
        {formChange === 9 && (
          <Button
            className="bg-gradient-to-r from-rgbFrom to-rgbTo"
            onClick={() => PublishModule()}
            disabled={loading}
          >
            {loading ? "Publishing..." : "Publish"}
          </Button>
        )}
      </div>
    </DashboardCard>
  );
};

export default AddModule;
