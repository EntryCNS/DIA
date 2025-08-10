import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Main from "../pages/main";
import ScorePage from "../pages/score";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Main />} /> */}
        <Route path="/score" element={<ScorePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
