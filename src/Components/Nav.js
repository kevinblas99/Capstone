import logo from "../images/logo.svg";
function Nav() {
    return (
<nav>
    <img src={logo} class="logo"/>
    <ul class="bar1">
        <li class="home"><a href="localhost:3000">Home</a></li>
        <li class="about"><a href="localhost:3000">About</a></li>
        <li class="navmenu"><a href="localhost:3000">Menu</a></li>
        <li class="reservations"><a href="localhost:3000">Reservation</a></li>
        <li class="login"><a href="localhost:3000">Log in</a></li>
    </ul>
</nav>

    );
};

export default Nav;