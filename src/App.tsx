import { Home } from "./components/Home";
import { NotFound } from "./components/NotFound";
import { Start } from "./components/Start";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Theory from "./components/Theme";
import Task from "./components/Task";
import ThemeCreate from "./components/ThemeCreate";
import TaskCreate from "./components/TaskCreate";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start userName="Allan" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/theory/:id" element={<Theory />} />
        <Route path="/theme/create" element={<ThemeCreate />} />
        <Route path="/theme/:themeId/task/:taskId" element={<Task />} />
        <Route path="/task/create" element={<TaskCreate />} />
        <Route element={<NotFound />} /> {/* Страница 404 */}
      </Routes>
      Ф
    </Router>
  );
}

export default App;
