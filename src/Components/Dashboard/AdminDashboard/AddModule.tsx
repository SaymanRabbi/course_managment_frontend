import { useForm, SubmitHandler } from "react-hook-form";
import DashboardCard from "../DashboardCard";
import Button from "../../Button/Button";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VideoFormData>();

  const onSubmit: SubmitHandler<VideoFormData> = (data) => {
    console.log(data);
    // Handle form submission logic here
  };
  return (
    <DashboardCard title="Add Module">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" grid grid-cols-12 gap-4">
            <div className="md:col-span-6 col-span-12">
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
            </div>
            <div className="md:col-span-6 col-span-12">
              <div className="mb-4">
                <label htmlFor="url" className="text-textPrimary">
                  Video URL
                </label>
                <input
                  type="text"
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
              </div>
            </div>
            <div className="col-span-12">
              <label htmlFor="bio" className="text-textPrimary">
                Assignment
              </label>
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
            </div>
            {/* All Quizes */}

            <div className="md:col-span-6 col-span-12">
              <div className="mb-4">
                <label htmlFor="quizetitle" className="text-textPrimary">
                  Quize Title
                </label>
                <input
                  type="text"
                  id="title"
                  placeholder="Add Quize Title"
                  {...register("title", { required: "Title is required" })}
                  className="profile_input"
                />
                {errors.title && (
                  <span className="text-red-500">{errors.title.message}</span>
                )}
              </div>
            </div>
            <div className="md:col-span-6 col-span-12">
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
            <div className="md:col-span-6 col-span-12">
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
            <div className="md:col-span-6 col-span-12">
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
            <div className="md:col-span-6 col-span-12">
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
