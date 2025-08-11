import { BrowserRouter, Routes, Route} from "react-router-dom";
// import Main from '../pages/main';
import Start from "../pages/start";
import ScorePage from "../pages/score";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Main/>}/> */}
        <Route path="/start" element={<Start/>}/>
        <Route path="/score" element={<ScorePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
