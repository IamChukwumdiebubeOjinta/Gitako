import { Route, Routes } from "react-router-dom";
import { Stats } from "./Components";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/stat" element={<Stats />} />
    </Routes>
  );
}

export default App;
