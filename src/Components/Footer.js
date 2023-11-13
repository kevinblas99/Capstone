import "../Styles/Footer.css";
import {Link} from "react-router-dom";
import footer from "../images/footer.png";
function Footer() {
    return (
<footer>
    <img src={footer} className="footerimg" /> 
    <div class="doormat">
        <h4 className="sss"></h4>
        <ul>
        <li><Link to="/" className="footer-home">Home</Link></li>
        <li><Link to="/" className="footer-about">About us</Link></li>
        <li><Link to="/" className="footer-menu">Menu</Link></li>
        <li><Link to="/reservations" className="footer-reservations">Reservations</Link></li>
        <li><Link to="/" className="footer-login">Log in</Link></li>
        </ul>
    </div>
    <div class="contact">
        <h4 className="sss">Contact</h4>
        <ul>
        <li><a href="/">Address</a></li>
        <li><a href="/">Phone Number</a></li>
        <li><a href="/">Email</a></li>
        </ul>
    </div>
    <div class="socials">
        <h4 className="sss">Socials</h4>
        <ul>
        <li><a href="/">Instagram</a></li>
        <li><a href="/">Facebook</a></li>
        <li><a href="/">Twitter</a></li>
        </ul>
    </div>
</footer>
    );
};
export default Footer;