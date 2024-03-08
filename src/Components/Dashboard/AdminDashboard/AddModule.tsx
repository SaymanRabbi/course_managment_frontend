import { useForm, SubmitHandler } from "react-hook-form";
import DashboardCard from "../DashboardCard";
import Button from "../../Button/Button";
import { useState } from "react";

interface VideoFormData {
  title: string;
  url: string;
  description: string;
  quizeOne: string;
  quizeTwo: string;
  quizeThree: string;
  quizeFour: string;
  isWatched: boolean;
}

const AddModule: React.FC = () => {
  const [quize, setQuize] = useState(false);
  const [assignment, setAssignment] = useState(false);
  const [fileInputs, setFileInputs] = useState([]);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VideoFormData>();
  const addFileInput = () => {
    // Add a new file input field
    setFileInputs((prevInputs) => [...prevInputs, {}]);
  };

  const onSubmit: SubmitHandler<VideoFormData> = (data) => {
    console.log(data);
    // Handle form submission logic here
  };

  return (
    <DashboardCard title="Add Module">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label htmlFor="title" className="text-textPrimary">
                Module Title
              </label>
              <input
                type="text"
                id="title"
                {...register("title", { required: "Title is required" })}
                className="profile_input"
                placeholder="Add Title"
              />
              {errors.title && (
                <span className="text-red-500">{errors.title.message}</span>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="url" className="text-textPrimary">
                Video URL
              </label>
              <input
                type="file"
                id="url"
                {...register("url", {
                  required: "URL is required",
                  pattern: {
                    value: /^(ftp|http|https):\/\/[^ "]+$/,
                    message: "Enter a valid URL",
                  },
                })}
                className="profile_input"
                placeholder="Video URl"
              />
              {errors.url && (
                <span className="text-red-500">{errors.url.message}</span>
              )}
              <button
                onClick={addFileInput}
                className="text-textPrimary border border-textPrimary px-4 py-1 rounded-md my-4 block"
              >
                Add
              </button>
            </div>
            {/* Render additional file input fields */}
            {fileInputs.map((input, index) => (
            <div key={index} className="mb-4">
              <label htmlFor={`url${index + 2}`} className="text-textPrimary">
                Additional Video URL {index + 2}
              </label>
              <input
                type="file"
                id={`url${index + 2}`}
                {...register(`url${index + 2}`, {
                  required: "URL is required",
                  pattern: {
                    value: /^(ftp|http|https):\/\/[^ "]+$/,
                    message: "Enter a valid URL",
                  },
                })}
                className="profile_input"
                placeholder={`Video URL ${index + 2}`}
              />
              {errors[`url${index + 2}`] && (
                <span className="text-red-500">{errors[`url${index + 2}`].message}</span>
              )}
            </div>
          ))}
          </div>
          {/* Assignments */}
          <div>
            <div className="col-span-12">
              <button
                onClick={() => setAssignment(!assignment)}
                className="text-textPrimary border border-textPrimary px-2 py-1 rounded-md my-4"
              >
                Assignment
              </button>
              {assignment && (
                <textarea
                  id="bio"
                  className="profile_input resize-none"
                  placeholder="provide assignment"
                  cols={30}
                  rows={8}
                  {...register("description", {
                    required: "Assignment was Required",
                    minLength: {
                      value: 20,
                      message: "Biography should be 20 characters long",
                    },
                  })}
                />
              )}
            </div>
          </div>
          {/* All Quizes */}
          <div>
            <button
              className="text-textPrimary border border-textPrimary px-2 py-1 rounded-md my-4"
              onClick={() => setQuize(!quize)}
            >
              Add Quize
            </button>

            {quize && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="mb-4">
                    <label htmlFor="quizetitle" className="text-textPrimary">
                      Quize Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      placeholder="Add Quize Title"
                      {...register("title", {
                        required: "Title is required",
                      })}
                      className="profile_input"
                    />
                    {errors.title && (
                      <span className="text-red-500">
                        {errors.title.message}
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="FirstOption" className="text-textPrimary">
                    Quiz-1
                  </label>
                  <input
                    type="text"
                    id="optionOne"
                    className="profile_input"
                    placeholder="Add option one"
                    {...register("quizeOne", {
                      required: "quize required",
                    })}
                  />
                </div>
                <div>
                  <label htmlFor="SecondOption" className="text-textPrimary">
                    Quiz-2
                  </label>
                  <input
                    type="text"
                    id="optionTwo"
                    className="profile_input"
                    placeholder="Add option two"
                    {...register("quizeTwo", {
                      required: "quize required",
                    })}
                  />
                </div>
                <div>
                  <label htmlFor="ThirdOption" className="text-textPrimary">
                    Quiz-3
                  </label>
                  <input
                    type="text"
                    id="optionThree"
                    className="profile_input"
                    placeholder="Add option Three"
                    {...register("quizeThree", {
                      required: "quize required",
                    })}
                  />
                </div>
                <div>
                  <label htmlFor="FourthOption" className="text-textPrimary">
                    Quiz-4
                  </label>
                  <input
                    type="text"
                    id="optionFour"
                    className="profile_input"
                    placeholder="Add option Four"
                    {...register("quizeFour", {
                      required: "quize required",
                    })}
                  />
                </div>
              </div>
            )}
          </div>
          {/* Submit Button */}
          <div className="flex justify-end mt-8 w-[150px]">
            <Button
              className=" !py-3 bg-gradient-to-r from-rgbFrom to-rgbTo"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </DashboardCard>
  );
};

export default AddModule;
