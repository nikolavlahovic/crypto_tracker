import "./styles/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Favorites from "./pages/Favorites";
import Details from "./pages/Details";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Dashboard />} path="/">
          <Route element={<Home />} path="/home" />
          <Route element={<Favorites />} path="/favorites" />
          <Route element={<Details />} path="/details" />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
