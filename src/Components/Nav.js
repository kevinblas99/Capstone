import logo from "../images/logo.svg";
import {Link} from 'react-router-dom';
import "../Styles/Nav.css";
function Nav() {
    return (
      <nav>
    <img src={logo} class="logo1"/>
      <div className="ulcontainer">
      <ul>
         <li><Link to="/" className="nav-item">Home</Link></li>
         <li><Link to="/about" className="nav-item">About</Link></li>
         <li><Link to="/menu" className="nav-item">Menu</Link></li>
         <li><Link to="/reservations" className="nav-item">Reservations</Link></li>
         <li><Link to="/log-in" className="nav-item">Log in</Link></li>
           </ul>
      </div>
      </nav>
    );
};

export default Nav;