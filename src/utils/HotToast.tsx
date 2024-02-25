import React, { useEffect, useState } from "react";

interface HotToastProps {
  message: string;
  type: "success" | "error" | "warning" | "loading" | null;
  duration: number;
}

const HotToast: React.FC<HotToastProps> = ({ message, type, duration }) => {
  const [toastMessage, setToastMessage] = useState<string>(message);
  const [toastType, setToastType] = useState<
    "success" | "error" | "warning" | "loading" | null
  >(type);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setToastMessage("");
      setToastType(null);
    }, duration);

    // Cleanup the timeout when the component unmounts or when the props change
    return () => clearTimeout(timeoutId);
  }, [message, type, duration]);

  return (
    <div className="fixed z-[9999] bottom-3 right-3">
      {toastType === "success" ? (
        <div className="bg-green-500 text-white px-4 py-2 rounded-md">
          {toastMessage}
        </div>
      ) : toastType === "error" ? (
        <div className="bg-red-500 text-white px-4 py-2 rounded-md">
          {toastMessage}
        </div>
      ) : toastType === "warning" ? (
        <div className="bg-yellow-500 text-white px-4 py-2 rounded-md">
          {toastMessage}
        </div>
      ) : (
        <div className=" hidden">{toastMessage}</div>
      )}
    </div>
  );
};

export default HotToast;
