import Register from "./Page/Register";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import VerifyToken from "./Page/VerifyToken";
import Login from "./Page/Login";
import ForgotPass from "./Page/ForgotPass";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<h2 className=" text-red-500 pt-[100px]">Home</h2>}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-email/:token" element={<VerifyToken />} />
        <Route path="/forgot_pass" element={<ForgotPass />} />
      </Routes>
    </>
  );
}

export default App;
