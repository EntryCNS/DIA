import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Start from "../pages/select";
<<<<<<< Updated upstream
import ScorePage from "../pages/score";
import GedScorePage from "../pages/gedScore";
import WritePage from "../pages/write";
=======
import ScorePage from "../pages/result";
import GedScorePage from "../pages/inputScore/highSchoolEntranceExamTaker";
import StudentWritePage from "../pages/inputScore/student";
import GraduatedWritePage from "../pages/inputScore/graduated";
>>>>>>> Stashed changes

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< Updated upstream
        <Route path="/" element={<Start/>}/>
        <Route path="/select" element={<Start/>}/>
        <Route path="/gedScore" element={<GedScorePage />} />
        <Route path="/input/student" element={<WritePage />} />
        <Route path="/input/graduated" element={<WritePage />} />
=======
        <Route path="/" element={<Start />} />
        <Route path="/select" element={<Start />} />
        <Route path="/input/highSchoolEntranceExamTaker" element={<GedScorePage />} />
        <Route path="/input/student" element={<StudentWritePage />} />
        <Route path="/input/graduated" element={<GraduatedWritePage />} />
>>>>>>> Stashed changes
        <Route path="/result" element={<ScorePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
