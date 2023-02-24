import logo from "../images/logo.svg";
function Nav() {
    return (
<nav>
    <img src={logo} id="logo"/>
    <ul>
        <li><a href="localhost:3000">Home</a></li>
        <li><a href="localhost:3000">About us</a></li>
        <li><a href="localhost:3000">Menu</a></li>
        <li><a href="localhost:3000">Reservation</a></li>
        <li><a href="localhost:3000">Log in</a></li>
    </ul>
</nav>
    );
};
export default Nav;