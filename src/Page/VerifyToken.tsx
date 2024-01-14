import React, { useEffect } from "react";
import { useUserStore } from "../Store/UserStore";
import { useNavigate, useParams } from "react-router-dom";
const VerifyToken: React.FC = () => {
  const { verifyToken, messages, success } = useUserStore((state) => state);
  const redirect = useNavigate();
  const { token } = useParams();
  useEffect(() => {
    setTimeout(() => {
      const user = async () => {
        await verifyToken(token as string);
      };
      user();
    }, 2000);
  }, []);
  if (
    (messages === "User verified successfully" && success) ||
    (messages === "User already verified" && !success)
  ) {
    setTimeout(() => {
      redirect("/login");
    }, 5000);
  }
  return (
    <div className=" fixed top-0 bottom-0 left-0 right-0 wi-[100%] min-h-[10vh] h-[100%] bg-gray-200 bg-opacity-10 z-[2000] flex justify-center items-center">
      <p
        className={`
         font-bold text-[25px] ${
           messages === "User verified successfully"
             ? "text-green-500"
             : messages === "User already verified"
             ? "text-red-500"
             : messages === "Invalid token"
             ? "text-red-500"
             : ""
         }
         `}
      >
        {messages === "User verified successfully" && success
          ? "User verified successfully"
          : messages === "User already verified" && !success
          ? "User already verified  😊Please Login"
          : messages === "Invalid token" && !success
          ? "Invalid token 😒"
          : "Wait a moment..."}
      </p>
    </div>
  );
};

export default VerifyToken;
