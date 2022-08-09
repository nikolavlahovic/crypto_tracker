import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar nav-links">
      <NavLink to={"/home"}>Home</NavLink>
      <NavLink to={"/favorites"}>Favorites</NavLink>
    </div>
  );
}

export default Navbar;
