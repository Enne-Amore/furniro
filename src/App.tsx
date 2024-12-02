import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/homePage/HomePage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
