import { BrowserRouter, Routes, Route} from "react-router-dom";
// import Main from '../pages/main';
import Start from "../pages/start";

const Router = () => {
  return(
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Main/>}/> */}
        <Route path="/start" element={<Start/>}/>
      </Routes>
    </BrowserRouter>
  )
};

export default Router;