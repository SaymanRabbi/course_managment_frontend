import React, { useEffect } from "react";
import { useUserStore } from "../Store/UserStore";
import { useNavigate, useParams } from "react-router-dom";
const VerifyToken: React.FC = () => {
  const { user, verifyToken, messages } = useUserStore((state) => state);
  console.log("messages", messages);
  const redirect = useNavigate();
  const { token } = useParams();
  useEffect(() => {
    const user = async () => {
      await verifyToken(token as string);
    };
    user();
    if (messages === "User verified successfully") {
      setTimeout(() => {
        redirect("/login");
      }, 3000);
    }
  }, [user, messages]);
  return (
    <div className=" fixed top-0 bottom-0 left-0 right-0 wi-[100%] min-h-[10vh] h-[100%] bg-gray-200 bg-opacity-10 z-[2000] flex justify-center items-center">
      <p
        className={`
         text-[20px] ${
           messages === "User verified successfully"
             ? "text-green-500"
             : messages === "User already verified"
             ? "text-red-500"
             : ""
         }
         `}
      >
        {messages === "User verified successfully"
          ? "User verified successfully"
          : messages === "User already verified 😊 Please Login"
          ? "User already verified"
          : "Wait a moment..."}
      </p>
    </div>
  );
};

export default VerifyToken;
