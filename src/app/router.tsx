import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Start from "../pages/select";
import ScorePage from "../pages/score";
import GedScorePage from "../pages/gedScore";
import StudentWritePage from "../pages/write/student";
import GraduatedWritePage from "../pages/write/graduated";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/select" element={<Start />} />
        <Route path="/gedScore" element={<GedScorePage />} />
        <Route path="/input/student" element={<StudentWritePage />} />
        <Route path="/input/graduated" element={<GraduatedWritePage />} />
        {/* <Route path="/result" element={<ScorePage />} /> */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
