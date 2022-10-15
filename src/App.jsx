import { Route, Routes } from "react-router-dom";
import { Stats } from "./Components";
import Dashboard from "./Pages/Dashboard";
import FarmBudgetForm from "./Pages/FarmBudgetForm";
import FarmDesignBlocks from "./Pages/FarmDesignBlocks";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/farmBudgetForm" element={<FarmBudgetForm />} />
      <Route path="/farmDesignBlocks" element={<FarmDesignBlocks />} />
      <Route path="/stat" element={<Stats />} />
    </Routes>
  );
}

export default App;
