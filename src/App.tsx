import Register from "./Page/Register";
import "./App.css";
import { Routes, Route } from "react-router-dom";
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
import AdminDashboard from './Components/Dashboard/AdminDashboard/AdminDashboard';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-email/:token" element={<VerifyToken />} />
        <Route path="/forgot_pass" element={<ForgotPass />} />
        <Route path="/forgotpasscode/:id" element={<ForgotPassCode />} />
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
          <Route path="/dashboard/admin-dashboard" element={<AdminDashboard />} />
          {/* Admin Dashboard */}


        </Route>
      </Routes>
    </>
  );
}

export default App;
