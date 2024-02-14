import Register from "./Page/Register";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import VerifyToken from "./Page/VerifyToken";
import Login from "./Page/Login";
import ForgotPass from "./Page/ForgotPass";
import ForgotPassCode from "./Page/ForgotPassCode";
import Home from "./Page/Home";
import Dashboard from "./Page/Dashboard";
import Profile from "./Components/Dashboard/Profile";
import DashboardContent from "./Components/Dashboard/DashboardContent";
import Message from "./Components/Dashboard/Message";
import EnrolledCourses from "./Components/Dashboard/EnrolledCourses";
import Reviews from "./Components/Dashboard/Reviews";
import QuizAttempts from "./Components/Dashboard/QuizAttempts";
import Assignments from "./Components/Dashboard/Assignments";
import Setting from "./Components/Dashboard/Setting";
import VideoPlayer from "./Components/Video/VideoPlayer";
import Quiz from "./Components/Dashboard/Quiz";
import { useUserStore } from "./Store/UserStore";
import { useEffect, useState } from "react";
import RequireAuth from "./Components/RequreAuth";
import NotFound from "./Page/NotFound";
import Unauthorized from "./Page/Unauthorized";
function App() {
  const { getUserByToken, getCourses } = useUserStore((state) => state);
  const [previousRoute, setPreviousRoute] = useState("");
  const route = useLocation().pathname;
  useEffect(() => {
    // Check if the route has changed before calling the function
    if (route !== previousRoute) {
      getUserByToken();
      getCourses();
      setPreviousRoute(route); // Update the previous route after the function call
    }
  }, [route]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-email/:token" element={<VerifyToken />} />
        <Route path="/forgot_pass" element={<ForgotPass />} />
        <Route path="/forgotpasscode/:id" element={<ForgotPassCode />} />
        <Route
          element={
            <RequireAuth allowedRoles={["admin", "teacher", "student"]} />
          }
        >
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard" element={<DashboardContent />} />
            <Route path="/dashboard/profile" element={<Profile />} />

            <Route path="/dashboard/message" element={<Message />} />

            <Route
              path="/dashboard/enrolled-courses"
              element={<EnrolledCourses />}
            />
            <Route path="/dashboard/reviews" element={<Reviews />} />
            <Route path="/dashboard/quiz" element={<QuizAttempts />} />
            <Route path="/dashboard/assignments" element={<Assignments />} />
            <Route path="/dashboard/setting" element={<Setting />} />
            <Route path="/dashboard" element={<Setting />} />
            {/* ------quiz-------- */}
            <Route path="/dashboard/quiz/:id" element={<Quiz />} />
            {/* ------quiz-------- */}
          </Route>
        </Route>
        <Route path="/dashboard/module/video/:id" element={<VideoPlayer />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
