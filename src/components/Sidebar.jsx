 
import { Link } from "react-router-dom";
import "./Sidebar.css";  

function Navbar() {
  return (
    <div className="navbar">
      <h2 className="logo">start Framework</h2>
      <ul className="menu">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/portfolio">PORTFOLIO</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;

