import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <a href={"/favorites"}> favorites </a>
    </div>
  );
}

export default Navbar;
