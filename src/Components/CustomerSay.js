import avatar from "../images/avatar.svg";
import avatar2 from "../images/avatar2.svg";
import "../Styles/CustomerSay.css";
function CustomerSay() {
    return (
    <section class="testimonials">
    <h1 class="testicles">Testimonials</h1>
    <div class="customers">
    <div class="customer1">
    <h4>Rating: 5 ⭐</h4>
    <img src="https://i.pravatar.cc/300" class="avatar1" width="50%" height="50%"/>
        <h4>Marie</h4>
        <br></br>
        <p><i>"The food was incredible and service was exceptional.<br />
        I do recommend this place for anyone wondering to try something new."
        </i></p>
           </div>
    <div class="customer2">
    <h4>Rating: 5 ⭐</h4>
    <img src="https://i.pravatar.cc/301" class="avatar2" width="50%" height="50%" />
        <h4>David</h4>
        <br></br>
        <p><i>"I have never tried mediterranean food, but when I got for the first time the bruschetta. <br />
        It was totally mind blowing"
            </i></p>
    </div>
    <div class="customer3">
    <h4>Rating: 5 ⭐</h4>
    <img src="https://i.pravatar.cc/302" class="avatar3" width="50%" height="50%"/>
        <h4>Max</h4>
        <br></br>
        <p><i>"I showed up to the restaurant with my date, just because someone recommended me this place. <br />
        Now I have become a regular to the restaurant, the atmosphere is sensational."
        </i></p>
        </div>
    <div class="customer4">
    <h4>Rating: 5 ⭐</h4>
    <img src="https://i.pravatar.cc/303" class="avatar4" width="50%" height="50%"/>
        <h4>Alyssa</h4>
        <br></br>
        <p><i>"I had such a great time enjoying dinner at the patio <br />
        The service was exceptional, and food was out of this world."
        </i></p>
        </div>
        </div>
    </section>
    )
}

export default CustomerSay;