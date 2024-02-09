import PerchesCourseCard from "../Card/PerchesCourseCard";

const EnrolledCourses = () => {
  const data = [
    {
      id: 1,
      title: "Python 100 Days",
    },
    {
      id: 2,
      title: "React 100 Days",
    },
  ];
  return (
    <div className=" grid grid-cols-12 gap-4">
      {data.map((course) => {
        return <PerchesCourseCard key={course.id} />;
      })}
    </div>
  );
};

export default EnrolledCourses;
