import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./styles/main.scss";
import HomePage from "./pages/HomePage/HomePage";
import ComponentLibrary from "./pages/ComponentLibrary/ComponentLibrary";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/components" element={<ComponentLibrary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
