import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="navbar">
      <div className=" nav-links">
        <NavLink to={"/home"}>Home</NavLink>
        {loggedIn && <NavLink to={"/favorites"}>Favorites</NavLink>}
      </div>
      <Button className="login-button" onClick={() => setLoggedIn(true)}>
        Login
      </Button>
    </div>
  );
}

export default Navbar;
