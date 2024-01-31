interface Toast {
  message: string;
  type: boolean;
}
const Toast = ({ message, type }: Toast) => {
  return (
    <p
      className={`${
        type ? " text-textPrimary" : " text-error"
      } py-1 px-2 rounded-sm shadow-xl ml-[10px] sm:text-[16px] text-[14px] inline-block font-bold mb-[6px] capitalize`}
    >
      {type ? (
        <>
          {message}
          <span className=" text-success">❤</span>
        </>
      ) : (
        <>{message} 😢</>
      )}
    </p>
  );
};

export default Toast;
