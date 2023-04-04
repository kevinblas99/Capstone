import { useNavigate } from "react-router-dom";
import Hero from "../images/Hero.jpg";
import "../Styles/HomeCom.css";
function HomeCom() {
    let navigate = useNavigate();
    return (
<header class="hero">
    <div class="titleshome">
    <h1 class="title">Little Lemon</h1>
    <h3 class="subtitle">Chicago</h3>
    </div>
    <div></div>
    <div class="divbutton">
        <div className="descricontainer">
    <p class="description">We are a family owned Mediterranean <br />
     resturant, focused <br /> on traditional recipes served with a <br /> modern twist</p>
     </div>
    <button onClick={() => {navigate("/reservations")}} class="rtable" >Reserve a table</button>
    </div>
    <img src={Hero} class="heroimg"/>
</header>

    );
};
export default HomeCom;