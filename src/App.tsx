import "./styles/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashbar from "./pages/Dashbar";
import Favorites from "./pages/Favorites";
import Details from "./pages/Details";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Dashbar />} path="/" />
        <Route element={<Favorites />} path="/favorites" />
        <Route element={<Details />} path="/details" />
      </Routes>
    </Router>
  );
}

export default App;
