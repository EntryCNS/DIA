import Router from "./router";
import { ScoreProvider } from "../contexts/ScoreContext";

function App() {
  return (
    <ScoreProvider>
      <Router />
    </ScoreProvider>
  );
}

export default App;