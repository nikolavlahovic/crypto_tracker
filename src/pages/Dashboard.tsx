import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <div className="wrapper">
      <Navbar />
      <div className="outlet-wrapper">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
