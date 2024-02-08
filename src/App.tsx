import Register from "./Page/Register";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import VerifyToken from "./Page/VerifyToken";
import Login from "./Page/Login";
import ForgotPass from "./Page/ForgotPass";
import ForgotPassCode from "./Page/ForgotPassCode";
import Home from "./Page/Home";
import StudentDashboard from "./Page/StudentDashboard";
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
        <Route path="/dashboard" element={<StudentDashboard />} />
      </Routes>
    </>
  );
}

export default App;
