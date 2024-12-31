import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/admin">Admin Module</Link></li>
        <li><Link to="/user">User Module</Link></li>
        <li><Link to="/reporting">Reporting Module</Link></li>
      </ul>
    </nav>
  );
}
export default NavBar;