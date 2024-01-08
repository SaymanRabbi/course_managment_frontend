interface Toast {
  message: string;
  type: boolean;
}
const Toast = ({ message, type }: Toast) => {
  return (
    <>
      {type ? (
        <p className="text-white py-1 px-2 rounded-sm shadow-md ml-[10px] text-[12px] bg-green-600 inline-block font-bold">
          {message} please check you email to verify you account{" "}
          <span className=" text-red-600">❤</span>
        </p>
      ) : (
        <p className="bg-red-600 text-gray-200 py-1 px-2 rounded-sm shadow-md ml-[10px] text-[12px] inline-block font-bold">
          {message} 😢
        </p>
      )}
    </>
  );
};

export default Toast;
