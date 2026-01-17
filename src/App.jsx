import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./styles/main.scss";
import { HomePage, ComponentLibrary } from "./pages";

function App() {
  return (
    <BrowserRouter>
      {/* Navigation Links - Floating Buttons */}
      <nav
        style={{
          top: "20px",
          right: "20px",
          zIndex: 1000,
          display: "flex",
          gap: "10px",
        }}
      >
        <Link
          to="/"
          style={{
            padding: "10px 20px",
            background: "#273d89",
            color: "white",
            border: "none",
            borderRadius: "6px",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          Home
        </Link>
        <Link
          to="/components"
          style={{
            padding: "10px 20px",
            background: "#a8b95e",
            color: "white",
            border: "none",
            borderRadius: "6px",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          Components
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/components" element={<ComponentLibrary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
