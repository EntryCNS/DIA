import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Start from "../pages/selectStudentType";
import ScorePage from "../pages/result";
import GedScorePage from "../pages/inputScore/gedScore";
import StudentWritePage from "../pages/inputScore/student";
import GraduatedWritePage from "../pages/inputScore/graduated";
import { FormProvider } from "../contexts/FormContext";

const Router = () => {
  return (
    <BrowserRouter>
      <FormProvider>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/select" element={<Start />} />
          <Route path="/input/highSchoolEntranceExamTaker" element={<GedScorePage />} />
          <Route path="/input/student" element={<StudentWritePage />} />
          <Route path="/input/graduated" element={<GraduatedWritePage />} />
          <Route path="/result" element={<ScorePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </FormProvider>
    </BrowserRouter>
  );
};

export default Router;
