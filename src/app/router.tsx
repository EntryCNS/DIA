import { BrowserRouter, Routes, Route} from "react-router-dom";
// import Main from '../pages/main';
import Start from "../pages/start";
import ScorePage from "../pages/score";
import GedScorePage from "../pages/gedScore";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Main/>}/> */}
        <Route path="/start" element={<Start/>}/>
        <Route path="/score" element={<ScorePage />} />
        <Route path="/gedScore" element={<GedScorePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
