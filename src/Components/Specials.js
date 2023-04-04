import greeksalad from "../images/greeksalad.jpg";
import bruschetta from "../images/bruchetta.svg";
import lemon from "../images/lemon.jpg";
import {Box, } from "@chakra-ui/react";
import Card from "./Card";
import "../Styles/Specials.css";

const specials = [
    {
      title: "Greek Salad",
      price: "$12.99",
      description: 
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      getImageSrc: () => require("../images/greeksalad.jpg"),
    },
    {
      title: "Bruschetta",
      price: "$13.99",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      getImageSrc: () => require("../images/Bruschetta.jpg"),
    },
    {
      title: "Lemon Dessert",
      price: "$6.99",
      description:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced andis an authentic as can be imagined.",
      getImageSrc: () => require("../images/lemon.jpg"),
    },
]; 

function Specials () {
  return (
 <main class="specials">
    <div class="divspecials">
        <h1>This Weeks Specials!</h1>
        <button class="menu" >Online Menu</button>
        </div>
        <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit,minmax(240px,1fr))"
        gridGap={8}
        padding={15}
      >
        {specials.map((special) => (
          <Card
            key={special.title}
            title={special.title}
            price={special.price}
            description={special.description}
            imageSrc={special.getImageSrc()}
          />
        ))}
      </Box>
   {/* </div>
    <div class="cards">
    <div class="card1">
    <img src={greeksalad} class="greekimg" width="100%"/>
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
    <img src={bruschetta} class="bruschettaimg" width="100%" />
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
    <img src={lemon} class="lemonimg" width="100%"/>
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
  </div> */}
</main>
);};

export default Specials;