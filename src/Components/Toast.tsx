interface Toast {
  message: string;
  type: boolean;
}
const Toast = ({ message, type }: Toast) => {
  return (
    <>
      {type ? (
        <p className="text-white py-1 px-2 rounded-sm shadow-xl ml-[10px] text-[12px] inline-block font-bold mb-[6px] capitalize">
          {message}
          <span className=" text-success">❤</span>
        </p>
      ) : (
        <p className=" text-error py-1 px-2 rounded-sm  ml-[10px] text-[12px] inline-block font-bold mb-[6px] shadow-xl capitalize">
          {message} 😢
        </p>
      )}
    </>
  );
};

export default Toast;
