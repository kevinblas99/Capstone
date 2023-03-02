import greeksalad from "../images/greeksalad.jpg";
import bruschetta from "../images/bruchetta.svg";
import lemon from "../images/lemon.jpg";
function Main() {
    return (
<main class="specials">
    <div class="divspecials">
        <h1>This Weeks Specials!</h1>
        <button type="button" class="menu" >Online Menu</button>
    </div>
    <div class="cards">
    <div class="card1">
    <img src={greeksalad} class="greekimg"/>
    <div class="content1">
        <div class="price1">
    <h4>Greek Salad</h4>
    <h4 class="price">$12.99</h4>
    </div>
    <p>The famous greek salad of crispy<br />
         lettuce, peppers, olives and our <br/>
         Chicago style feta cheese, <br />
          garnished with crunchy garlic and <br />
           rosemary croutons.</p>
           <h5>Order Delivery</h5>
           </div>
    </div>
    <div class="card2">
    <img src={bruschetta} class="bruschettaimg"/>
        <div class="content2">
        <div class="price2">
        <h4>Bruschetta</h4>
        <h4 class="price">$13.99</h4>
        </div>
        <p>Our Bruschetta is made from <br />
        grilled bread that has been <br />
         smeared with garlic and seasoned <br />
         with salt and olive oil.</p>
        <h5>Order Delivery</h5>
         </div>
    </div>
    <div class="card3">
    <img src={lemon} class="lemonimg"/>
    <div class="content3">
        <div class="price3">
        <h4>Lemon Dessert</h4>
        <h4 class="price">$6.99</h4>
        </div>
        <p>This comes straight from <br /> 
        grandma’s recipe book, every last <br />
         ingredient has been sourced and <br/>
          is an authentic as can be <br/>
           imagined.</p>
           <h5>Order Delivery</h5>
           </div>
    </div>
        </div>

</main>
    );
};
export default Main;