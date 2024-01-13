import Register from "./Page/Register";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import VerifyToken from "./Page/VerifyToken";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<h2 className=" text-red-500 pt-[100px]">Home</h2>}
        />
        <Route path="/regsiter" element={<Register />} />
        <Route path="/verify-email/:token" element={<VerifyToken />} />
      </Routes>
    </>
  );
}

export default App;
