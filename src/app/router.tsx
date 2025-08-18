import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Main from "../pages/main";
import ScorePage from "../pages/score";
import GedScorePage from "../pages/gedScore";
import WritePage from "../pages/write";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Main />} /> */}
        <Route path="/score" element={<ScorePage />} />
        <Route path="/gedScore" element={<GedScorePage />} />
        <Route path="/write" element={<WritePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
