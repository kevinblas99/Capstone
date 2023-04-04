import "../Styles/Footer.css";
import {Link} from "react-router-dom";
import footer from "../images/footer.png";
function Footer() {
    return (
<footer>
    <img src={footer} className="footerimg" />
    <div class="doormat">
        <h4>Doormat</h4>
        <ul>
        <li><Link to="/" className="footer-home">Home</Link></li>
        <li><Link to="/" className="footer-about">About us</Link></li>
        <li><Link to="/" className="footer-menu">Menu</Link></li>
        <li><Link to="/reservations" className="footer-reservations">Reservations</Link></li>
        <li><Link to="/" className="footer-login">Log in</Link></li>
        </ul>
    </div>
    <div class="contact">
        <h4>Contact</h4>
        <ul>
        <li><a href="localhost:3000">Address</a></li>
        <li><a href="localhost:3000">Phone Number</a></li>
        <li><a href="localhost:3000">Email</a></li>
        </ul>
    </div>
    <div class="socials">
        <h4>Social Media</h4>
        <ul>
        <li><a href="localhost:3000">Instagram</a></li>
        <li><a href="localhost:3000">Facebook</a></li>
        <li><a href="localhost:3000">Twitter</a></li>
        </ul>
    </div>
</footer>
    );
};
export default Footer;