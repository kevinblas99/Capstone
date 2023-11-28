import { useNavigate } from "react-router-dom";
import Heroop from "../images/Heroop.jpg";
import "../Styles/HomeCom.css";
function HomeCom() {
    let navigate = useNavigate();
    return (
<header class="hero" id="home-section">
    <div class="divbutton">
    <p class="title">Little Lemon</p>
    <p class="subtitle">Chicago</p>
    <p class="description">We are a family owned Mediterranean 
     resturant, focused on traditional recipes served with a modern twist</p>
    <button onClick={() => {navigate("/reservations")}} className="rtable" >Reserve a table</button>
    </div>
    <img src={Heroop} class="heroimg"/>
</header>

    );
};
export default HomeCom;