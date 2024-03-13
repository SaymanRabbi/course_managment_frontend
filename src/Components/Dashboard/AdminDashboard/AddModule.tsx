import { useState } from "react";

// import { FormData } from "../../../Types";
import Button from "../../Button/Button";
import DashboardCard from "../DashboardCard";
const AddModule = () => {
  const [formChange, setFormChange] = useState(0);
  const [title, setTitle] = useState("");
  const [video, setVideo] = useState({
    title: "",
    url: "",
    type: "video",
    isWatched: false,
  });
  const [quiz, setQuiz] = useState({
    title: "",
    type: "quiz",
    isWatched: false,
    quizDetails: {
      questions: [
        {
          id: Number,
          title: String,
          options: [],
        },
      ],
    },
  });
  const [quizIndex, setQuizIndex] = useState(1);
  const [checked, setChecked] = useState(false);

  return (
    <DashboardCard title="Add Module">
      <div className="bg-bgPrimary md:px-[40px] py-[40px] rounded-[20px] px-[20px]">
        {/* module tittle */}
        {formChange === 0 && (
          <form>
            <input
              type="text"
              placeholder="Module Tittle"
              className="primary_input"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />

            <Button
              className="bg-gradient-to-r from-rgbFrom to-rgbTo"
              onClick={() => setFormChange(1)}
            >
              Next
            </Button>
          </form>
        )}
        {/* module tittle */}
        {/* ------module video------- */}
        {formChange === 1 && (
          <form>
            <input
              type="text"
              placeholder="Video Title"
              className="primary_input"
              onChange={(e) => {
                setVideo((prev) => ({ ...prev, title: e.target.value }));
              }}
            />

            <input
              type="file"
              placeholder="Video URL"
              className="primary_input"
              onChange={(e) => {
                setVideo((prev) => ({ ...prev, url: e.target.value }));
              }}
            />
            <div className=" flex gap-x-6">
              <Button className="bg-gradient-to-r from-rgbFrom to-rgbTo">
                Add More Video
              </Button>
              <Button
                className="bg-gradient-to-r from-rgbFrom to-rgbTo"
                onClick={() => setFormChange((prev) => prev - 1)}
              >
                Previous
              </Button>
              <Button
                className="bg-gradient-to-r from-rgbFrom to-rgbTo"
                onClick={() => setFormChange(2)}
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
                onClick={() => setFormChange((prev) => prev - 1)}
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
          <form>
            <input
              type="text"
              placeholder="Question Title"
              className="primary_input"
              onChange={(e) => {
                setQuiz((prev: any) => ({
                  ...prev,
                  quizDetails: {
                    ...prev.quizDetails,
                    questions: prev.quizDetails.questions.map(
                      (question: any, index: any) =>
                        index === quizIndex - 1
                          ? {
                              ...question,
                              title: e.target.value,
                              id: quizIndex,
                            }
                          : question
                    ),
                  },
                }));
              }}
            />
            {/* ------option part --------- */}
            <div className=" w-[100%]">
              <div className=" flex gap-x-4">
                <div className=" flex items-center gap-x-4  md:w-[50%] w-[100%]">
                  <input
                    type="checkbox"
                    disabled={checked}
                    className=" h-[20px] w-[20px]"
                    onChange={(e) => {
                      setQuiz((prev: any) => ({
                        ...prev,
                        quizDetails: {
                          ...prev.quizDetails,
                          questions: prev.quizDetails.questions.map(
                            (question: any, index: any) =>
                              index === quizIndex - 1
                                ? {
                                    ...question,
                                    options:
                                      question.options.length === 0 // Check if options are empty
                                        ? [
                                            {
                                              id: 1,
                                              text: "",
                                              answer: e.target.checked,
                                            },
                                            { id: 2, text: "", answer: false },
                                            { id: 3, text: "", answer: false },
                                            {
                                              id: 4,
                                              text: "",
                                              answer: false,
                                            },
                                          ]
                                        : question.options.map(
                                            (option: any, optionIndex: any) =>
                                              optionIndex === 0 // Update the third option
                                                ? {
                                                    ...option,
                                                    answer: e.target.checked,
                                                  }
                                                : option
                                          ),
                                  }
                                : question
                          ),
                        },
                      }));
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Option"
                    className="primary_input"
                    onChange={(e) => {
                      setQuiz((prev: any) => ({
                        ...prev,
                        quizDetails: {
                          ...prev.quizDetails,
                          questions: prev.quizDetails.questions.map(
                            (question: any, index: any) =>
                              index === quizIndex - 1
                                ? {
                                    ...question,
                                    options:
                                      question.options.length === 0 // Check if options are empty
                                        ? [
                                            {
                                              id: 1,
                                              text: e.target.value,
                                              answer: false,
                                            },
                                            { id: 2, text: "", answer: false },
                                            { id: 3, text: "", answer: false },
                                            {
                                              id: 4,
                                              text: "",
                                              answer: false,
                                            },
                                          ]
                                        : question.options.map(
                                            (option: any, optionIndex: any) =>
                                              optionIndex === 0 // Update the third option
                                                ? {
                                                    ...option,
                                                    text: e.target.value,
                                                  }
                                                : option
                                          ),
                                  }
                                : question
                          ),
                        },
                      }));
                    }}
                  />
                </div>
                <div className=" flex items-center gap-x-4 md:w-[50%] w-[100%]">
                  <input
                    type="checkbox"
                    disabled={checked}
                    className=" h-[20px] w-[20px]"
                    onChange={(e) => {
                      setQuiz((prev: any) => ({
                        ...prev,
                        quizDetails: {
                          ...prev.quizDetails,
                          questions: prev.quizDetails.questions.map(
                            (question: any, index: any) =>
                              index === quizIndex - 1
                                ? {
                                    ...question,
                                    options:
                                      question.options.length === 0 // Check if options are empty
                                        ? [
                                            {
                                              id: 1,
                                              text: "",
                                              answer: false,
                                            },
                                            {
                                              id: 2,
                                              text: "",
                                              answer: e.target.checked,
                                            },
                                            { id: 3, text: "", answer: false },
                                            {
                                              id: 4,
                                              text: "",
                                              answer: false,
                                            },
                                          ]
                                        : question.options.map(
                                            (option: any, optionIndex: any) =>
                                              optionIndex === 1 // Update the third option
                                                ? {
                                                    ...option,
                                                    answer: e.target.checked,
                                                  }
                                                : option
                                          ),
                                  }
                                : question
                          ),
                        },
                      }));
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Option"
                    className="primary_input"
                    onChange={(e) => {
                      setQuiz((prev: any) => ({
                        ...prev,
                        quizDetails: {
                          ...prev.quizDetails,
                          questions: prev.quizDetails.questions.map(
                            (question: any, index: any) =>
                              index === quizIndex - 1
                                ? {
                                    ...question,
                                    options:
                                      question.options.length === 0 // Check if options are empty
                                        ? [
                                            { id: 1, text: "", answer: false },
                                            {
                                              id: 2,
                                              text: e.target.value,
                                              answer: false,
                                            },
                                            { id: 3, text: "", answer: false },
                                            { id: 4, text: "", answer: false },
                                          ]
                                        : question.options.map(
                                            (option: any, optionIndex: any) =>
                                              optionIndex === 1 // Update the third option
                                                ? {
                                                    ...option,
                                                    text: e.target.value,
                                                  }
                                                : option
                                          ),
                                  }
                                : question
                          ),
                        },
                      }));
                    }}
                  />
                </div>
              </div>
              <div className=" flex gap-x-4">
                <div className=" flex items-center gap-x-4  md:w-[50%] w-[100%]">
                  <input
                    type="checkbox"
                    disabled={checked}
                    className=" h-[20px] w-[20px]"
                    onChange={(e) => {
                      setQuiz((prev: any) => ({
                        ...prev,
                        quizDetails: {
                          ...prev.quizDetails,
                          questions: prev.quizDetails.questions.map(
                            (question: any, index: any) =>
                              index === quizIndex - 1
                                ? {
                                    ...question,
                                    options:
                                      question.options.length === 0 // Check if options are empty
                                        ? [
                                            {
                                              id: 1,
                                              text: "",
                                              answer: false,
                                            },
                                            { id: 2, text: "", answer: false },
                                            {
                                              id: 3,
                                              text: "",
                                              answer: e.target.checked,
                                            },
                                            {
                                              id: 4,
                                              text: "",
                                              answer: false,
                                            },
                                          ]
                                        : question.options.map(
                                            (option: any, optionIndex: any) =>
                                              optionIndex === 2 // Update the third option
                                                ? {
                                                    ...option,
                                                    answer: e.target.checked,
                                                  }
                                                : option
                                          ),
                                  }
                                : question
                          ),
                        },
                      }));
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Option"
                    className="primary_input"
                    onChange={(e) => {
                      setQuiz((prev: any) => ({
                        ...prev,
                        quizDetails: {
                          ...prev.quizDetails,
                          questions: prev.quizDetails.questions.map(
                            (question: any, index: any) =>
                              index === quizIndex - 1
                                ? {
                                    ...question,
                                    options:
                                      question.options.length === 0 // Check if options are empty
                                        ? [
                                            {
                                              id: 1,
                                              text: "",
                                              answer: false,
                                            },
                                            { id: 2, text: "", answer: false },
                                            {
                                              id: 3,
                                              text: e.target.value,
                                              answer: false,
                                            },
                                            { id: 4, text: "", answer: false },
                                          ]
                                        : question.options.map(
                                            (option: any, optionIndex: any) =>
                                              optionIndex === 2 // Update the third option
                                                ? {
                                                    ...option,
                                                    text: e.target.value,
                                                  }
                                                : option
                                          ),
                                  }
                                : question
                          ),
                        },
                      }));
                    }}
                  />
                </div>
                {/* option four */}
                <div className="flex items-center gap-x-4  md:w-[50%] w-[100%]">
                  <input
                    type="checkbox"
                    disabled={checked}
                    className=" h-[20px] w-[20px]"
                    onChange={(e) => {
                      setQuiz((prev: any) => ({
                        ...prev,
                        quizDetails: {
                          ...prev.quizDetails,
                          questions: prev.quizDetails.questions.map(
                            (question: any, index: any) =>
                              index === quizIndex - 1
                                ? {
                                    ...question,
                                    options:
                                      question.options.length === 0 // Check if options are empty
                                        ? [
                                            {
                                              id: 1,
                                              text: "",
                                              answer: false,
                                            },
                                            { id: 2, text: "", answer: false },
                                            { id: 3, text: "", answer: false },
                                            {
                                              id: 4,
                                              text: "",
                                              answer: e.target.checked,
                                            },
                                          ]
                                        : question.options.map(
                                            (option: any, optionIndex: any) =>
                                              optionIndex === 3 // Update the third option
                                                ? {
                                                    ...option,
                                                    answer: e.target.checked,
                                                  }
                                                : option
                                          ),
                                  }
                                : question
                          ),
                        },
                      }));
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Option"
                    className="primary_input"
                    onChange={(e) => {
                      setQuiz((prev: any) => ({
                        ...prev,
                        quizDetails: {
                          ...prev.quizDetails,
                          questions: prev.quizDetails.questions.map(
                            (question: any, index: any) =>
                              index === quizIndex - 1
                                ? {
                                    ...question,
                                    options:
                                      question.options.length === 0 // Check if options are empty
                                        ? [
                                            {
                                              id: 1,
                                              text: "",
                                              answer: false,
                                            },
                                            { id: 2, text: "", answer: false },
                                            { id: 3, text: "", answer: false },
                                            {
                                              id: 4,
                                              text: e.target.value,
                                              answer: false,
                                            },
                                          ]
                                        : question.options.map(
                                            (option: any, optionIndex: any) =>
                                              optionIndex === 3 // Update the third option
                                                ? {
                                                    ...option,
                                                    text: e.target.value,
                                                  }
                                                : option
                                          ),
                                  }
                                : question
                          ),
                        },
                      }));
                    }}
                  />
                </div>
                {/* option four */}
              </div>
            </div>
            {/* ------option part --------- */}

            <div className=" flex gap-x-6">
              <Button
                className="bg-gradient-to-r from-rgbFrom to-rgbTo"
                onClick={() => setFormChange((prev) => prev - 1)}
              >
                Previous
              </Button>
              <Button
                className="bg-gradient-to-r from-rgbFrom to-rgbTo"
                onClick={() => setFormChange(4)}
              >
                Add More Question
              </Button>
            </div>
          </form>
        )}
      </div>
    </DashboardCard>
  );
};

export default AddModule;
