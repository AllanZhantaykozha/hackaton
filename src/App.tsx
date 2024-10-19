import { Home } from "./components/Home";
import { NotFound } from "./components/NotFound";
import { Start } from "./components/Start";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TAsk } from "./components/Task";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start userName="Allan" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/task" element={<TAsk />} />
        <Route element={<NotFound />} /> {/* Страница 404 */}
      </Routes>
    </Router>
  );
}

export default App;
