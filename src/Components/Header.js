import Hero from "../images/Hero.jpg";
function Header() {
    return (
<header class="hero">
    <div>
    <h1 class="title">Little Lemon</h1>
    <h3 class="subtitle">Chicago</h3>
    </div>
    <div></div>
    <div class="divbutton">
    <p class="description">We are a family owned Mediterranean<br />
     resturant, focused <br /> on traditional recipes served with a <br /> modern twist</p>
    <button type="button" class="rtable" >Reserve a table</button>
    </div>
    <img src={Hero} class="heroimg"/>
</header>
    );
};
export default Header;