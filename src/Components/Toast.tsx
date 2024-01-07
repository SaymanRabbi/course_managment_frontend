interface Toast{
    message:string,
    type:boolean
}
const Toast = (
    {
        message,type
    }:Toast
) => {
    return (
        <>
        {type ? (
          <p className="text-white py-1 px-2 rounded-sm shadow-md w-[80%] ml-[10px] text-[12px] bg-green-600">
            {message} please check you email to verify you account
          </p>
        ) : (
          <p className="bg-red-600 text-white py-1 px-2 rounded-sm shadow-md w-[80%] ml-[10px] text-[12px]">
            {message}
          </p>
        )}
      </>
    );
};

export default Toast;