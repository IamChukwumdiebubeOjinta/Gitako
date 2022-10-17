import { Route, Routes } from "react-router-dom";
import { Stats } from "./Components";
import Dashboard from "./Pages/Dashboard";
import FarmBudget from "./Pages/FarmBudget";
import FarmDesign from "./Pages/FarmDesign";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/farmBudget" element={<FarmBudget />} />
      <Route path="/farmDesign" element={<FarmDesign />} />
      <Route path="/stat" element={<Stats />} />
    </Routes>
  );
}

export default App;
