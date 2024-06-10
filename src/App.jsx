import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import BuildingDetails from "./pages/BuildingDetails.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/building/:id" element={<BuildingDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
