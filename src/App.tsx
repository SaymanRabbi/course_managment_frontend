import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Assignments from "./Components/Dashboard/Assignments";
import DashboardContent from "./Components/Dashboard/DashboardContent";
import EnrolledCourses from "./Components/Dashboard/EnrolledCourses";
import Message from "./Components/Dashboard/Message";
import Profile from "./Components/Dashboard/Profile";
import QuizAttempts from "./Components/Dashboard/QuizAttempts";
import Reviews from "./Components/Dashboard/Reviews";
import Dashboard from "./Page/Dashboard";
import ForgotPass from "./Page/ForgotPass";
import ForgotPassCode from "./Page/ForgotPassCode";
import Home from "./Page/Home";
import Login from "./Page/Login";

import AdminDashboard from "./Components/Dashboard/AdminDashboard/AdminDashboard";
import ManageRole from "./Components/Dashboard/AdminDashboard/ManageRole";
import Notifications from "./Components/Dashboard/AdminDashboard/Notifications";
import PopularInstructor from "./Components/Dashboard/AdminDashboard/PopularInstructor";

import Quiz from "./Components/Dashboard/Quiz";
import Setting from "./Components/Dashboard/Setting";
import VideoPlayer from "./Components/Video/VideoPlayer";

import RequireAuth from "./Components/RequreAuth";

import NotFound from "./Page/NotFound";
import Register from "./Page/Register";
import Unauthorized from "./Page/Unauthorized";

import VerifyToken from "./Page/VerifyToken";
import { useUserStore } from "./Store/UserStore";

import AddModule from "./Components/Dashboard/AdminDashboard/AddModule";
import AllAssignment from "./Components/Dashboard/AdminDashboard/AllAssignment";
import AssignmentDetails from "./Components/Dashboard/AdminDashboard/AssignmentDetails";
import CourseDetails from "./Components/Dashboard/AdminDashboard/CourseDetails";
import NoticeBoard from "./Components/Dashboard/AdminDashboard/NoticeBoard";
import RoomId from "./Components/Dashboard/Room/RoomId";
import Room from "./Components/Dashboard/Room/Room";

function App() {
  const {
    getUserByToken,
    getCourses,
    getAllUsers,
    getNotification,
    getAssignmentswithID,
  } = useUserStore((state: any) => state);
  const [previousRoute, setPreviousRoute] = useState("");
  const route = useLocation().pathname;
  useEffect(() => {
    // Check if the route has changed before calling the function
    if (route !== previousRoute) {
      getUserByToken();
      getCourses();
      getAllUsers();
      setPreviousRoute(route); // Update the previous route after the function call
    }
  }, [route]);
  useEffect(() => {
    getNotification();
    getAssignmentswithID();
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-email/:token" element={<VerifyToken />} />
        <Route path="/forgot_pass" element={<ForgotPass />} />
        <Route path="/forgotpasscode/:id" element={<ForgotPassCode />} />
        <Route path="course-details/:id" element={<CourseDetails />} />
        <Route path="/course_managment/room" element={<RoomId />} />
        <Route path="/course_managment/room/:id" element={<Room />} />
        <Route
          element={
            <RequireAuth allowedRoles={["admin", "student", "super-admin"]} />
          }
        >
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard" element={<DashboardContent />} />

            <Route path="/dashboard/profile" element={<Profile />} />

            <Route path="/dashboard/message" element={<Message />} />

            {/* Admin Dashboard */}

            <Route
              path="/dashboard/notifications"
              element={<Notifications />}
            />

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
        {/* Admin only */}
        <Route
          element={<RequireAuth allowedRoles={["admin", "super-admin"]} />}
        >
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard/add-module" element={<AddModule />} />
            <Route path="/dashboard/manageRole" element={<ManageRole />} />
            <Route path="/dashboard/notice-board" element={<NoticeBoard />} />
            <Route
              path="/dashboard/popular-instructor"
              element={<PopularInstructor />}
            />

            <Route
              path="/dashboard/admin-dashboard"
              element={<AdminDashboard />}
            />
            <Route
              path="/dashboard/allAssignment"
              element={<AllAssignment />}
            />
            <Route
              path="/dashboard/assignment-details/:id"
              element={<AssignmentDetails />}
            />
          </Route>
        </Route>
        {/* Admin only  */}
        <Route element={<RequireAuth allowedRoles={["student"]} />}></Route>
        <Route path="/dashboard/module/video/:id" element={<VideoPlayer />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
