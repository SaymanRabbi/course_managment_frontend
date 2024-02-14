interface props {
  title: string;
}
const Loading: React.FC<props> = ({ title }) => {
  return (
    <div className="z-[99999] w-[100vw] h-[100vh] flex justify-center items-center fixed top-2 left-0">
      <h2 className=" text-error font-bold text-3xl">{title}.....</h2>
    </div>
  );
};

export default Loading;
